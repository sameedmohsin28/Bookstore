import styles from './BookPage.module.css';
import BookList from './BookList';
import InputBook from './InputBook';

const BookPage = () => (
  <div className={styles.bookPage}>
    <BookList />
    <hr className={styles.hr} />
    <InputBook />
  </div>
);

export default BookPage;
