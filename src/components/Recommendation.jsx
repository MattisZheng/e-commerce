import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import getAllProduct from "../utils/getAllProduct";
import Preview from "./Preview";

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);

  async function getRecommendation() {
    // get all products
    const allProduct = await getAllProduct();
    // randomly select 6 products
    setRecommendation(allProduct);
  }

  useEffect(() => {
    getRecommendation();
  }, []);

  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {recommendation.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Preview id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Recommendation;
