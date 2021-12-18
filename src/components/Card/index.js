import React from 'react';
import styles from './Card.module.scss';


function Card({ title, imageUrl, price, onPlus, onFavTwo }) {

    const [isAdded, setIsAdded] = React.useState(false);
    const [isAddedFav, setIsAddedFav] = React.useState(false);

    const onClickPlus = () => {
        // onPlus();
        setIsAdded(!isAdded);
        console.log('нажал на плюс')
    };

    const onClickFav = () => {
        setIsAddedFav(!isAddedFav)
    };

    React.useEffect(() => {
    }, [isAdded, isAddedFav]);

    return (
        <div className={styles.card}>
            <div className="card-inner">
                <div className="favourite">
                    <img className="heart-unliked" width={32} height={32} onClick={onClickFav} src={isAddedFav ? "./img/heart-liked.svg" : "./img/heart-unliked.svg"} alt="heart-unliked" />
                </div>
                <img width={133} height={112} src={imageUrl} alt="sneakers" />
                <p className="mb-15 title">{title}</p>
                <div className="d-flex justify-between align-center">
                    <div>
                        <p>Цена</p>
                        <p className="price">{price}</p>
                    </div>
                    <div>
                        <img className="add" onClick={onClickPlus} width={32} height={32} src={isAdded ? "./img/icon-buyed.svg" : "./img/plus.svg"} alt="sneakers" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;