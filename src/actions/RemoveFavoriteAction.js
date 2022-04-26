import { REMOVE_FAVORITE_SUCCESS, REMOVE_FAVORITE_FAIL } from '../constants';

export const RemoveFavoriteAction =
  (id, city) => async (dispatch, getState) => {
    try {
      dispatch({
        type: REMOVE_FAVORITE_SUCCESS,
        payload: id,
        city: city,
      });
      localStorage.setItem(
        'favorites',
        JSON.stringify(getState().AddRemoveFavoritesReducer.favorites)
      );
    } catch (e) {
      dispatch({
        type: REMOVE_FAVORITE_FAIL,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
    }
  };
