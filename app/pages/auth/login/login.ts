import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MenuPage } from '../../menu/menu';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/auth/login/login.html',
})
export class LoginPage {
  
  userLogin: any;

  constructor(private navCtrl: NavController) {
    this.userLogin ={
      email: "",
      password: ""
    } 
  }
  
  login(userLogin){
    this.navCtrl.push(MenuPage);
  }

  openRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

}
