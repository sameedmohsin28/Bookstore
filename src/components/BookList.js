import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './BookList.module.css';
import BookItem from './BookItem';
import { displayBooksFromApi } from '../redux/api';

const BookList = () => {
  const { booksArray, isLoading, error } = useSelector((store) => (store.booksReducer));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayBooksFromApi());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>The content is loading</div>
    );
  }

  if (error) {
    return (
      <div>There is an error in fetching books</div>
    );
  }

  return (
    <>
      <ul className={styles.listOfBook}>
        {booksArray.map((book) => (
          <BookItem key={book.id} propOfBook={book} />
        ))}
      </ul>
    </>
  );
};

export default BookList;
