import { REMOVE_FAV_STATE_SUCCESS, REMOVE_FAV_STATE_FAIL } from '../constants';

export const RemoveFavStateAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_FAV_STATE_SUCCESS,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: REMOVE_FAV_STATE_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
