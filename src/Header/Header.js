import { Fragment } from 'react';
import css from './Header.module.css';
import chaiImage from '../Assets/cup-829527_1280.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header =(props)=>{
    return(
        <Fragment>
            <header className={css.header}>

                <h1>Coffee Brand</h1>
                <HeaderCartButton  onClickHeaderBtn={props.onShowCart}/>
            </header>
            <div className={css['bg-image']}>
                <img src={chaiImage} alt='A cup of chai'/>
            </div>
        </Fragment>
    );
};

export default Header;