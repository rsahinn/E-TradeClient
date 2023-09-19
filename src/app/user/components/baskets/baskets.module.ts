import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsComponent } from './baskets.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BasketsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:BasketsComponent}
    ])
  ]
})
export class BasketsModule { }


/* 
   

  Burada da biz dizi içerisinde obje olarak routların yollarını verme işlemi gerçekleştireceğiz. Admin sayfası altında
  bulunan dosyalarımız için öncelikle sadece admin yazıldığı zaman gideceği component path ile verilir, daha sonra
  children diye bir dizi ikinci parametre olarak verildikten sonra customers, products, orders modülleri dahil edilir.

  path:"admin",component:LayoutComponent,children:[
    {path:"customers",loadChildren:()=>import("./admin/components/customers/customers.module")
      .then(module=>module.CustomersModule)},
  ]
  Bu işlemler neticesinde a etiketi vererek ilgili dosyanın ilgili componentine gidebilmekteyiz. Tabi bununla da 
  ilgili bir kaide bulunmakta. O da href yerine routerLink kullanmak. RouterLink için path içine verdiğimiz değerleri
  vererek ilgili sayfaya gidebiliriz. 

  NOT:  Daha sonra componentleri bünyesinde barındıran genel modül dosyasının içinde RouterModul'ün import edilmesi
  gerekir. Bu kısım hayati bir önem taşımaktadır. Yoksa dosyalar verilen linklere gitmeyecektir. Bizim projemizde
  iki layout yapısı vardı. Bunlardan birincisi admin layout sayfası diğeri genel layout sayfası. Her iki layout
  dosyası için de içinde bulundukları genel modül içerisinde RouterModule tanımlanmalıdır!!!

*/


/*
Material dosyasını import edebilmek için hangi tasarımı kullananacanksak kullanmak istediğimiz componentin modül
dosyası içerisinde web sitesindeki API kısmında bulunan import'u alıp bu module içinde import etmemiz gerekir. Ayrıca
yalnızca html kodları değil aynı zamanda css dosyalarını da kopyalamamız gerekir. Css kodları da ilgili componentin
css dosyası içine yapıştırılmalıdır.

Material dosyasını internetten çektiğimiz zaman import dosyasının ilgili componentin modül dosyasında olması 
burada kritik bir noktadır. 

*/
