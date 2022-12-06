import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, debounceTime, fromEvent, Subject, takeUntil} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService implements OnDestroy {
  private _unsubscriber$: Subject<any> = new Subject();
  private _screenWidth$: BehaviorSubject<number> = new BehaviorSubject(0);
  private _mediaBreakpoint$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.init();
  }

  init(): void {
    this._setScreenWidth(window.innerWidth);
    this._setMediaBreakpoint(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(500),
        takeUntil(this._unsubscriber$)
      )
      .subscribe((evt: any) => {
      this._setScreenWidth(evt.target.innerWidth);
      this._setMediaBreakpoint(evt.target.innerWidth);
    });
  }

  ngOnDestroy() {
    // this._unsubscriber$.next();
    this._unsubscriber$.complete();
    this._screenWidth$.complete();
    this._mediaBreakpoint$.complete();
  }

  public get screenWidth$() {
    return this._screenWidth$;
  }

  public get mediaBreakpoint$() {
    return this._mediaBreakpoint$;
  }

  private _setScreenWidth(width: number): void {
    this._screenWidth$.next(width);
  }

  private _setMediaBreakpoint(width: number): void {
    if (width < 768) {
      this._mediaBreakpoint$.next('sm');
    } else if (width >= 768 && width < 1024) {
      this._mediaBreakpoint$.next('md');
    } else {
      this._mediaBreakpoint$.next('lg');
    }
  }
}

