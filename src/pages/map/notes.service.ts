/**
 * Created by puman on 07.05.2017.
 */

import {Injectable} from "@angular/core";
import { Note } from '../../structures/Note';

//import LatLng = google.maps.LatLng;

let Notes: { position, note: Note}[] = [
  //{lat: 0 , lng: 0}
];


@Injectable()
export class NotesService {

  constructor() {
  }

  addNote(position, note: Note){
    Notes.push({position: position, note: note});
  }

}
