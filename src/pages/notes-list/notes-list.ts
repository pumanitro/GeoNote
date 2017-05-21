import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NotesService } from '../map/notes.service';

@Component({
  selector: 'page-notes-list',
  templateUrl: 'notes-list.html',
})
export class NotesList {

  constructor(public navCtrl: NavController, public navParams: NavParams, public noteService: NotesService) {
  }

  ionViewDidLoad() {
  }

}
