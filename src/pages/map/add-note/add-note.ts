import {Component, Input, ViewChild} from '@angular/core';
import { ViewController } from 'ionic-angular';

import { MapManagerService } from '../map-manager.service';
import { Note } from '../../../structures/Note';

/**
 * Generated class for the AddNote component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-note',
  templateUrl: './add-note.html',
  providers: [MapManagerService]
})
export class AddNote {
  //@ViewChild('someVar') el:ElementRef;
  @ViewChild('noteTitle') noteTitle;
  @ViewChild('noteContent') noteContent;

  constructor(public viewCtrl: ViewController, public mapManagerService: MapManagerService) {
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  addNewNote(){
    let note = new Note();

    note.title = this.noteTitle.value;
    note.content = this.noteContent.value;

    this.mapManagerService.addNewNote(note);
  }

}
