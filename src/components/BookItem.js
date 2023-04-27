import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ propOfBook }) => {
  const dispatch = useDispatch();
  // console.log(propOfBook);
  return (
    <li>
      <div>
        {propOfBook.bookName}
        {' '}
        by
        {' '}
        {propOfBook.author}
      </div>
      <div>
        <button type="submit">Edit</button>
        <button type="submit" onClick={() => dispatch(removeBook(propOfBook.id))}>Remove</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  propOfBook: PropTypes.string.isRequired,
};

export default BookItem;
