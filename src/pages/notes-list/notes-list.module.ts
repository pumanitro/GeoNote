import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NotesList } from './notes-list';

@NgModule({
  declarations: [
    NotesList,
  ],
  imports: [
    IonicModule.forChild(NotesList),
  ],
  exports: [
    NotesList
  ]
})
export class NotesListModule {}
