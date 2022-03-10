import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Table } from 'primeng/table';
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsersFacadeService } from "../../../../core/services/facades/users-facade.service";
import { catchError, map, switchMap } from "rxjs/operators";
import { Observable, Subscription, throwError } from "rxjs";
import { StatusValues } from "../../../../core/interfaces/common.interface";
import { UserMediaModel } from "../../../../core/models";
import { MediaTypes } from "../../../../core/interfaces/media.interface";

export type DialogTypes = 'WARNING' | 'DELETED' | 'SUSPENDED' | 'BLOCKED' | 'ignore';
export type IDialogOptions = {
  [N in DialogTypes]?: {
    header: string;
    message: string;
  };
};
@Component({
  selector: 'pv-users-list',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [],
})
export class UserProfileComponent implements OnInit, OnDestroy, AfterViewInit {
  loading$ = this.usersFacade.loading$;
  videoLoading?: boolean;

  user = {
    name: 'Greg',
    joined: new Date(),
    location: 'Brooklyn, NY',
    lookingFor: 'Friendship, Dating',
    gender: 'Male',
    age: 24,
    ageRange: '23-27',
    showMe: 'Women',
  };

  dialogOptions: IDialogOptions = {
    DELETED: {
      message: `Are you sure you want to <b>delete</b> this account? this cannot be undone.`,
      header: 'Delete Account',
    },
    WARNING: {
      message: `Warning sent to user.`,
      header: 'Send Warning',
    },
    SUSPENDED: {
      message: 'User has been suspended for one week and added to suspended list.',
      header: 'Suspend Account',
    },
    BLOCKED: {
      message: 'User has been blocked from PreVue and added to blocked list.',
      header: 'Block Account',
    },
  };
  openedDialog?: DialogTypes;

  status = StatusValues;
  userData$ = this.activatedRoute.params.pipe(switchMap((params: any) => {
    return this.usersFacade.getById(params.id)
  }), catchError(error => {
    return throwError(error);
  }));
  userMedias$ = this.usersFacade.userMedias$;
  usersLoaded?: boolean;
  userSubscription?: Subscription;
  @ViewChild('profileVideo') profileVideoElement?: ElementRef<HTMLVideoElement>;

  get userVideo$(): Observable<UserMediaModel> {
    return this.userMedias$.pipe(map(medias => {
      return medias.find(media => media.contentType === MediaTypes.VIDEO) || new UserMediaModel()
    }));
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private usersFacade: UsersFacadeService,
  ) {}

  ngOnInit(): void {
    // check is the user list doesn't exist then try to load it
    this.userSubscription = this.userData$.subscribe(user => {
      if(!user) {
        history.back()
      }
    });
    if(this.activatedRoute.snapshot.params['id']) {
      this.usersFacade.getUserMedias(this.activatedRoute.snapshot.params['id']);
    }

    this.userMedias$.subscribe(medias => console.log('user medias', medias));
  }

  ngAfterViewInit() {
    this.checkBrowserSupportHMTML5Videos()
  }

  /*checkBrowserSupportHMTML5Videos, check if the browser support html 5*/
  checkBrowserSupportHMTML5Videos() {
    // Select elements here
    console.log(this.profileVideoElement, 'video element' )

    if(this.profileVideoElement) {
      const video = this.profileVideoElement.nativeElement;
      const videoWorks = !!document.createElement('video').canPlayType;
      if (videoWorks) {
        this.videoLoading = true;
        setTimeout(() => {
          video.controls = false;
          video.classList.remove('invisible');
          this.videoLoading = false;
        }, 1200);
      }
    }

  }
  clear(table: Table) {
    table.clear();
  }

  changeUserStatus(status: DialogTypes) {
    this.usersFacade.put({
      userId: this.activatedRoute.snapshot.params['id'] || '',
      status: status,
      statusValue: true,
    } as any);
  }
  confirm(type: DialogTypes) {
    this.openedDialog = type;
    if(type !== 'DELETED') {
      this.changeUserStatus(type);
    }

    const loadSubs = this.loading$.subscribe(loading => {
      setTimeout(() => {
        if(!loading) {
          const options = this.dialogOptions[type];
          this.confirmationService.confirm({
            ...options,
            accept: () => {
              loadSubs.unsubscribe();
              this.changeUserStatus(type);
            },
            reject: (type: string) => {
              loadSubs.unsubscribe();
            },
          });
        }
      })

    });
  }

  get isPaused(): boolean {
    const video = this.profileVideoElement ? this.profileVideoElement.nativeElement : {} as any;
    return !!(video.paused || video.ended);
  }

  togglePlay(event: any) {
    event.stopPropagation();
    const video = this.profileVideoElement ? this.profileVideoElement.nativeElement : {} as any;
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }

  getMediaContent(medias: UserMediaModel[] | null = [], index: number) {
    return medias && medias[index] && medias[index].contentUrl || new UserMediaModel();
  }

  ngOnDestroy() {
    this.userSubscription && this.userSubscription.unsubscribe();
  }
}
