import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from 'primeng/table';
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService } from 'primeng/api';
import { UsersFacadeService } from "../../../../core/services/facades/users-facade.service";
import { map } from "rxjs/operators";
import { Observable, Subscription } from "rxjs";
import { IDialogOptions, StatusValues, StatusValuesType } from "../../../../core/interfaces/common.interface";
import { UserMediaModel, UserModel } from "../../../../core/models";
import { MediaTypes } from "../../../../core/interfaces/media.interface";
import { MatchFacadeService } from "../../../../core/services/facades/match-facade.service";


@Component({
  selector: 'pv-users-list',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [],
})
export class UserProfileComponent implements OnInit, OnDestroy, AfterViewInit {
  loading$ = this.usersFacade.loading$;
  matchLoading$ = this.matchFacade.loading$;
  videoLoading?: boolean;

  user: UserModel = new UserModel();

  dialogOptions: IDialogOptions = {
    DELETED: {
      message: `Are you sure you want to <b>delete</b> this account? this cannot be undone.`,
      header: 'Delete Account',
    },
    WARNING: {
      message: `Warning sent to user.`,
      header: 'Send Warning',
    },
    SUSPENDED: (status) => ({
      message: `User has been <b>${status ? '' : 'un' }suspended</b> ${status ? 'for one week' : ''} and ${status ? 'added to' : 'removed from'} suspended list.`,
      header: 'Suspend Account',
    }),
    BLOCKED: (status) => ({
      message: `User has been <b>${status ? '' : 'un' }blocked</b> from PreVue and  ${status ? 'added to' : 'removed from'} to blocked list.`,
      header: 'Block Account',
    }),
  };

  openedDialog?: StatusValuesType
  status = StatusValues;

  userData$ = this.usersFacade.userDetails$;
  users$ = this.usersFacade.data$;
  userMedias$ = this.usersFacade.userMedias$;
  usersLoaded?: boolean;
  userSubscription = new Subscription();
  messageSubscription = new Subscription();
  matchMessageSubs = new Subscription();
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
    private matchFacade: MatchFacadeService,
  ) {}

  ngOnInit(): void {
    this.getUserDetails()
    // check is the user list doesn't exist then try to load it
    this.userSubscription = this.userData$.subscribe(user => {
      this.user = user;
    });


    this.userMedias$.subscribe(medias => console.log('user medias', medias));
  }


  ngAfterViewInit() {
    this.checkBrowserSupportHMTML5Videos()
  }

  getUserDetails() {
    if(this.activatedRoute.snapshot.params['id']) {
      this.usersFacade.getUserDetails(this.activatedRoute.snapshot.params['id']);
    }
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

  async changeUserStatus(status: StatusValuesType) {
    const callBack = () => {
      if(status === 'DELETED') {
        this.router.navigate(['..']);
        return;
      }
      this.getUserDetails();
    }
    if(status === 'WARNING') {
      return this.matchFacade.post({
        recipientUserId: this.user.userId,
        type: 5,
      }, callBack);
    }

    let statusValue = true;
    if(status === 'BLOCKED') {
      statusValue = !this.user.isBlocked;
    } else if( status === 'SUSPENDED') {
      statusValue = !this.user.isSuspended;
    }

    await this.usersFacade.put({
      statusValue,
      userId: this.activatedRoute.snapshot.params['id'] || '',
      status: status,
    } as any, callBack);
  }

  confirm(type: StatusValuesType) {
    this.openedDialog = type;
    if(type !== 'DELETED') {
      this.changeUserStatus(type);
    }
    const openDialog = (message: string) => {
      setTimeout(() => {

        if(message === 'success') {
          let statusValue = true;
          if(type === 'BLOCKED') {
            statusValue = !this.user.isBlocked;
          } else if(type === 'SUSPENDED') {
            statusValue = !this.user.isSuspended;
          }

          const options = type === 'SUSPENDED' || type === 'BLOCKED' ? (this.dialogOptions[type] as any)(statusValue) : this.dialogOptions[type];
          this.confirmationService.confirm({
            ...options,
            accept: () => {
              this.messageSubscription.unsubscribe();
              this.matchMessageSubs.unsubscribe();
              this.changeUserStatus(type);
            },
            reject: (type: string) => {
              this.messageSubscription.unsubscribe();
              this.matchMessageSubs.unsubscribe();
            },
          });
        }
      })
    }
    this.messageSubscription = this.usersFacade.message$.subscribe(message => {
      openDialog(message);
    });

    this.matchMessageSubs = this.matchFacade.message$.subscribe(message => {
      openDialog(message);
    })
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
    this.userSubscription.unsubscribe();
    this.messageSubscription.unsubscribe();
    this.matchMessageSubs.unsubscribe();
  }
}
