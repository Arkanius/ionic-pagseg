import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {}

  ngOnInit():any {
  	this.http.get('https://jsonplaceholder.typicode.com/users')
  		.toPromise().then(response => this.products = response.json())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

}
