import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoritesCard from '../components/FavoritesCard';
import { GetFavoriteAction } from '../actions/GetFavoriteAction';

const FavoriteList = ({ FavoriteData }) => {
  const dispatch = useDispatch();

  let GetFavReducer = useSelector((state) => state.GetFavReducer);
  let { data } = GetFavReducer;

  const GetResult = () =>
    FavoriteData.forEach((item) => {
      dispatch(GetFavoriteAction(item.id, item.city));
    });

  useEffect(() => {
    GetResult();
  }, []);

  return (
    <div className='days-list'>
      {data.map((item, index) => {
        return <FavoritesCard key={index} data={item} />;
      })}
    </div>
  );
};

export default FavoriteList;
