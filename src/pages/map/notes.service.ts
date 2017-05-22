/**
 * Created by puman on 07.05.2017.
 */

import {Injectable} from "@angular/core";
import { Note } from '../../structures/Note';

//import LatLng = google.maps.LatLng;


@Injectable()
export class NotesService {

  private  Notes: { position, note: Note}[] = [
  //{lat: 0 , lng: 0}
  ];

  constructor() {
  }

  addNote(position, note: Note){
    this.Notes.push({position: position, note: note});
  }

  getNotes(): { position, note: Note}[]{
    return this.Notes;
  }

}
