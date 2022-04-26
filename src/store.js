import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { FiveDaysWeatherReducer } from './reducers/FiveDaysWeatherReducer';
import { CurrentCityReducer } from './reducers/CurrentCityReducer';
import { SearchCityReducer } from './reducers/SearchCityReducer';
import { GetFavReducer } from './reducers/GetFavReducer';
import { AddRemoveFavoritesReducer } from './reducers/AddRemoveFavReducer';

const reducer = combineReducers({
  CurrentCityReducer,
  FiveDaysWeatherReducer,
  SearchCityReducer,
  GetFavReducer,
  AddRemoveFavoritesReducer,
});

const FavoritesStorage = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites'))
  : [];

const initialState = {
  CurrentCityReducer: {
    id: 215854,
    city: 'Tel Aviv',
  },
  SearchCityReducer: { data: {} },
  AddRemoveFavoritesReducer: { favorites: FavoritesStorage },
  GetFavReducer: { data: [] },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
