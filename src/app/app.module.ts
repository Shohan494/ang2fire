import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Angular2-Firebase
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBd3aSP-aGf9VGA1Ovbb-JCzfRz_2slNGA",
  authDomain: "ang2fire-53a29.firebaseapp.com",
  databaseURL: "https://ang2fire-53a29.firebaseio.com",
  storageBucket: "ang2fire-53a29.appspot.com",
  messagingSenderId: "739130327149"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}