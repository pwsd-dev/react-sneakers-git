import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Cart from './components/Cart'
import Header from './components/Header';

function App() {
  let [items, setItems] = React.useState([]);
  let [cartOpened, setCartOpened] = React.useState(false);
  let [cartItem, setCartItem] = React.useState([]);

  let onAddToCart = (obj) => {
    setCartItem([...cartItem, obj]);
    // console.log(obj);
  }

  // React.useEffect(() => {
  //   fetch('https://61bf2889b25c3a00173f4cbe.mockapi.io/items')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  // }, []);

  React.useEffect(() => {
    axios.get('https://61bf2889b25c3a00173f4cbe.mockapi.io/items').then((res) => {
      setItems(res.data);
    })
  }, []);

  // console.log(cartItem);

  let card = items.map((item, index) => {
    return (<Card title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
      key={index}
      onPlus={(item) => onAddToCart(item)} />);
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
