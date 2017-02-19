import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Angular2-Firebase
import { AngularFireModule } from 'angularfire2';
//importing for authentication
import { AuthProviders, AuthMethods } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBd3aSP-aGf9VGA1Ovbb-JCzfRz_2slNGA",
  authDomain: "ang2fire-53a29.firebaseapp.com",
  databaseURL: "https://ang2fire-53a29.firebaseio.com",
  storageBucket: "ang2fire-53a29.appspot.com",
  messagingSenderId: "739130327149"
};
//for authentication
export const myFirebaseAuthConfig = {
  //provider: authentication method (google/facebook/github etc)
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

//To specify your authentication ahead of time, you provide
//the AngularFireModule.initializeApp function with an AuthProvider and an AuthMethod.
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

