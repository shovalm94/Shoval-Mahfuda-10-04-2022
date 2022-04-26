import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteList from '../components/FavoriteList';
const Favorites = () => {
  let AddRemoveFavoritesReducer = useSelector(
    (state) => state.AddRemoveFavoritesReducer
  );
  let { favorites } = AddRemoveFavoritesReducer;

  return (
    <div className='box'>
      <h2 style={{ textAlign: 'center', margin: '5%' }}>Your Favorites </h2>
      <FavoriteList FavoriteData={favorites}></FavoriteList>
    </div>
  );
};

export default Favorites;
