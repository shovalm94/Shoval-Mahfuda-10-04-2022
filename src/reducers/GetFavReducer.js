import {
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAIL,
  REMOVE_FAV_STATE_SUCCESS,
} from '../constants';

export const GetFavReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_FAVORITE_SUCCESS:
      const existItem = state.data.find((x) => x.city === action.payload.city);
      if (existItem) {
        return {
          ...state,
          data: state.data.map((x) =>
            x.city === existItem.city ? action.payload : x
          ),
        };
      } else {
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      }
    case GET_FAVORITE_FAIL:
      return {
        ...state,
        data: [],
      };

    case REMOVE_FAV_STATE_SUCCESS:
      return {
        ...state,
        data: state.data.filter((item) => item.id != action.payload),
      };

    default:
      return state;
  }
};
