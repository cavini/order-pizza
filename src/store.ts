import { configureStore } from '@reduxjs/toolkit';
import userSlice from './context/user/userSlice';
import cartSlice from './context/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
