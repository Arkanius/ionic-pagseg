import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ProductListPage } from '../pages/product-list/product-list';
import { MyCartPage } from '../pages/my-cart/my-cart';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ProductListPage,
    MyCartPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ProductListPage,
    MyCartPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
