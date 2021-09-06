import { createAction, props } from '@ngrx/store';
import { Board } from '../models/board.model';

export enum BoardActionTypes {
  InitializeBoard = '[Board] initialize Board',
  PrepareSystemBoard = '[Board] Prepare System Board',
  PrepareSystemBoardCompleted = '[Board] Prepare System Board Completed',
  DropMissile = '[Board] Drop Missile'
}

export const initializeBoard = createAction(BoardActionTypes.InitializeBoard);
export const prepareSystemBoard = createAction(BoardActionTypes.PrepareSystemBoard);
export const prepareSystemBoardCompleted = createAction(
  BoardActionTypes.PrepareSystemBoardCompleted,
  props<{ data: Board }>()
);
export const dropMissile = createAction(
  BoardActionTypes.DropMissile,
  props<{ data: string }>()
);
