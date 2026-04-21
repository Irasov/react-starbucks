import React from "react";
import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>
            Loading coffee...
        </h2>
      </div>
    </div>
  )
}

export default Loading;