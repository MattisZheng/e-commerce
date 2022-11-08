import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import getAllProduct from "../utils/getAllProduct";
import getRandomFromArray from "../utils/getRandomFromArray";
import Preview from "./Preview";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  async function getBanner() {
    // get all products
    const allProduct = await getAllProduct();
    // randomly select 6 products from all products
    setBanner(getRandomFromArray(6, allProduct));
  }

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {banner.map((item) => {
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

export default Banner;
