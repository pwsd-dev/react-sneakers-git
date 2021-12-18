import React from 'react';

function Cart({ onCloseCart, items = [] }) { // из объекта props с помощью деструктуризации берем переменную onCloseCart и items который по умолчанию пустой массив
    // const [cartOpened, setCardOpened] = React.useState(false);
    return (
        <div className="cart">
            <div className="background"></div>
            <div className="side p-30">
                <b className="" onClick={onCloseCart}>Корзина</b>
                <div className="items">
                    {items.map((obj) => {
                        <div className="item">
                            <div className="left-side">
                                <img width={70} height={70} src={obj.imageUrl} alt="sneakers"></img>
                            </div>
                            <div className="mid-side"></div>
                            <div className="right-side"></div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Cart;