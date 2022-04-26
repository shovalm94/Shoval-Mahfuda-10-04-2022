import { FiveDaysWeatherAction } from '../actions/FiveDaysWeatherAction';
import { useDispatch, useSelector } from 'react-redux';
import FiveDaysWeather from './FiveDaysWeather';
import { useEffect } from 'react';

const FiveDaysWeatherList = () => {
  const dispatch = useDispatch();

  const CurrentCityReducer = useSelector((state) => state.CurrentCityReducer);
  const { id, city, tempMetric, icon } = CurrentCityReducer;

  const FiveDaysWeatherReducer = useSelector(
    ({ FiveDaysWeatherReducer }) => FiveDaysWeatherReducer
  );
  const { fiveDays } = FiveDaysWeatherReducer;

  const SearchCityReducer = useSelector((state) => state.SearchCityReducer);
  const { data } = SearchCityReducer;

  useEffect(() => {
    dispatch(FiveDaysWeatherAction(id));
  }, [id]);

  return (
    <div className='days-list'>
      {fiveDays.map((d, index) => {
        return (
          <FiveDaysWeather
            key={index}
            date={d.Date}
            dayIcon={d.Day.Icon}
            maxTemp={d.Temperature.Maximum.Value}
          ></FiveDaysWeather>
        );
      })}
    </div>
  );
};
export default FiveDaysWeatherList;
