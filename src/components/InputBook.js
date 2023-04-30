import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBookToApi } from '../redux/api';

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
    const category = 'NA';

    if (inputBookName === '' || inputBookAuthor === '') { return; }
    dispatch(addBookToApi({
      title, author, category, item_id: id,
    }));
    setInputBookName('');
    setInputBookAuthor('');
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" value={inputBookName} onChange={handleNameChange} required />
        <input type="text" placeholder="Author" value={inputBookAuthor} onChange={handleAuthorChange} required />
        <button type="submit" onClick={handleBookSubmit}>ADD BOOK</button>
      </form>
    </>
  );
};

export default InputBook;
