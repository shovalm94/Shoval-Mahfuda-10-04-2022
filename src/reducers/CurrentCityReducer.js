import {
  CURRENT_CITY_REQUEST_SUCCESS,
  CURRENT_CITY_REQUEST_FAIL,
} from '../constants';

export const CurrentCityReducer = (
  state = { id: '', city: '', tempMetric: '', icon: '' },
  action
) => {
  switch (action.type) {
    case CURRENT_CITY_REQUEST_SUCCESS:
      return {
        id: action.payload,
        city: action.city,
        tempMetric: action.tempMetric,
        icon: action.icon,
      };
    case CURRENT_CITY_REQUEST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
