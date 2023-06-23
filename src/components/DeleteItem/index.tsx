import React from 'react';
import Button from '../Buttons/Button';
import { ButtonType } from '../Buttons/Button/@types';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../context/cart/cartSlice';
import { DeleteItemProps } from './@types';

const DeleteItem = ({ pizzaId }: DeleteItemProps) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(deleteItem(pizzaId))}
      type={ButtonType.SMALL}
    >
      Delete
    </Button>
  );
};

export default DeleteItem;
