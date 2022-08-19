import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../cartItems';


const initialState = {
  cartItems: cartItems,
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
    name:'cart',
    initialState,

    reducers:{
      increase: (state, action) => {
        const cartItem = state.cartItems.find((item) => item.id === action.payload);
        cartItem.quantity = cartItem.quantity + 1
      },
      decrease: (state, action) => {
        const cartItem = state.cartItems.find((item) => item.id === action.payload);
        cartItem.quantity = cartItem.quantity - 1
      },
      removeCart: (state,action)=>{
        state.cartItems = state.cartItems.filter((item)=>{
          return item.id !== action.payload;
        });
      },
      clearCart:(state)=> {
        state.cartItems = [];
      }
    }
})

export const { increase, decrease, removeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;