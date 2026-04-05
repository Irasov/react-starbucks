import styles from './MyPagination.module.scss'
import React from 'react';

type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  }
}

const MyPagination = (props: PaginationProps) => {
  const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

  const handleNextPageClick = () => {
    onNextPageClick();
  } 
  const handlePrevPageClick = () => {
    onPrevPageClick();
  }
  return (
    <div className={styles.root}>
      <button className={styles.arrow} onClick={handlePrevPageClick} disabled={disable.left}>
        {'<'}
      </button>
      {nav && (
        <span className={styles.navigation}>
         {nav?.current} / {nav?.total}
        </span>
      )}
      <button className={styles.arrow} onClick={handleNextPageClick} disabled={disable.right}>
        {'>'}
      </button>
    </div>
  )
}

export default React.memo(MyPagination);