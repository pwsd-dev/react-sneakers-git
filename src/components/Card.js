function Card() {
    return (
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
                        <img className="add" width={32} height={32} src="/img/plus.svg" alt="sneakers" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;