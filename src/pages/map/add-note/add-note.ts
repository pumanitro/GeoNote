import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AddNote component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-note',
  templateUrl: './add-note.html'
})
export class AddNote {
  //@ViewChild('someVar') el:ElementRef;
  constructor(public viewCtrl: ViewController) {d
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  addNote(title:string,content:string){

  }

}
