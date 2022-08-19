import React from 'react'
import { ChevronUp, ChevronDown } from '../icons';
import { increase, decrease, removeCart } from '../features/cart/cartSlice';
import {useDispatch} from  'react-redux';

const CartItem = ({id, img, title,price, quantity}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <div className="img-cta">
        <img src={img} alt={title} />
      </div>
      <div className="price-cta">
        <h4>{title}</h4>
        <p className="item-price">$ {price}</p>
        <button className="remove-btn" onClick={() => dispatch(removeCart(id))}>
          Romove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick ={()=> dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (quantity === 1) {
              return dispatch(removeCart(id));
            } else {
              return dispatch(decrease(id));
            }
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem