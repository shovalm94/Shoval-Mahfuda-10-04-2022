import { ADD_FAVORITE_SUCCESS, ADD_FAVORITE_FAIL } from '../constants';

export const AddFavoriteAction = (id, city) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_FAVORITE_SUCCESS,
      payload: {
        id: id,
        city: city,
      },
    });
    localStorage.setItem(
      'favorites',
      JSON.stringify(getState().AddRemoveFavoritesReducer.favorites)
    );
  } catch (e) {
    dispatch({
      type: ADD_FAVORITE_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
