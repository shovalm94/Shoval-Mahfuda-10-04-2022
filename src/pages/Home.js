import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FiveDaysWeatherList from '../components/FiveDaysWeatherList';
import { CurrentCityAction } from '../actions/CurrentCityAction';
import { AddFavoriteAction } from '../actions/AddFavoriteAction';
import { RemoveFavoriteAction } from '../actions/RemoveFavoriteAction';
import { RemoveFavStateAction } from '../actions/RemoveFavStateAction';
import SearchBar from '../components/SearchBar';

function Home() {
  const dispatch = useDispatch();

  const CurrentCityReducer = useSelector((state) => state.CurrentCityReducer);
  const { id, city, tempMetric, icon } = CurrentCityReducer;

  const GetFavReducer = useSelector((state) => state.GetFavReducer);
  const { data } = GetFavReducer;

  let FavExist;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!GetFavReducer) {
      dispatch(CurrentCityAction(id, city));
    }

    FavExist = data.find((x) => x.id === id);
    if (FavExist) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);

  const handleClick = (e) => {
    FavExist = data.find((x) => x.id === id);
    if (!data.length) {
      dispatch(AddFavoriteAction(id, city));
      setIsFavorite(true);
    } else {
      if (FavExist) {
        dispatch(RemoveFavoriteAction(id));
        dispatch(RemoveFavStateAction(id));
        setIsFavorite(false);
      } else {
        dispatch(AddFavoriteAction(id, city));
        setIsFavorite(true);
      }
    }
  };

  return (
    <div>
      <SearchBar />
      <div className='box'>
        <div className='box-header'>
          <Logo>
            <img
              style={{
                width: '100px',
                height: '60px',
                left: '0px',
                display: 'flex',
              }}
              src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
              alt='icon'
            />
          </Logo>
          <div
            style={{
              fontSize: '1.0rem',
              marginRight: 'auto',
              marginTop: '2rem',
            }}
          >
            <h2>{city}</h2>
            <span>{tempMetric}°C</span>
          </div>

          <div>
            <IconButton
              aria-label='favorite'
              component='span'
              onClick={handleClick}
            >
              {isFavorite ? (
                <Favorite style={{ color: ' red ' }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </div>
        </div>
        <div className='box-footer'>
          <FiveDaysWeatherList />
        </div>
      </div>
    </div>
  );
}
const Logo = styled.a`
  padding: 1rem 0;
  color: black;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
`;

export default Home;
