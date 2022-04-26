import {
  SEARCH_REQUEST_FAIL,
  SEARCH_REQUEST_PENDING,
  SEARCH_REQUEST_SUCCESS,
} from '../constants';

export const SearchCityReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case SEARCH_REQUEST_PENDING:
      return {
        ...state,
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        data: action.payload,
      };
    case SEARCH_REQUEST_FAIL:
      return {
        SearchError: action.payload,
      };

    default:
      return state;
  }
};
