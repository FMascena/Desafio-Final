import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './modules/cart';
import productsReducer from './modules/products';
import contactReducer from './modules/contacts';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        contacts: contactReducer
    },
})

export type RootStore = ReturnType<typeof store.getState>

export default store