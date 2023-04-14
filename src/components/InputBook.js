const InputBook = () => {
  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" required></input>
        <input type="text" placeholder="Author" required></input>
        <button>ADD BOOK</button>
      </form>
    </>
  )
}

export default InputBook;