import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Map } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Map;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
