import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr:ToastrService) { }
  message(message:string,title:string, messageType:MessageTypeToastr){
this.toastr[messageType](message,title);
  }
}
export enum MessageTypeToastr{
  Success="success",
  Info="info",
  Warning="warning",
  Error="error"
}
export enum ToastrPosition{
TopRight="toast-top-right",
BottomRight="toast-bottom-right",
BottomLeft="toast-bottom-left",
TopLeft="toast-top-left",
TopFullWidth="toast-top-right",
BottomFullWidth="toast-top-right",
TopCenter="toast-top-right",
BottomCenter="toast-top-right"
}
