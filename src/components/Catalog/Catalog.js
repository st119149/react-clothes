import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../../redux/actions/cart';

import MockService from '../../services/MockService';

import { Card } from '../Card/Card';

import styles from './Catalog.module.scss';

function Catalog() {

  const [term, setTerm] = React.useState('');

  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  }

  const handleRemoveFromCart = id => {
    dispatch(removeFromCart(id));
  }

  const { clothes, isLoading } = useSelector(state => ({
    clothes: state.items.items,
    isLoading: state.items.isLoading,
  }));

  const handleSearch = (e) => setTerm(e.target.value);

  let visibleClothes;
  if (isLoading) {
    visibleClothes = Array(8).fill(null).map((item, i) => <Card isLoading />);
  }
  else {
    visibleClothes = clothes
      .filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
      .map(item => {
        return <Card
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          item={item}
        />
      });
  }



  return (
    <div className="container">
      <div className={styles.catalog}>
        <div className={styles.header}>

          <h2 className={styles.title}>
            {term ? `Поиск: ${term}` : `Вся одежда`}
          </h2>

          <div className={styles.searchInput}>
            <img src="/img/search-solid.svg" alt="search" />
            <input type="text" onChange={handleSearch} value={term} placeholder="поиск..." />
          </div>

          <div className={styles.filters}>
            <div>Футболки</div>
            <div>Худи</div>
            <div>Кроссовки</div>
          </div>

          <div className={styles.sort}>
            <img src="/img/sort-amount-down-alt-solid.svg" alt="sort" />
            сортировать по: <span>популярности</span>
          </div>

        </div>

        <div className={styles.content}>
          {visibleClothes.length ? visibleClothes :
            <div className={styles.notFound}>
              <div>Товар не найден</div>
              <img src="/img/sadness.png" alt="sadness" />
            </div>
          }


        </div>
      </div>

    </div>
  );

}

export { Catalog };