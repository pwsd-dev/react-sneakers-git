function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="wrapper">
          <div className="left">
            <img src="/img/logo.png" />
            <div className="column">
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <div className="right">
            <ul>
              <li>
                <img src="/img/icon-telegka.png" />

              </li>
              <li>
                <p><span>1205руб</span></p>
              </li>
              <li>
                <img src="/img/icon-heart.png" />

              </li>
              <li>
                <img src="/img/icon-profile.png" />

              </li>

            </ul>
          </div>
        </div>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
      </div>
    </div >
  );
}

export default App;
