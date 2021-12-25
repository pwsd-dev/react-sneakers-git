import React from 'react';
import Cart from '../components/Cart'
// import Card from '../components/Card'

function Favorites({ searchValue, changeSearchInput, onAddToCart, cartItem, setCartOpened, items, cartOpened, onRemoveItem, onAddFav }) {
    // let card = items
    //     .filter((item) => item.title.toLowerCase().includes(searchValue))
    //     .map((item, index) => {
    //         return (<Card title={item.title}
    //             imageUrl={item.imageUrl}
    //             price={item.price}
    //             key={index}
    //             onPlus={(item) => onAddToCart(item)}
    //             onAddFav={(item) => onAddFav(item)}
    //         />);
    //     });
    return (
        <div className="content p-40">
            <h1>Избранное</h1>

            <div className="card-wrapper d-flex">
                {/* {card} */}
                {cartOpened ? <Cart items={cartItem}
                    onCloseCart={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                    key={cartItem.id} /> : null}
            </div>
        </div>


    )
}

export default Favorites;