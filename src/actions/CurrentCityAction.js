import {
  API_REQUEST_PENDING,
  CURRENT_CITY_REQUEST_SUCCESS,
  CURRENT_CITY_REQUEST_FAIL,
  API_KEY,
  API_URL,
} from '../constants';
import axios from 'axios';

export const CurrentCityAction = (id, city) => async (dispatch) => {
  try {
    dispatch({
      type: API_REQUEST_PENDING,
    });

    const { data } = await axios.get(`${API_URL}${id}?apikey=${API_KEY}`);

    dispatch({
      type: CURRENT_CITY_REQUEST_SUCCESS,
      payload: id,
      city: city,
      tempMetric: data[0].Temperature.Metric.Value,
      icon:
        data[0].WeatherIcon.toString().length === 2
          ? data[0].WeatherIcon
          : '0' + data[0].WeatherIcon,
    });
  } catch (error) {
    dispatch({
      type: CURRENT_CITY_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
