import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

import { Note } from '../../../structures/Note';

@Component({
  selector: 'note-view',
  templateUrl: './note-view.html'
})
export class NoteView {

  public note: Note;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    this.note = viewCtrl.data.note;
  }

  goBack() {
    this.navCtrl.pop();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
