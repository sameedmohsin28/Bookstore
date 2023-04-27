import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

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
    if (inputBookName === '' || inputBookAuthor === '') { return; }
    dispatch(addBook(
      {
        id: Date.now(),
        bookName: inputBookName,
        author: inputBookAuthor,
        category: 'NA',
      },
    ));
    e.target.previousElementSibling.previousElementSibling.value = '';
    e.target.previousElementSibling.value = '';
    setInputBookName('');
    setInputBookAuthor('');
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" onChange={handleNameChange} required />
        <input type="text" placeholder="Author" onChange={handleAuthorChange} required />
        <button type="submit" onClick={handleBookSubmit}>ADD BOOK</button>
      </form>
    </>
  );
};

export default InputBook;
