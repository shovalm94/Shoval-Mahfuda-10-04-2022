import {
  API_KEY,
  FIVE_DAYS_REQUEST_SUCCESS,
  FIVE_DAYS_REQUEST_FAIL,
  API_REQUEST_PENDING,
} from '../constants';
import axios from 'axios';

export const FiveDaysWeatherAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: API_REQUEST_PENDING,
    });

    const { data } = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${API_KEY}&metric=true`
    );

    dispatch({
      type: FIVE_DAYS_REQUEST_SUCCESS,
      payload: data.DailyForecasts,
    });
  } catch (error) {
    dispatch({
      type: FIVE_DAYS_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
