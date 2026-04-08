import React from 'react';
import styles from './CoffeBlock.module.scss';
import { useAppDispatch } from '../../redux/store';
import { fetchCoffee } from '../../redux/coffee/asyncAction';
import { useSelector } from 'react-redux';
import { selectCoffeeData } from '../../redux/coffee/selectors';
import CoffeCard from './CoffeCard';
import { Status } from '../../redux/coffee/types';
import Skeleton from './Skeleton';
import MyPagination from '../MyPagination';
import Search from '../Search';
import { selectFilter } from '../../redux/filter/selectors';
import { setCurrentPage } from '../../redux/filter/slice';

const CoffeBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectCoffeeData);
  const { searchValue, currentPage } = useSelector(selectFilter);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  }

  const getCoffee = async () => {
    const search = searchValue ? `&search=${searchValue}` : ''
    dispatch(fetchCoffee({search, currentPage: String(currentPage)}));
  };
  
  React.useEffect(() => {
      getCoffee();
  },[searchValue, currentPage]);

  const coffee = items.map((obj) => <CoffeCard key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <Search />
          {status == Status.ERROR ? <div>ERROR</div> : <div className={styles.items}>
             {status === 'loading' ? skeletons : coffee}
          </div> }
          <MyPagination  page={currentPage} setPage={onChangePage} />
        </div>
      </div>
    </div>
  );
};

export default CoffeBlock;
