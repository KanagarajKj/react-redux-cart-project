import React from 'react'
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <nav>
      <div className="nav-center">
        <h2 className="nav-title">Redux Cart</h2>
        <div className="nav-container">
          <span className='nav-icon'>
            <CartIcon />
          </span>
          <div className="amount-container">
            <p className="total-amount">{quantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar