import React from 'react';
import styles from './Cart.module.scss';

function Cart({ onCloseCart, items = [] }) { // из объекта props с помощью деструктуризации берем переменную onCloseCart и items который по умолчанию пустой массив
    return (
        <div className={styles.cart}>
            <div className={styles.background}></div>
            <div className={styles.side}>
                <b onClick={onCloseCart}>Корзина</b>
                <div className={styles.mb40}></div>
                <div className="items">
                    {items.map((obj, index) => {
                        return (

                            <div className={styles.item}>
                                <div className="left-side">
                                    <img width={70} height={70} src={obj.imageUrl} alt="sneakers"></img>
                                </div>
                                <div className="mid-side">
                                    {obj.title}
                                    <div className={styles.price}>
                                        {obj.price}<p>руб.</p>
                                    </div>

                                </div>
                                <div onClick={() => console.log(123)} className="right-side">
                                    x
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Cart;