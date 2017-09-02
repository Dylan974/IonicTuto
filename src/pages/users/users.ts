import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Accès refusé !',
        subTitle: 'Vous n\'avez pas la permission d\'accéder à cette page',
        buttons: ['OK']
      });
      alert.present();
    }

  goToUser(name:string){
    this.navCtrl.push(UserPage, {userName : name});
  }

  /*
    est executer quand la page se charge
    retourne un boolean ou une promise de boolean
    si true accès à la page
    si false affiche popup
   */
  ionViewCanEnter(): boolean | Promise<boolean> {
    const rnd = Math.random();
    if(rnd > 0.5){
      console.log('ionViewCanEnter');
      return true;
    } else {
      console.log('ionViewCan\'tEnter');
      this.showAlert();
      return false;
    }
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewCanLeave(): boolean | Promise<boolean> {
    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve(), 1000);
    });
    return promise;
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload ');
  }

}
