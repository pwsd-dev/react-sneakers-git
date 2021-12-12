import Card from './components/Card';
import Header from './components/Header';

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
          <Card />
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
