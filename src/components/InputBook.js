import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBookToApi } from '../redux/api';
import styles from './InputBook.module.css';

const InputBook = () => {
  const [inputBookName, setInputBookName] = useState('');
  const [inputBookAuthor, setInputBookAuthor] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setInputBookName(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setInputBookAuthor(e.target.value);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const title = inputBookName;
    const author = inputBookAuthor;
    const category = 'No Category';

    if (inputBookName === '' || inputBookAuthor === '') { return; }
    dispatch(addBookToApi({
      title, author, category, item_id: id,
    }));
    setInputBookName('');
    setInputBookAuthor('');
  };

  return (
    <div className={styles.inputBook}>
      <h3 className={styles.h3}>ADD NEW BOOK</h3>
      <form className={styles.form}>
        <input type="text" placeholder="Book Title" value={inputBookName} onChange={handleNameChange} required className={styles.input} />
        <input type="text" placeholder="Author" value={inputBookAuthor} onChange={handleAuthorChange} required className={styles.input} />
        <button type="submit" onClick={handleBookSubmit} className={styles.addBook}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
