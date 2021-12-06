function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between p-40">
        <div className="left">
          <img width={40} height={40} src="/img/logo.png" className="mr-15" />
          <div className="column">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <img width={20} height={20} src="/img/icon-telegka.png" />
            </li>
            <li>
              <p><span>1205руб</span></p>
            </li>
            <li>
              <img width={20} height={20} src="/img/icon-heart.png" />
            </li>
            <li>
              <img width={20} height={20} src="/img/icon-profile.png" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
      </div>
    </div >
  );
}

export default App;
