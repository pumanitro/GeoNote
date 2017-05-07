import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import {MapManagerService} from "./map-manager.service";

import { AddNote } from "./add-note/add-note";

// import { Materialize } from 'materialize-css';

declare let google;

/**
 * Generated class for the Map page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [MapManagerService],
  entryComponents: [AddNote]
})
export class Map {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public mapManagerService: MapManagerService, public modalCtrl: ModalController) {
  }

  ionViewDidLoad(){
    this.mapManagerService.mapInit(this.mapElement);
    this.mapManagerService.loadMap();
  }

  presentAddNoteModal() {
    let addNoteModal = this.modalCtrl.create(AddNote, { userId: 8675309 });
    addNoteModal.present();
  }



}
