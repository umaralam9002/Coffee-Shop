import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import TeaItemForm from './TeaItemForm';
import classes from './TeaItem.module.css';

const TeaItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `Rs ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.tea}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TeaItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default TeaItem;