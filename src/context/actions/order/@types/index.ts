import { Action, ThunkAction } from '@reduxjs/toolkit';
import { CartItemInterface } from '../../../../interfaces/pizza';
import { RootState } from '../../../../store';
import { OrderInterface } from '../../../../interfaces/order';
import { Params } from 'react-router-dom';

export enum Priority {
  ON = 'on',
  OFF = 'off',
}

export interface ActionOrder extends Pick<OrderInterface, 'phone'> {
  cart: CartItemInterface[];
  priority: boolean;
}

export interface ActionFunctionProps {
  request: Request;
  params: Params;
}

export type ReduxAction = ThunkAction<
  Promise<void | null>,
  RootState,
  unknown,
  Action<number>
>;
