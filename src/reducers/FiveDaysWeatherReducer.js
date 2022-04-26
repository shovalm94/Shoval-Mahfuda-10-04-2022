import {
  FIVE_DAYS_REQUEST_SUCCESS,
  FIVE_DAYS_REQUEST_FAIL,
} from '../constants';

export const FiveDaysWeatherReducer = (state = { fiveDays: [] }, action) => {
  switch (action.type) {
    case FIVE_DAYS_REQUEST_SUCCESS:
      return {
        fiveDays: action.payload,
      };
    case FIVE_DAYS_REQUEST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
