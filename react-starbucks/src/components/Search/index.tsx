import React from "react";
import styles from "./Search.module.scss";

const Search: React.FC = () => { 
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <input type="text" className={styles.search} id="search" placeholder="Search Coffee..."/>
      </div>
    </div>
  )
}

export default Search;