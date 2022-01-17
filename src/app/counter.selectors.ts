import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureKey, CounterState } from './counter.reducer';

export const selectCounterFeature =
  createFeatureSelector<CounterState>(counterFeatureKey);

export const selectCounter = createSelector(
  selectCounterFeature,
  (state) => state.counter
);

export const selectIncrementBy = createSelector(
  selectCounterFeature,
  (state) => state.incrementBy
);
