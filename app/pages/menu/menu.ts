import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { MainPage } from './main/main';
import { SecondPage } from './second/second';

@Component({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MainPage;

  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private navCtrl: NavController) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Principal', component: MainPage },
      { title: 'Segunda', component: SecondPage }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
