import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  template: `
  <div> {{ (af.auth | async)?.uid }} </div>
  <button (click)="login()">Login</button>
  <button (click)="logout()">Logout</button>
  `,
})

export class AppComponent {
  constructor(public af: AngularFire) {}

  login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }
}

/* different methods of authentication

// Anonymous
af.auth.login({
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous,
});

// Email and password
af.auth.login({
  email: 'email@example.com',
  password: 'password',
},
{
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
});

// Social provider redirect
af.auth.login({
  provider: AuthProviders.Twitter,
  method: AuthMethods.Redirect,
});

// Social provider popup
af.auth.login({
  provider: AuthProviders.Github,
  method: AuthMethods.Popup,
});

*/

