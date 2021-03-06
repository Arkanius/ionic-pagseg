import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { ProductListPage } from '../pages/product-list/product-list';
import { MyCartPage } from '../pages/my-cart/my-cart';
import { CheckoutPage } from '../pages/checkout/checkout';
import { Cart } from '../providers/cart';
import { Http } from '@angular/http';

declare var PagSeguroDirectPayment;


@Component({
  templateUrl: 'app.html',
  providers: [Cart]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    private http: Http
  ) {
    this.initializeApp();
    this.getSession();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Listagem Teste', component: ProductListPage },
      { title: 'My Car', component: MyCartPage },
      { title: 'Checkout', component: CheckoutPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  getSession() {
      this.http.get('http://localhost:8000/api/session')
      .toPromise().then(response => PagSeguroDirectPayment.setSessionId(response.json().sessionId))
  }

}
