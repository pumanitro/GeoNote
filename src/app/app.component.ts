import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { APIKey } from './ApiKey';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  apiKey: string = APIKey.key;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      menu.enable(true);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
