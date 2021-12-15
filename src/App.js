import Card from './components/Card';
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
  return (
    <div className="wrapper">
      <Header />
      <div className="content p-40">
        <div className="searchWrapper d-flex justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search">
            <img width={23} height={23} src="/img/search.png" alt="icon"></img>
            <input></input>
          </div>
        </div>
        <div className="card-wrapper d-flex">
          {
            arrSneakers.map((obj) => (<Card title={obj.title} imageUrl={obj.imageUrl} price={obj.price} key={obj.id} />))
          }
        </div>
        <div className="cart">
          <div className="background"></div>
          <div className="side p-30">
            <b className="">Корзина</b>
            <div className="items">
              <div className="item">
                <div className="left-side">
                  <img width={70} height={70} src="/img/sneakers/1.png" alt="sneakers"></img>
                </div>
                <div className="mid-side"></div>
                <div className="right-side"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
