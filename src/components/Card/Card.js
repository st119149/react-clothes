import React from 'react';

import styles from './Card.module.scss';


function Card({ isLoading = false, onAddToCart, onRemoveFromCart, item }) {

    const [isAdded, setIsAdded] = React.useState(false);
    const handleAddToCart = () => {
        setIsAdded(!isAdded);
        if (isAdded)
            onRemoveFromCart(item.id)
        else
            onAddToCart(item);
    }

    if (isLoading)
        return (
            <div className={styles.loadingCard}>
                <div className={styles.loadingImage}></div>
                <div className={styles.loadingText}></div>
                <div className={styles.loadingPrice}></div>
            </div>
        );

    return (
        <div className={styles.card}>
            <div>
                <img src={item.image} alt="" />
                <h3 className={styles.title}>{item.name}</h3>
            </div>
            <div className={styles.footer}>
                <div>
                    <div className={styles.priceTitle}>Цена:</div>
                    <div className={styles.price}>{item.price} руб.</div>
                </div>
                <img
                    onClick={handleAddToCart}
                    className={styles.like}
                    src={!isAdded ? "/img/plus-square-regular.svg" : "/img/plus-square-solid.svg"}
                    alt="like"
                />
            </div>
        </div>
    );

}

export { Card };