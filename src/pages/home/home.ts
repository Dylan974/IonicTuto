import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ShopPage } from '../shop/shop';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pageUsers = UsersPage;
  pageShop = ShopPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  // goToShop(){
  //   this.navCtrl.push(ShopPage);
  // }

  goToUsers(){
    this.navCtrl.push(this.pageUsers);
  }

}
