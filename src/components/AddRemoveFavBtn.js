import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Favorite from '@mui/icons-material/Favorite';
import { AddFavoriteAction } from '../actions/AddFavoriteAction';
import { RemoveFavoriteAction } from '../actions/RemoveFavoriteAction';
import { RemoveFavStateAction } from '../actions/RemoveFavStateAction';

const AddRemoveFavBtn = (props) => {
  const dispatch = useDispatch();

  const add = (e) => {
    dispatch(AddFavoriteAction(props.id, props.city));
  };

  const remove = (e) => {
    dispatch(RemoveFavoriteAction(props.id, props.city));
    dispatch(RemoveFavStateAction(props.id, props.city));
  };

  return (
    <div>
      {props.isFavCity ? (
        <IconButton aria-label='favorite' component='span' onClick={remove}>
          <Favorite style={{ color: ' red ' }} />
        </IconButton>
      ) : (
        <IconButton aria-label='favorite' component='span' onClick={add}>
          <FavoriteBorderIcon />
        </IconButton>
      )}
    </div>
  );
};

export default AddRemoveFavBtn;
