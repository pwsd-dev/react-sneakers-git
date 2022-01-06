import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '.././context';

function Header(props) {

    // let { cartItem } = React.useContext(AppContext)
    // let total = cartItem.reduce((sum, obj) => obj.price + sum, 0);

    return (

        <header className="d-flex justify-between p-40 cu-p">
            <div className="left d-flex align-center">

                <Link to='/'>
                    <img width={40} height={40} src="/img/logo.png" className="mr-15" alt="logo" />
                </Link>


                <div className="column">
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="right">
                <ul>
                    <li onClick={props.onClickCart}>
                        <img width={20} height={20} src="/img/icon-telegka.png" alt="icon" />
                    </li>
                    <li>
                        <p><span>s</span></p>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            <img width={20} height={20} src="/img/icon-heart.png" alt="icon" />
                        </Link>
                    </li>

                    <li>
                        <img width={20} height={20} src="/img/icon-profile.png" alt="icon" />
                    </li>
                </ul>
            </div>
        </header >


    );
}

export default Header;