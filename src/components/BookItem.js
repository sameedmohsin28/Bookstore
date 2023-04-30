import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/api';

const BookItem = ({ propOfBook }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        {propOfBook.title}
        {' '}
        by
        {' '}
        {propOfBook.author}
      </div>
      <div>
        <button type="submit">Edit</button>
        <button type="submit" onClick={() => dispatch(removeBookFromApi(propOfBook.id))}>Remove</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  propOfBook: PropTypes.string.isRequired,
};

export default BookItem;
