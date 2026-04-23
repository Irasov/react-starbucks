import React from "react";
import NewCafe from "../components/NewCafe";
import Delicius from "../components/Delicius";
import New from "../components/New";

const Home: React.FC = () => {
  return (
    <main className="mainpage">
      <NewCafe />
      <Delicius />
      <New />
    </main>
  )
}

export default Home;