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

const CoffeBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectCoffeeData);
  const [page, setPage] = React.useState(1);

  const getCoffee = async (page:number) => {
    dispatch(fetchCoffee({currentPage: String(page)}));
  };
  React.useEffect(()=>{
      getCoffee(page);
  },[page])

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
          <MyPagination  page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default CoffeBlock;
