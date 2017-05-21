import { Component } from '@angular/core';

import { Map } from '../map/map';

import {NotesList} from '../notes-list/notes-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Map;
  tab2Root = NotesList;

  constructor() {

  }
}
