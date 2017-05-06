import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import {MapManagerService} from "./map-manager.service";

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
  providers: [MapManagerService]
})
export class Map {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public mapManagerService: MapManagerService) {

  }

  ionViewDidLoad(){
    this.mapManagerService.mapInit(this.mapElement);
    this.mapManagerService.loadMap();
  }



}
