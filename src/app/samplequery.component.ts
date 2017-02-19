//put this piece of code in app.component.ts and then run

import { Component } from '@angular/core';
//importingg list and object observable
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let ite of item | async">
      {{ ite.text }}
    </li>
  </ul>
  <div>
    <h4>Filter by size</h4>

    <button (click)="filterBy('small')">Small</button>
    <button (click)="filterBy('medium')">Medium</button>
    <button (click)="filterBy('large')">Large</button>
  </div>
  `,
})

export class AppComponent {

  item: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;

  constructor(af: AngularFire) {

    this.sizeSubject = new Subject();
    this.item = af.database.list('/item', {
      query: {
        orderByChild: 'size',
        equalTo: this.sizeSubject
      }
    });
  }
  filterBy(size: string) {
    this.sizeSubject.next(size); 
  }
}