import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import getAllProduct from "../utils/getAllProduct";
import Preview from "./Preview";

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);

  // get all products
  async function getRecommendation() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setRecommendation(data);
    } catch (error) {
      console.error(error);
    }
  }
  // randomly select 6 products
  const random = recommendation.sort(() => 0.5 - Math.random()).slice(0, 6);

  useEffect(() => {
    getRecommendation();
  }, []);

  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={3} >
        {random.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Preview id={item.id}
                title={item.title} price={item.price} image={item.image} rating={item.rating}/>
              <img src={item.image} alt={item.title} />
              
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Recommendation;
