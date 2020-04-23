import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Hospitals',
      url: '/hospitals',
      icon: 'medkit-outline'
    },
    {
      title: 'About Us',
      url: '/about',
      icon: 'information-circle-outline'
    }
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.initializeApp();
    if (this.platform.is('android')) {
      this.platform.backButton.subscribeWithPriority(0, () => {

      if (this.router.url === '/home' ) {
        if(window.confirm("Do you want to exit App?")){
          navigator['app'].exitApp();
        }
         
      }
      else {
       this.navCtrl.back();
      }
    });
  }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 
}
