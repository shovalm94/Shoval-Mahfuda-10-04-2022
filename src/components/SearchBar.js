import { React, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { TextField, InputAdornment } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { SearchCityAction } from '../actions/SearchCityAction';
import { CurrentCityAction } from '../actions/CurrentCityAction';

function SearchBar() {
  const dispatch = useDispatch();

  const [city, setCity] = useState();

  const SearchCityReducer = useSelector((state) => state.SearchCityReducer);
  const { data } = SearchCityReducer;

  const dispatchSearch = useCallback(() => {
    if (city) {
      dispatch(SearchCityAction(city));
    }
  }, [city]);

  useEffect(
    () => {
      dispatchSearch();
    },
    [city],
    dispatchSearch
  );

  const handleChange = (e) => {
    const isCapital = /[A-Z]/.test(e.target.value.charAt(0));
    if (isCapital) {
      setCity(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
    } else {
      alert('The name of city must start with capital letter');
    }
  };
  const handleClick = (e) => {
    setCity(e);
    dispatch(CurrentCityAction(data[0].Key, city));
    setCity('');
  };

  return (
    <div className='search'>
      <TextField
        id='outlined-basic'
        variant='filled'
        label='Search City ..'
        margin='normal'
        onChange={(e) => handleChange(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={(e) => handleClick(e)}>
                <SearchRoundedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </div>
  );
}

export default SearchBar;
