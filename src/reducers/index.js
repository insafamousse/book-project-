import {combineReducers} from 'redux';
import ratingFilterReducer from './RatingFilter';
import titleFilterReducer from './TitleFilter';
import BookListReducer from './BookList';

export default combineReducers({ratingFilterReducer,
  titleFilterReducer,BookListReducer})
