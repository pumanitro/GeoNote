import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';

import { NotesService } from '../map/notes.service';
import {Note} from "../../structures/Note";

import {NoteView} from './note-view/note-view';

@Component({
  selector: 'page-notes-list',
  templateUrl: 'notes-list.html',
})
export class NotesList {

  public notes: { position, note: Note }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public noteService: NotesService, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.notes = this.noteService.getNotes();
  }

  gotoNoteView(note) {
    //this.navCtrl.push(NoteView, { note: note });
    let addNoteModal = this.modalCtrl.create(NoteView, { note: note });
    addNoteModal.present();
  }

}
