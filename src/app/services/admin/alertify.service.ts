import { Injectable } from '@angular/core';
declare var alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message:string, options:Partial<AlertifyOptions>){
    alertify.set('notifier','delay', options.delay)
    alertify.set('notifier','position', options.position)
    alertify[options.messageType](message)
  }

}
export enum MessageType{
  Success="success",
  Error="error",
  Warning="warning",
  Message="message",
  Notify="notify"
}
export enum Position{
  TopLeft="top-left",
  TopRight="top-right",
  ButtomLeft="buttom-left",
  ButtomRight="buttom-right",
  TopCenter="top-center",
  BottomCenter="bottom-center"

}
export class AlertifyOptions{
  messageType:MessageType=MessageType.Success;
  position:Position=Position.BottomCenter;
  delay:number=3;
}


/*
Angular'da bir kütüphaneyi, bir operasyonu, bir işlemi özelleştirmek istiyorsak bu işlemi bir servis üzerinden yaparız.
Servisler hem user için hem de admin için ortak da olabilir ayrı da olabilir. Ortak olan servis içerisinden hem admin 
servisi için hem de kullanıcı servisi için implement işlemi yapılabilir. Servis oluştururken ng g s service şeklinde
oluşturma işlemi yapabiliriz.
Servisimiz üzerinden kullanacağımız metodu parametrik hale getirebiliriz. Metodları Enumaration üzerinden tanımlayıp
daha sonra enum ismi üzerinden çağırma işlemi gerçekleştireceğiz. 

Enum içerisinde belirlediğimiz parametleri daha sonra kullanmak için if else yapısı kurabiliriz. Ancak bu hamallık 
olacaktır. 
  if(messageType==MessageType.Error)
    alertify.error(message)
  if(messageType==MessageType.Success)
  alertify.success(message)

  Bunun yerine şu işlemi kullanırız. 
  alertify[messageType](message)

Alertify servisini bir yerde kullanmak istediğimiz zaman kullanacağımız yerin ts dosyası içerisinde constrcutor üzerinden
dependeny injection işlemini yapıyoruz.
constructor(private alertify:AlertifyService)
{}

NOT:Angular'da bir şeyi parametrik hale getirmek demek onun için enum olarak yeni bir export oluşturmak demektir. 



*/ 