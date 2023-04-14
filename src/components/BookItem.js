const BookItem = ({propOfBook}) => {
  return (
    <li>
      <div>{propOfBook.bookName}</div>
      <div>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </li>
  )
}

export default BookItem;