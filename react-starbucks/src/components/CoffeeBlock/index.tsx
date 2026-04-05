import React, { useCallback } from 'react';
import styles from './CoffeBlock.module.scss';
import { useAppDispatch } from '../../redux/store';
import { fetchCoffee } from '../../redux/coffee/asyncAction';
import { useSelector } from 'react-redux';
import { selectCoffeeData } from '../../redux/coffee/selectors';
import CoffeCard from './CoffeCard';
import { Status } from '../../redux/coffee/types';
import Skeleton from './Skeleton';
import MyPagimation from '../MyPagimation';

const CoffeBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectCoffeeData);
  const [page, setPage] = React.useState(1);

  const onChangePage = () => {
    setPage(page);
  }
  
  const getCoffee = async (page:number) => {
    dispatch(fetchCoffee({currentPage: String(page)}));
  };
  React.useEffect(()=>{
      getCoffee(page);
  },[page])

  const handleNextPageClick = React.useCallback(() => {
    const current = page;
    const next = current + 1;
    //const total = data ? getTotalPageCount(data.count) : current;
    const total = 3;
    setPage( next <= total ? next : current); 
  }, [page]);

  const handlePrevPageClick = React.useCallback(() => {
    const current = page;
    const prev = current - 1;
    setPage( prev > 0 ? prev : current); 
  }, [page]);


  const coffee = items.map((obj) => <CoffeCard key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          {status == Status.ERROR ? <div>ERROR</div> : <div className={styles.items}>
             {status === 'loading' ? skeletons : coffee}
          </div> }
          <MyPagimation 
            onNextPageClick = {handleNextPageClick}
            onPrevPageClick = {handlePrevPageClick}
            disable = {{
              left: page === 1,
              right: page === 3,
            }}
            nav = {{current: page, total: 3}}
          />
        </div>
      </div>
    </div>
  );
};

export default CoffeBlock;
