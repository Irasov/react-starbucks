import React from "react";
import NewCafe from "../components/NewCafe";
import Delicius from "../components/Delicius";
import New from "../components/New";
import Events from "../components/Events";

const Home: React.FC = () => {
  return (
    <main className="mainpage">
      <NewCafe />
      <Delicius />
      <New />
      <Events />
    </main>
  )
}

export default Home;