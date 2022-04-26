import {
  API_URL,
  API_KEY,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAIL,
  REMOVE_FAVORITE_CITY,
} from '../constants';
import axios from 'axios';

export const GetFavoriteAction = (id, city) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}${id}?apikey=${API_KEY}`);
    dispatch({
      type: GET_FAVORITE_SUCCESS,
      payload: {
        data,
        city,
        id,
      },
    });
  } catch (e) {
    dispatch({
      type: GET_FAVORITE_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
