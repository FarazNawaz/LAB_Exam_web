// src/components/Book.js
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <button onClick={() => dispatch(removeBook(id))}>Delete Book</button>
    </div>
  );
};

export default Book;
