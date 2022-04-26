import { React, useState, useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

const FiveDaysWeather = ({ date, dayIcon, maxTemp }) => {
  date = new Date(date).toLocaleDateString('en-us', {
    weekday: 'short',
  });
  dayIcon =
    dayIcon.toString().length === 2 ? dayIcon.toString() : '0' + dayIcon;

  return (
    <div className='card-box'>
      {date}
      <br />
      {maxTemp}°C
      <br />
      <img
        style={{ width: '80px', height: '50px' }}
        src={`https://developer.accuweather.com/sites/default/files/${dayIcon}-s.png`}
        alt='Weather icon'
      />
    </div>
  );
};

export default FiveDaysWeather;
