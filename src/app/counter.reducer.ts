import { Action, createReducer, on } from '@ngrx/store';
import {
  CounterEnum,
  decrementCounter,
  incrementCounter,
  resetCounter,
} from './counter.actions';

export const counterFeatureKey = 'count';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 1,
};

export const counterReducer = createReducer(
  initialState,
  on(incrementCounter, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrementCounter, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(resetCounter, (state) => {
    return { ...state, counter: 0 };
  })
);

// export function counterReducer(state, action){
//   return _counterReducer(state, action);
// }

// export function counterReducer(
//   state: CounterState = initialState,
//   action: AuthActions
// ): CounterState {
//   switch (action.type) {
//     case CounterEnum.INC_COUNTER:
//       return { ...state, counter: state.counter + 1 };

//     case CounterEnum.DEC_COUNTER:
//       return { ...state, counter: state.counter - 1 };

//     case CounterEnum.DEC_COUNTER:
//       return { ...state, counter: 0 };

//     default:
//       return state;
//   }
// }
