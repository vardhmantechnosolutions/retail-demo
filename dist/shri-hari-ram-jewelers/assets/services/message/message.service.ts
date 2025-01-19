import { Injectable } from '@angular/core';
import swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {


  constructor() { }

  /******************* toast messages ********************/
  toast(type: any, title: string) {
    const toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      showCloseButton: true,
      timer: 6000
    });
    toast.fire({
      icon: type,
      title,
    });
  }

  /******************* confirmation dialog box (returns a promise) ********************/
  async confirm(title: string, text?: string): Promise<SweetAlertResult> {
    return await swal.fire({
      title: `Are you sure you want to ${title}?`,
      text,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      animation: false,
      allowOutsideClick: false,
      // customClass: 'uk-animation-slide-top-small'
    });
  }

  /******************* confirmation dialog box (returns a promise) ********************/
  async confirmLogout(): Promise<SweetAlertResult> {
    return await swal.fire({
      title: `Due to 15 minutes of inactive, system will mark you logout ?`,
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      animation: false,
      allowOutsideClick: false,
      // customClass: 'uk-animation-slide-top-small'
    });
  }

  /******************* alert dialog box with button ********************/
  alert(type: any, title: string, text?: string) {
    swal.fire({
      title,
      text
      // customClass: 'uk-animation-slide-top-small'
    });
  }

}
