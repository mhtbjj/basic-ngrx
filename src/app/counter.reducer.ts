import { Action, createReducer, on } from '@ngrx/store';
import {
  CounterEnum,
  decrementCounter,
  incrementByCounter,
  incrementCounter,
  resetCounter,
} from './counter.actions';

export const counterFeatureKey = 'count';

export interface CounterState {
  counter: number;
  incrementBy: number;
}

export const initialState: CounterState = {
  counter: 0,
  incrementBy: 1,
};

export const counterReducer = createReducer(
  initialState,
  on(incrementByCounter, (state, action) => {
    return { ...state, incrementBy: action.incrementBy };
  }),
  on(incrementCounter, (state) => {
    return { ...state, counter: state.counter + state.incrementBy };
  }),
  on(decrementCounter, (state) => {
    return { ...state, counter: state.counter - state.incrementBy };
  }),
  on(resetCounter, (state) => {
    return {
      ...state,
      counter: initialState.counter,
      incrementBy: initialState.incrementBy,
    };
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
