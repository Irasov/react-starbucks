import React from 'react';
import styles from './CoffeBlock.module.scss';
import { useAppDispatch } from '../../redux/store';
import { fetchCoffee } from '../../redux/coffee/asyncAction';
import { useSelector } from 'react-redux';
import { selectCoffeeData } from '../../redux/coffee/selectors';
import CoffeCard from './CoffeCard';
import { Status, type SearchCoffeeParams } from '../../redux/coffee/types';
import Skeleton from './Skeleton';
import MyPagination from '../MyPagination';
import Search from '../Search';
import Sort from '../Sort';
import { selectFilter } from '../../redux/filter/selectors';
import { setCurrentPage, setFilter } from '../../redux/filter/slice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

const CoffeBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectCoffeeData);
  const { searchValue, currentPage } = useSelector(selectFilter);
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  }

  const getCoffee = async () => {
    const search = searchValue ? `&search=${searchValue}` : ''
    dispatch(fetchCoffee({search, currentPage: String(currentPage)}));
  };

  React.useEffect(() => {
    if(isMounted.current) {
      const queryString = qs.stringify({currentPage})
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [currentPage,searchValue]);

  React.useEffect(() => {
    if(window.location.search) {
      const pararms = qs.parse(window.location.search.substring(1)) as unknown as SearchCoffeeParams;
      dispatch(
        setFilter({
          searchValue: pararms.search,
          currentPage: Number(pararms.currentPage),
        })
    );
      isSearch.current = true;
    }
  },[]);
  
  React.useEffect(() => {
    if(!isSearch.current) {
      getCoffee();
    }
    isSearch.current = false;
  },[searchValue, currentPage]);

  const coffee = items.map((obj) => <CoffeCard key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <Search />
          <Sort />
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
