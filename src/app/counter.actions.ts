import { createAction, props } from '@ngrx/store';

export enum CounterEnum {
  INC_COUNTER = '[Counter] Increment Counter',
  DEC_COUNTER = '[Counter] Decrement Counter',
  RESET_COUNTER = '[Counter] Reset Counter',
  UPDATE_INCREMENTBY = '[Counter] Update Increment By Counter',
}

export const incrementCounter = createAction(CounterEnum.INC_COUNTER);

export const decrementCounter = createAction(CounterEnum.DEC_COUNTER);

export const resetCounter = createAction(CounterEnum.RESET_COUNTER);

export const incrementByCounter = createAction(
  CounterEnum.UPDATE_INCREMENTBY,
  props<{ incrementBy: number }>()
);
