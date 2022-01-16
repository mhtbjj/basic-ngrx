import {
  ActionReducer,
  ActionReducerMap,
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  CounterEnum,
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '../counter.actions';
import {
  counterFeatureKey,
  counterReducer,
  CounterState,
} from '../counter.reducer';

export interface AppState {
  count: CounterState;
  // upcoming: number;
}

export const actionReducerMap = {
  [counterFeatureKey]: counterReducer,
  // upcoming: createReducer(1),
};
export const reducers: ActionReducerMap<AppState> = actionReducerMap;

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
