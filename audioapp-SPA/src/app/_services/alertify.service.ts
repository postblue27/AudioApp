import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { SelectControlValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) { //this e event thrown when user ckicks ok botton
        okCallback();
      } else {}
    });
  }

    success(message: string) {
      alertify.success(message);
    }

    error(message: string) {
      alertify.error(message);
    }

    warning(message: string) {
      alertify.warning(message);
    }

    message(message: string) {
      alertify.message(message);
    }

}
