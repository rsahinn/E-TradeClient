import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, MessageTypeToastr } from './services/user/custom-toastr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETradeClient';
  /**
   *
   */
  constructor(private toastr:CustomToastrService) {
    toastr.message("Merhaba","Ramazan",MessageTypeToastr.Info);
    toastr.message("Merhaba","Ramazan",MessageTypeToastr.Warning);
    toastr.message("Merhaba","Ramazan",MessageTypeToastr.Success);
    toastr.message("Merhaba","Ramazan",MessageTypeToastr.Error);
    
  }
}

