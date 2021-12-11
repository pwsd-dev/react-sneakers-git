function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between p-40">
        <div className="left d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" className="mr-15" alt="logo" />
          <div className="column">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <img width={20} height={20} src="/img/icon-telegka.png" alt="icon" />
            </li>
            <li>
              <p><span>1205руб</span></p>
            </li>
            <li>
              <img width={20} height={20} src="/img/icon-heart.png" alt="icon" />
            </li>
            <li>
              <img width={20} height={20} src="/img/icon-profile.png" alt="icon" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40">
        <div className="searchWrapper d-flex justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search">
            <img width={23} height={23} src="/img/search.png" alt="icon"></img>
            <input></input>
          </div>
        </div>
        <div className="card-wrapper d-flex">
          <div className="card">
            <div className="card-inner">
              <div className="favourite">
                <img className="heart-unliked" width={32} height={32} src="/img/heart-unliked.svg" alt="heart-unliked" />
              </div>
              <img width={133} height={112} src="/img/sneakers/1.png" alt="sneakers" />
              <p className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div className="d-flex justify-between align-center">
                <div>
                  <p>Цена</p>
                  <p className="price">12 999руб.</p>
                </div>

                <div>
                  <img width={32} height={32} src="/img/plus.svg" alt="sneakers" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
