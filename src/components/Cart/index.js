import React from 'react';

function Cart(props) {
    const [cartOpened, setCardOpened] = React.useState(false);
    return (
        <div className="cart">
            <div className="background"></div>
            <div className="side p-30">
                <b className="">Корзина</b>
                <div className="items">
                    <div className="item">
                        <div className="left-side">
                            <img width={70} height={70} src="/img/sneakers/1.png" alt="sneakers"></img>
                        </div>
                        <div className="mid-side"></div>
                        <div className="right-side"></div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;