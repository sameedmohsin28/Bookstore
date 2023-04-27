import { useSelector } from 'react-redux';
import styles from './BookPage.module.css';
import BookList from './BookList';
import InputBook from './InputBook';

const BookPage = () => {
  const books = useSelector((store) => (store));
  // console.log(books);
  return (
    <div className={styles.bookPage}>
      <BookList booksProp={books.booksReducer.booksArray} />
      <hr />
      <InputBook />
    </div>
  );
};

export default BookPage;
