import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello AddNote Component');
    this.text = 'Hello World';
  }

}
