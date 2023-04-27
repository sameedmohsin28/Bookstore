import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const InputBook = () => {
  const dispatch = useDispatch();

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const inputBookName = e.target.previousElementSibling.previousElementSibling.value;
    const inputBookAuthor = e.target.previousElementSibling.value;
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
