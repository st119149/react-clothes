import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setItems } from '../../redux/actions/items';

import { Header } from '../Header/Header';
import { Catalog } from '../Catalog/Catalog';

import { fetchItems } from '../../redux/actions/items';

import styles from './App.module.scss';


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (<>
    <Header />
    <Catalog />
  </>);
}

export default App;