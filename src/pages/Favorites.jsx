import React from 'react';
import Cart from '../components/Cart'
import Card from '../components/Card'

function Favorites({ onAddToCart, cartItem, setCartOpened, items, cartOpened, onRemoveItem, onAddFav }) {
    let card = items.map((item, index) => {
        return (<Card title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            key={index}
            onPlus={(item) => onAddToCart(item)}
            onAddFav={(item) => onAddFav(item)}
        />);
    });
    return (
        <div className="content p-40">
            <h1 className="mb-40">Избранное</h1>
            <div className="d-flex justify-between">
                {card}
            </div>
            <div className="card-wrapper d-flex">
                {cartOpened ? <Cart items={cartItem}
                    onCloseCart={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                    key={cartItem.id} /> : null}
            </div>
        </div>


    )
}

export default Favorites;