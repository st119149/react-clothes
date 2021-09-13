import React from 'react';
import styles from './Header.module.scss';

function Header() {
    return (
        <>
            <div className="container">
                <header className={styles.wrapper}>

                    <div className={styles.right}>

                        <img className={styles.logo} src="/img/main-logo.png" alt="logo" />

                        <div>
                            <h2 className={styles.title}>React clothes</h2>
                            <h3 className={styles.subtitle}>Магазин лучшей одежды</h3>
                        </div>
                    </div>

                    <div className={styles.left}>
                        <a className={styles.item} href='#'>
                            <img src="/img/shopping-cart-solid.svg" alt="heart" />
                            <span>1400р.</span>
                        </a>
                        <a className={styles.item} href='#'>
                            <img src="/img/heart-regular.svg" alt="heart" />
                        </a>
                        <a className={styles.item} href='#'>
                            <img src="/img/user-regular.svg" alt="heart" />
                        </a>
                    </div>

                </header>
            </div>
            <hr className={styles.divider}/>
        </>
    );
}

export { Header };