const InputBook = () => (
  <>
    <h3>ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book Title" required />
      <input type="text" placeholder="Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  </>
);

export default InputBook;
