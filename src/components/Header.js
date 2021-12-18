import React from 'react';

function Header(props) {

    return (
        <header className="d-flex justify-between p-40">
            <div className="left d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" className="mr-15" alt="logo" />
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
                        <p><span>1205руб</span></p>
                    </li>
                    <li>
                        <img width={20} height={20} src="/img/icon-heart.png" alt="icon" />
                    </li>
                    <li>
                        <img width={20} height={20} src="/img/icon-profile.png" alt="icon" />
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;