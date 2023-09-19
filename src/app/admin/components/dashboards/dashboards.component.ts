import { Component } from '@angular/core';
import { AlertifyOptions, AlertifyService,MessageType,Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent {
constructor(private alertify:AlertifyService){}
m(){
  this.alertify.message("Merhaba",{
    messageType:MessageType.Success,
    position:Position.BottomCenter,
    delay:1
  })
}
}
