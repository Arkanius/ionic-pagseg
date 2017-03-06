import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Cart } from '../../providers/cart'

declare var PagSeguroDirectPayment;

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})


export class CheckoutPage implements OnInit {

  paymentMethods: Array<any> = [];
  paymentMethod:  'Boleto';

  creditCard = {
  	num: '',
  	cvv: '',
  	monthExp: '',
  	yearExp: '',
  	brand: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	private cart: Cart,
  	private ref: ChangeDetectorRef) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  ngOnInit():any {
  	PagSeguroDirectPayment.getPaymentMethods({
  		amount: 5,
/*  		success: function(response) {
  			console.log(response);
  		}*/
  		success: response => {
  			let paymentMethods = response.paymentMethods
  			this.paymentMethods = 
  				Object.keys(paymentMethods).map((k) => paymentMethods[k]);
  			this.ref.detectChanges();

  		}
  	});
  }

  paymentCreditCard() {
  	this.getCreditCardBrand();
  }

  getCreditCardBrand() {
  	  	PagSeguroDirectPayment.getBrand({
  		cardBin: this.creditCard.num.substring(0, 6),

  		success: response => {
  			this.creditCard.brand = response.brand.name
  			this.ref.detectChanges();
  		}
  	});
  }

}
