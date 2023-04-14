import styles from './BookPage.module.css'

import BookList from "./BookList";
import InputBook from "./InputBook";

const BookPage = () => {

  const books = [
    {
      id: 1,
      bookName: 'The Sealed Nectar',
      author: 'Safiur Rahman Mubarakpuri',
    },
  
    {
      id: 2,
      bookName: 'World Order',
      author: 'Henry Kissinger',
    },
  
    {
      id: 3,
      bookName: 'The Lean Startup',
      author: 'Eric Ries',
    },
  ]

  return (
    <div className={styles.bookPage}>
      <BookList booksProp={books} />
      <hr/>
      <InputBook />
    </div>
  );
}

export default BookPage;