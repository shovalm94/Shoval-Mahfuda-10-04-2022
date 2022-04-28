import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CurrentCityAction } from '../actions/CurrentCityAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FavoritesCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let icon =
    data.data[0].WeatherIcon.toString().length === 2
      ? data.data[0].WeatherIcon.toString()
      : '0' + data.data[0].WeatherIcon;

  const handleClick = () => {
    dispatch(CurrentCityAction(data.id, data.city));
    navigate('/');
  };
  return (
    <div className='card-fav-box' onClick={handleClick}>
      {data.city}
      <br />
      {data.data[0].Temperature.Metric.Value}°C
      <br />
      <img
        style={{ width: '80px', height: '50px' }}
        src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
        alt='Weather icon'
      />
    </div>
  );
};

export default FavoritesCard;
