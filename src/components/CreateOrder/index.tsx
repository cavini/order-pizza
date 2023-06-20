import React from 'react';
import { fakeCart } from './mock';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { NavigationStatus } from '../../interfaces/useNavigation';

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
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors?.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
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
          <button
            className="inline-block rounded-full bg-yellow-400  px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {' '}
            {isSubmitting ? 'Placing order...' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
