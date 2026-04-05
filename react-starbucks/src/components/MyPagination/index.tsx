import React from "react";
import MyPaginationComponent from "./MyPaginationComponent";

type PagProps = {
  page: number,
  setPage: (arg:number) => void
}
const MyPagination = (props:PagProps) => {

    const COUNT_PAGE = 3;
    const ONE_PAGE = 1;

    const handleNextPageClick = React.useCallback(() => {
      const current = props.page;
      const next = current + 1;
      const total = 3;
      props.setPage( next <= total ? next : current); 
    }, [props.page]);
  
    const handlePrevPageClick = React.useCallback(() => {
      const current = props.page;
      const prev = current - 1;
      props.setPage( prev > 0 ? prev : current); 
    }, [props.page]);

    return (
      <MyPaginationComponent 
        onNextPageClick = {handleNextPageClick}
        onPrevPageClick = {handlePrevPageClick}
        disable = {{
          left: props.page === ONE_PAGE,
          right: props.page === COUNT_PAGE,
        }}
        nav = {{current: props.page, total: COUNT_PAGE}}
      />
    )
}

export default MyPagination;