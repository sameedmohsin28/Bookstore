import { useSelector } from 'react-redux';
import styles from './BookList.module.css';
import BookItem from './BookItem';

const BookList = () => {
  const booksReducer = useSelector((store) => (store));
  const booksFromStore = booksReducer.booksReducer.booksArray;

  return (
    <>
      <ul className={styles.listOfBook}>
        {booksFromStore.map((book) => (
          <BookItem key={book.id} propOfBook={book} />
        ))}
      </ul>
    </>
  );
};

export default BookList;
