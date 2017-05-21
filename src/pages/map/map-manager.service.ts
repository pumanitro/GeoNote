/**
 * Created by puman on 06.05.2017.
 */

import {Injectable} from "@angular/core";
import { Geolocation } from '@ionic-native/geolocation';
import { Note } from '../../structures/Note';
//import LatLng = google.maps.LatLng;

declare let google;

@Injectable()
export class MapManagerService {
  private map: any;
  private mapElement;

  constructor( public geolocation: Geolocation){
  }

  loadMap(mapElement){

    this.mapElement = mapElement;
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 17,
        //turn off zoom buttons from the map
        zoomControl: false,
        /*
         zoomControlOptions: {
         position: google.maps.ControlPosition.RIGHT_TOP
         },*/
        //Pegman off :
        streetViewControl: false,
        //Fullscean button turn off:
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      //Adding a range circle to the center of our cords:
      let cityCircle = new google.maps.Circle({
        strokeColor: '#508fff',
        strokeOpacity: 0.2,
        strokeWeight: 2,
        fillColor: '#508fff',
        fillOpacity: 0.1,
        map: this.map,
        center: this.map.getCenter(),
        radius: 100
      });

      /*
      let test = new Note;
      test.title = 'tit';
      test.content = 'test';
      */
      // this.addNewNote(test);

      //Displaying marker in center of the map
      /*
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      let content = "<h4>Information!</h4>";

      this.addInfoWindow(marker, content);
*/
    }, (err) => {
      console.log(err);
    });

  }

  /*public generateNotes(){
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);



    }, (err) => {
      console.log(err);
    });
  }*/

  private addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  private addNote(position ,note: Note){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position
    });

    const content = `<h3>${note.title}</h3><p>${note.content}</p>`;

    this.addInfoWindow(marker, content);
  }

  public addNewNote(note:Note){
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.addNote(latLng,note);

    }, (err) => {
      console.log(err);
    });

    //this.addNote(this.map.getCenter(),note);

  }


}
