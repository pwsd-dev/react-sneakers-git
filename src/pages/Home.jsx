import React from 'react';
import Cart from '../components/Cart'
import Card from '../components/Card'


function Home({ items,
    cartItem,
    searchValue,
    changeSearchInput,
    onAddToCart,
    setCartOpened,
    cartOpened,
    onRemoveItem,
    onAddFav,
    isLoadingItems
}) {

    let renderItems = () => {

        return (isLoadingItems ? [...Array(10)] : <>{card}</>)

    }


    let card = items
        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item, index) => {
            return (<Card
                items={items}
                // cartItem={cartItem}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                key={index}
                onPlus={(item) => onAddToCart(item)}
                onAddFav={(item) => onAddFav(item)}
                id={item.id}
                loading={isLoadingItems}
            />);

        });


    return (
        <div className="content p-40">
            <div className="searchWrapper d-flex justify-between mb-40">
                <h1 className="">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="search">
                    <img width={23} height={23} src="/img/search.png" alt="icon"></img>
                    <input value={searchValue} onChange={changeSearchInput}></input>
                </div>
            </div>
            <div className="card-wrapper d-flex justify-around">
                {renderItems()}
                {cartOpened ? <Cart items={cartItem}
                    onCloseCart={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                    key={cartItem.id} /> : null}
            </div>
        </div>


    )
}

export default Home;