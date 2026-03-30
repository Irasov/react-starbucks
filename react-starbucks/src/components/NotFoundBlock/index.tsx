import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return(
    <div className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <h1 className={styles.title}>Page Not Found <span>:(</span></h1>
        </div>
      </div>
    </div>
  );
}

export default NotFoundBlock;