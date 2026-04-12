import React from "react";
import styles from './Sort.module.scss';

export const sortList = [
  {name: 'PRICE', sortProperty: 'price'},
  {name: 'SIZE', sortProperty: 'size'},
  {name: 'CATEGORY', sortProperty: 'category'},
]

const Sort: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [ascDesc, setAscDesc] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={styles.root}>
      <div className={styles.sort}>
        <div className={styles.arrowBlock} onClick={()=> setAscDesc(!ascDesc)}>
          <svg
            className={`${styles.arrow} ${ascDesc ? styles.arrow_dsc : ''}`}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#FFFFFF"
            />
          </svg>      
        </div>
        <div className={styles.sorting} onClick={() => setOpen(!open)} ref={sortRef}>
          <span className={styles.sorting__title}>Sorting:</span>
          <span className={styles.sorting__value}>PRICE</span>
        </div>
        {open && (
          <div className={styles.popup}>
            <ul className={styles.items}>
              {
                sortList.map((obj,index) => (
                  <li className={styles.item} key={index}>{obj.name}</li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sort;

