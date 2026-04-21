import React from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import Loading from "../components/CoffeeFull/loading";

const FullCoffee: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coffee, setCoffee] = React.useState<{
    imageUrl: string,
    title: string,
    size: string,
    price: number,
    text: string,
  }>();

  React.useEffect(() => {
    async function fetchCoffee() {
      try {
        const {data} = await axios.get("https://69cca578ddc3cabb7bd15cb8.mockapi.io/items/" + id);
        setCoffee(data);
      } catch (error) {
        console.error("Error fetching coffee data:", error);
        navigate('/');
      }
    }
    fetchCoffee();
  },[]);

  if(!coffee) {
    return  <Loading />;
  }

  return (
    <main className="mainpage">
      <img src={coffee.imageUrl} alt='coffee' />
      <h1>{coffee.title}</h1>
      <p>{coffee.text}</p>
    </main>
  )
}

export default FullCoffee;