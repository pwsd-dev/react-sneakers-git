import React from 'react';
import Cart from '../components/Cart'
import Card from '../components/Card'

let card = items
    .filter((item) => item.title.toLowerCase().includes(searchValue))
    .map((item, index) => {
        return (<Card title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            key={index}
            onPlus={(item) => onAddToCart(item)} />);
    });


function Home({ searchValue, changeSearchInput }) {
    return (
        <div className="content p-40">
            <div className="searchWrapper d-flex justify-between mb-40">
                <h1 className="">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="search">
                    <img width={23} height={23} src="/img/search.png" alt="icon"></img>
                    <input value={searchValue} onChange={changeSearchInput}></input>
                </div>
            </div>
            <div className="card-wrapper d-flex">
                {card}
                {cartOpened ? <Cart items={cartItem}
                    onCloseCart={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                    key={cartItem.id} /> : null}
            </div>
        </div>


    )
}

export default Home;