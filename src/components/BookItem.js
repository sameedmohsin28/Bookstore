import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/api';
import styles from './Bookitems.module.css';

const BookItem = ({ propOfBook }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.bookItem}>
      <div className={styles.nameAndButtons}>
        <div className={styles.bookDetails}>
          <div className={styles.category}>{propOfBook.category}</div>
          <div className={styles.title}>{propOfBook.title}</div>
          <div className={styles.author}>{propOfBook.author}</div>
        </div>
        <div className={styles.buttonsContainer}>
          <button type="submit" className={styles.button}>Comments</button>
          <button type="submit" onClick={() => dispatch(removeBookFromApi(propOfBook.id))} className={styles.button}>Remove</button>
          <button type="submit" className={styles.button}>Edit</button>
        </div>
      </div>

      <div className={styles.readingChartAndDetails}>
        <div className={styles.readingChart}>
          <div className={styles.progressBar}>
            <div className={styles.progressBarContent} />
          </div>
          <div className={styles.chartPercent}>
            <div className={styles.percentNum}>50%</div>
            <div className={styles.compl}>Completed</div>
          </div>
        </div>
        <div className={styles.readingDetails}>
          <div className={styles.chapterDetails}>
            <div className={styles.chpHead}>CURRENT CHAPTER</div>
            <div className={styles.chpNum}>Chapter 17</div>
          </div>
          <button type="submit" className={styles.progressButton}>
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  propOfBook: PropTypes.string.isRequired,
};

export default BookItem;
