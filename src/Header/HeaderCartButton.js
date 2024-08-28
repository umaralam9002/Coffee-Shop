import css from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon' ;
import CartContext from '../Store/cart-context';
import { useContext } from 'react';

const HeaderCartButton = (props)=>{
    const cartCtx = useContext(CartContext);
    const numberOfItemsInCart = cartCtx.items.reduce((currentNum, item) => {
      return currentNum + item.amount;
    }, 0);
    return(
        <button className={css.buton} onClick={props.onClickHeaderBtn}>
            <span className={css.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={css.badge}>{numberOfItemsInCart}</span>
        </button>
    );
};

export default HeaderCartButton;