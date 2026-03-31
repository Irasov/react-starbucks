import React from "react";
import NewCafe from "../components/NewCafe";
import Delicius from "../components/Delicius";

const Home: React.FC = () => {
  return (
    <div className="mainpage">
      <NewCafe />
      <Delicius />
    </div>
  )
}

export default Home;