import { configureStore } from '@reduxjs/toolkit'
import ProductsSlices from '../rtk/ProductsSlices'
import CartSlices from './CartSlices';
export const Store=configureStore(
    {
        reducer:
        {
            products:ProductsSlices,
            Cart:CartSlices
        },
    }
)

export default Store;
