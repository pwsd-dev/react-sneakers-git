import React from 'react';


import styles from './Card.module.scss';


function Card(props) {

    const [isAdded, setIsAdded] = React.useState(false);
    const [isAddedFav, setIsAddedFav] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
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
                <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
                <p className="mb-15 title">{props.title}</p>
                <div className="d-flex justify-between align-center">
                    <div>
                        <p>Цена</p>
                        <p className="price">{props.price}</p>
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