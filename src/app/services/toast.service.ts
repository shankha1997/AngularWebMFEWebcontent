import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const TOAST_STATE = {
  success: 'success-toast',
  warning: 'warning-toast',
  danger: 'danger-toast'
};

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(TOAST_STATE.success);
  public showsToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>('Default toast message');

  constructor() { }

  showToast(toastState: string, toastMessage: string): void {
    this.toastState$.next(toastState);
    this.toastMessage$.next(toastMessage);
    this.showsToast$.next(true);
  }

  dismissToast(): void {
    this.showsToast$.next(false);
  }
}
