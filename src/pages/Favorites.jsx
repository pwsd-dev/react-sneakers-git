import React from 'react';
import Cart from '../components/Cart'
import Card from '../components/Card'
import AppContext from '../context'

function Favorites({ items,
    onAddToCart,
    cartItem,
    setCartOpened,
    cartOpened,
    onRemoveItem,
    onAddFav }) {

    let { favorites } = React.useContext(AppContext);

    console.log(favorites)

    let card = favorites.map((item, index) => {
        return (<Card title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            key={index}
            onPlus={(item) => onAddToCart(item)}
            onAddFav={(item) => onAddFav(item)}
            favorited={true}
            id={item.id}
        />);
    });
    return (
        <div className="content p-40 justify-between ">
            <h1 className="mb-40">Избранное</h1>
            <div className="d-flex justify-around flex-wrap">
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