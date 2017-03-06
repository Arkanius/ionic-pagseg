import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import  { Cart } from '../../providers/cart';
import { MyCartPage } from '../my-cart/my-cart';


/*
  Generated class for the ProductList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html'
})
export class ProductListPage implements OnInit {

  	products = Array;
	constructor(public navCtrl: NavController, 
			public navParams: NavParams, 
			private http: Http, 
			private cart: Cart) {}

	ngOnInit():any {
		//this.products = Array<{'name': 'Test1', 'price': 55}>;
		this.http.get('http://localhost:8000/api/products')
			.toPromise().then(response => this.products = response.json())
	}

	addItem(item) {
		this.cart.addItem(item);
		this.navCtrl.push(MyCartPage)
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProductListPage');
	}

}
