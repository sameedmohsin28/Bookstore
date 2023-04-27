import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const InputBook = () => {
  const [inputBookName, setInputBookName] = useState('');
  const [inputBookAuthor, setInputBookAuthor] = useState('');

  const dispatch = useDispatch();

  const handleBookSubmit = (e) => {
    e.preventDefault();
    setInputBookName(e.target.previousElementSibling.previousElementSibling.value);
    setInputBookAuthor(e.target.previousElementSibling.value);
    if (inputBookName === '' || inputBookAuthor === '') { return; }
    dispatch(addBook(
      {
        id: Date.now(),
        bookName: inputBookName,
        author: inputBookAuthor,
        category: 'NA',
      },
    ));
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" required />
        <input type="text" placeholder="Author" required />
        <button type="submit" onClick={handleBookSubmit}>ADD BOOK</button>
      </form>
    </>
  );
};

export default InputBook;
