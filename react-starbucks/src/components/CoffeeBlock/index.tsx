import React from 'react';
import styles from './CoffeBlock.module.scss';
import { useAppDispatch } from '../../redux/store';
import { fetchCoffee } from '../../redux/coffee/asyncAction';
import { useSelector } from 'react-redux';
import { selectCoffeeData } from '../../redux/coffee/selectors';
import CoffeCard from './CoffeCard';
import { Status } from '../../redux/coffee/types';
import Skeleton from './Skeleton';

const CoffeBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectCoffeeData);
  const getCoffee = async () => {
    dispatch(fetchCoffee());
  };
  React.useEffect(()=>{
      getCoffee();
  },[])

  const coffee = items.map((obj) => <CoffeCard key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          {status == Status.ERROR ? <div>ERROR</div> : <div className={styles.items}>
             {status === 'loading' ? skeletons : coffee}
          </div> }
        </div>
      </div>
    </div>
  );
};

export default CoffeBlock;
