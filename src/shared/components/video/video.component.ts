import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
@Component({
  selector: 'pv-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements AfterViewInit {
  @Input() url?: string = '';
  @Input() loading?: boolean;
  @ViewChild('profileVideo') profileVideoElement?: ElementRef<HTMLVideoElement>;

  get isPaused(): boolean {
    const video = this.profileVideoElement
      ? this.profileVideoElement.nativeElement
      : ({} as any);
    return !!(video.paused || video.ended);
  }

  constructor() {}

  ngOnInit() {}

  togglePlay(event: any) {
    event.stopPropagation();
    const video = this.profileVideoElement
      ? this.profileVideoElement.nativeElement
      : ({} as any);
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }
  /*checkBrowserSupportHMTML5Videos, check if the browser support html 5*/
  checkBrowserSupportHMTML5Videos() {
    // Select elements here
    console.log(this.profileVideoElement, 'video element');

    if (this.profileVideoElement) {
      const video = this.profileVideoElement.nativeElement;
      const videoWorks = !!document.createElement('video').canPlayType;
      if (videoWorks) {
        this.loading = true;
        video.controls = false;
        video.classList.remove('invisible');
        this.loading = false;
      }
    }
  }

  ngAfterViewInit() {
    this.checkBrowserSupportHMTML5Videos();
  }
}
