import React, { FormEvent, useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { NavigationStatus } from '../../interfaces/useNavigation';
import Button from '../Buttons/Button';
import { ButtonType } from '../Buttons/Button/@types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getCart, getTotalCartPrice } from '../../context/cart/cartSlice';
import EmptyCart from '../EmptyCart';
import { formatCurrency } from '../../utils';
import { fetchAddress } from '../../context/user/userSlice';
import { UserInitialState, UserStateStatus } from '../../context/user/@types';

const CreateOrder = () => {
  const [withPriority, setWithPriority] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector<RootState, UserInitialState>((state) => state.user);

  const isLoadingAddress = addressStatus === UserStateStatus.LOADING;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === NavigationStatus.SUBMITTING;
  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const formErrors: any = useActionData();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors?.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              defaultValue={address}
              disabled={isLoadingAddress}
              required
            />
            {addressStatus === UserStateStatus.ERROR && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span className="absolute right-[3px] top-[3px]  z-50 md:right-[5px] md:top-[5px]">
              <Button
                disabled={isLoadingAddress}
                onClick={(e: FormEvent) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                type={ButtonType.SMALL}
              >
                Get Position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 cursor-pointer accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />

          <Button
            type={ButtonType.PRIMARY}
            disabled={isSubmitting || isLoadingAddress}
          >
            {' '}
            {isSubmitting
              ? 'Placing order...'
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
