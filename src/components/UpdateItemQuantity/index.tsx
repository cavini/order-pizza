import React from 'react';
import { UpdateItemQuantityProps } from './@types';
import Button from '../Buttons/Button';
import { ButtonType } from '../Buttons/Button/@types';
import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../context/cart/cartSlice';

const UpdateItemQuantity = ({
  pizzaId,
  currentQuantity,
}: UpdateItemQuantityProps) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type={ButtonType.ROUND}
      >
        -
      </Button>
      <span className="text-sm font-medium ">{currentQuantity}</span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type={ButtonType.ROUND}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
