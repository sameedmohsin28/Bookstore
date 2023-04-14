import PropTypes from 'prop-types';

const BookItem = ({ propOfBook }) => (
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
      <button type="submit">Remove</button>
    </div>
  </li>
);

BookItem.propTypes = {
  propOfBook: PropTypes.string.isRequired,
};

export default BookItem;
