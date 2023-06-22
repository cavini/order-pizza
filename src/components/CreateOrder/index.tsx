import React from 'react';
import { fakeCart } from './mock';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { NavigationStatus } from '../../interfaces/useNavigation';
import Button from '../Buttons/Button';
import { ButtonType } from '../Buttons/Button/@types';

const CreateOrder = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === NavigationStatus.SUBMITTING;
  const cart = fakeCart;

  const formErrors: any = useActionData();

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors?.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            className="h-6 w-6 cursor-pointer accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type={ButtonType.PRIMARY} disabled={isSubmitting}>
            {' '}
            {isSubmitting ? 'Placing order...' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
