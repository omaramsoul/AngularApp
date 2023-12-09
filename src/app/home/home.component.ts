import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const observable = new Observable(observer => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if(count === 2 ){
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error('Count is greater than 3 !!'));
        }
        count++;
      }, 1000)
    })

    this.firstObsSubscription = observable.subscribe(count => {
      console.log(count);
    }, error => {
      console.log(error.message);
    }, () => {
      console.log('Completed !');
    })
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();
  }

}
