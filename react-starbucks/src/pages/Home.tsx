import React from "react";
import NewCafe from "../components/NewCafe";
import Delicius from "../components/Delicius";
import New from "../components/New";
import Events from "../components/Events";
import Contacts from "../components/Contacts";

const Home: React.FC = () => {
  return (
    <main className="mainpage">
      <NewCafe />
      <Delicius />
      <New />
      <Events />
      <Contacts />
    </main>
  )
}

export default Home;