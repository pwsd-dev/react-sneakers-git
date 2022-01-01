import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import axios from 'axios';
import Cart from './components/Cart'
import Header from './components/Header';
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx';

function App() {
  let [items, setItems] = React.useState([]);
  let [favorites, setFavorites] = React.useState([]);
  let [cartOpened, setCartOpened] = React.useState(false);
  let [cartItem, setCartItem] = React.useState([]);
  let [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    async function getData() {

      let cartResponse = await axios.get('https://61bf2889b25c3a00173f4cbe.mockapi.io/cartItem');
      let favoriteResponse = await axios.get('https://61bf2889b25c3a00173f4cbe.mockapi.io/favorites');
      let itemsResponse = await axios.get('https://61bf2889b25c3a00173f4cbe.mockapi.io/items');

      setItems(itemsResponse.data);
      setCartItem(cartResponse.data);
      setFavorites(favoriteResponse.data);
    }

    getData()

  }, []);

  let onAddToCart = async (obj) => {
    // console.log(obj);
    try {
      if (cartItem.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItem((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
        axios.delete(`https://61bf2889b25c3a00173f4cbe.mockapi.io/cartItem/${obj.id}`);
      } else {
        let { data } = await axios.post('https://61bf2889b25c3a00173f4cbe.mockapi.io/cartItem', obj)
        setCartItem((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
    }
  }

  let onAddToFav = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://61bf2889b25c3a00173f4cbe.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter(item => item.id !== obj.id));
      } else {
        let { data } = await axios.post('https://61bf2889b25c3a00173f4cbe.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
    }
  }

  let onRemoveItem = (id) => {
    axios.delete(`https://61bf2889b25c3a00173f4cbe.mockapi.io/cartItem/${id}`);
    setCartItem((prev) => prev.filter(item => item.id !== id));
  }

  let changeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    < div className="wrapper" >
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">

        <div className="card-wrapper d-flex">
          {cartOpened ? <Cart
            items={cartItem}
            onCloseCart={() => setCartOpened(false)}
            onRemove={onRemoveItem} key={cartItem.id} /> : null}
        </div>

        <Routes>
          <Route path='/' exact
            element={<Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              changeSearchInput={changeSearchInput}
              onAddToCart={onAddToCart}
              onAddFav={onAddToFav}

            />}>
          </Route>
          <Route path='/favorites' exact
            element={<Favorites
              items={favorites}
              onAddFav={onAddToFav}
            />}>

          </Route>
        </Routes>

      </div>
    </div >
  );
}

export default App;
