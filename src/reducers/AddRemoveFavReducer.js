import {
  ADD_FAVORITE_FAIL,
  ADD_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_SUCCESS,
} from '../constants';

export const AddRemoveFavoritesReducer = (
  state = { favorites: [] },
  action
) => {
  switch (action.type) {
    case ADD_FAVORITE_SUCCESS:
      const item = action.payload;
      const existItem = state.favorites.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          favorites: state.favorites.map((x) =>
            x.id === existItem.id ? item.id : x
          ),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, item],
        };
      }
    case ADD_FAVORITE_FAIL:
      return {
        error: action.payload,
      };

    case REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id != action.payload),
      };
    default:
      return state;
  }
};
