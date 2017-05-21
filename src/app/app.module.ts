import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Map } from '../pages/map/map';
import { NotesList } from '../pages/notes-list/notes-list';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

import { AddNote } from '../pages/map/add-note/add-note';

import {MapManagerService } from '../pages/map/map-manager.service';

import {NotesService} from '../pages/map/notes.service';

@NgModule({
  declarations: [
    MyApp,
    NotesList,
    Map,
    AddNote,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotesList,
    Map,
    AddNote,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    MapManagerService,
    NotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
