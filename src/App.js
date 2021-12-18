import React from 'react';
import Card from './components/Card';
import Cart from './components/Cart'
import Header from './components/Header';

const arrSneakers = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.png', id: 1 },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 5799, imageUrl: '/img/sneakers/2.png', id: 2 },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8599, imageUrl: '/img/sneakers/3.png', id: 3 },
  { title: 'Мужские Кроссовки Under Armour Curry 8', price: 9799, imageUrl: '/img/sneakers/4.png', id: 4 },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 15199, imageUrl: '/img/sneakers/5.png', id: 5 },
  { title: 'Мужские Кроссовки Nike Kyrie 7', price: 5799, imageUrl: '/img/sneakers/6.png', id: 6 },
  { title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 12599, imageUrl: '/img/sneakers/7.png', id: 7 },
  { title: 'Мужские Кроссовки Nike LeBron XVIII', price: 9799, imageUrl: '/img/sneakers/8.png', id: 8 },
]

function App() {

  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState();
  const [cartItem, setCartItem] = React.useState([
    { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.png', id: 1 },
    { title: 'Мужские Кроссовки Nike Air Max 270', price: 5799, imageUrl: '/img/sneakers/2.png', id: 2 },
  ]

  );

  let card = arrSneakers.map((obj, index) => {
    return (<Card title={obj.title} imageUrl={obj.imageUrl} price={obj.price} key={index} />);
  });

  return (
    < div className="wrapper" >
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="searchWrapper d-flex justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search">
            <img width={23} height={23} src="/img/search.png" alt="icon"></img>
            <input></input>
          </div>
        </div>
        <div className="card-wrapper d-flex">
          {card}
          {cartOpened ? <Cart items={cartItem} onCloseCart={() => setCartOpened(false)} /> : null}
        </div>

      </div>
    </div >
  );
}

export default App;
