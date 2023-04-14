import PropTypes from 'prop-types';
import styles from './BookList.module.css';
import BookItem from './BookItem';

const BookList = ({ booksProp }) => (
  <>
    <ul className={styles.listOfBook}>
      {booksProp.map((book) => (
        <BookItem key={book.id} propOfBook={book} />
      ))}
    </ul>
  </>
);

BookList.propTypes = {
  booksProp: PropTypes.string.isRequired,
};

export default BookList;
