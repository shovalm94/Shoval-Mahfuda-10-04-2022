import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import FiveDaysWeatherList from '../components/FiveDaysWeatherList';
import { CurrentCityAction } from '../actions/CurrentCityAction';
import SearchBar from '../components/SearchBar';
import AddRemoveFavBtn from '../components/AddRemoveFavBtn';

function Home() {
  const dispatch = useDispatch();

  const CurrentCityReducer = useSelector((state) => state.CurrentCityReducer);
  const { id, city, tempMetric, icon } = CurrentCityReducer;

  const GetFavReducer = useSelector((state) => state.GetFavReducer);
  const { data } = GetFavReducer;

  let isFavCity = false;

  isFavCity = data.some((x) => x.id === id);

  useEffect(() => {
    if (city === 'Tel Aviv') {
      dispatch(CurrentCityAction(id, city));
    }
  }, [id]);

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
            <h2 style={{ fontFamily: 'Montserrat' }}>{city}</h2>
            <span>{tempMetric}°C</span>
          </div>

          <div>
            <AddRemoveFavBtn id={id} city={city} isFavCity={isFavCity} />
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
