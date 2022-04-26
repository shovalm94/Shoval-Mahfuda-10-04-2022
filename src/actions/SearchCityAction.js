import {
  SEARCH_REQUEST_FAIL,
  SEARCH_REQUEST_PENDING,
  SEARCH_REQUEST_SUCCESS,
  API_URL_AUTOCOMPLETE,
  API_KEY,
} from '../constants';
import axios from 'axios';

export const SearchCityAction = (q) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_REQUEST_PENDING,
    });

    const { data } = await axios.get(
      `${API_URL_AUTOCOMPLETE}?apikey=${API_KEY}&q=${q}`
    );

    dispatch({
      type: SEARCH_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: SEARCH_REQUEST_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
