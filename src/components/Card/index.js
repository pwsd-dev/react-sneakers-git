import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";
import AppContext from '../../context'


function Card({ id,
    title,
    imageUrl,
    price,
    onPlus,
    onAddFav,
    favorited = false,
    loading = false,

}) {

    let { itemAdded, favorites } = React.useContext(AppContext)
    // const [isAdded, setIsAdded] = React.useState(added);
    const [isAddedFav, setIsAddedFav] = React.useState(favorited);

    const onClickPlus = () => {

        onPlus({ id, title, imageUrl, price });
    };

    const onClickFav = () => {
        setIsAddedFav(!isAddedFav)
        onAddFav({ id, title, imageUrl, price });

    };

    React.useEffect(() => {
    }, [itemAdded, isAddedFav]);

    // console.log(itemAdded)

    return (
        <div className={styles.card}>
            {loading ? <ContentLoader
                speed={2}
                width={200}
                height={350}
                viewBox="0 0 400 150"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"></ContentLoader> : <><div className="card-inner">
                    <div className="favourite">
                        <img className="heart-unliked"
                            width={32} height={32}
                            onClick={onClickFav}
                            src={isAddedFav ? "./img/heart-liked.svg" : "./img/heart-unliked.svg"}
                            alt="heart-unliked" />
                    </div>
                    <img width={133} height={112} src={imageUrl} alt="sneakers" />
                    <p className="mb-15 title">{title}</p>
                    <div className="d-flex justify-between align-center">
                        <div>
                            <p>Цена</p>
                            <p className="price">{price}</p>
                        </div>
                        <div>
                            <img className="add"
                                onClick={onClickPlus}
                                width={32} height={32}
                                src={itemAdded(id) ? "./img/icon-buyed.svg" : "./img/plus.svg"}
                                alt="sneakers" />
                        </div>
                    </div>
                </div></>}


        </div>
    )
}

export default Card;