import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import {
  decrementCounter,
  incrementByCounter,
  incrementCounter,
  resetCounter,
} from '../counter.actions';
import { counterFeatureKey, CounterState } from '../counter.reducer';
import { selectCounter, selectIncrementBy } from '../counter.selectors';
import { AppState } from '../reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;
  incrementBy: number = 1;

  constructor(private store: Store<AppState>) {
    this.store
      .select(selectIncrementBy)
      .subscribe((data) => (this.incrementBy = data));
    this.counter$ = this.store.select(selectCounter);
  }

  ngOnInit(): void {}

  increment() {
    console.log('Hello');

    this.store.dispatch(incrementCounter());
  }

  incrementByChange() {
    this.store.dispatch(incrementByCounter({ incrementBy: this.incrementBy }));
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }

  reset() {
    this.store.dispatch(resetCounter());
  }
}
