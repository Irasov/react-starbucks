import React from "react";
import styles from './New.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import axios from "axios";
import CoffeCard from "../CoffeeBlock/CoffeCard";

type CoffeItem = {
  id: string,
  imageUrl: string,
  title: string,
  sizes: string,
  price: number,
  category: number,
  text: string,
}

const New: React.FC = () => {

  const [coffee, setCoffee] = React.useState<CoffeItem[]>([]);

  React.useEffect(()=>{
    async function fetchCoffee() {
      try {
        const {data} = await axios.get(`https://69cca578ddc3cabb7bd15cb8.mockapi.io/items`);
        setCoffee(data)
      } catch (err) {
        console.error(err);
      }
    };
    fetchCoffee();
  },[]);

  const slides = coffee.map((item) => (
    <SwiperSlide key={item.id}>
      <CoffeCard {...item} />
    </SwiperSlide>
  ));

  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.info}>
            <h2 className={styles.title}>
                New our <span>Products</span> 
            </h2>
            <p className={styles.text}>
              Have time to buy the most harmonious drinks in the new 
              Starbucks coffee and don't forget about the discount! 
              Starbucks coffee and don't forget about the discount!
            </p>
          </div>
            <Swiper
              modules={[Pagination, Navigation]}
              direction = 'horizontal'
              slidesPerView = {3}
              loop = {true}
              // breakpoints={{
              //   // when window width is >= 640px
              //   640: {
              //     width: 640,
              //     slidesPerView: 2,
              //   },
              //   // when window width is >= 768px
              //   768: {
              //     width: 768,
              //     slidesPerView: 3,
              //   },
              // }}
            >
              {slides}
            </Swiper>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  )
}

export default New;