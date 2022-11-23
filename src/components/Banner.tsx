import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import getAllProduct from '../utils/getAllProduct';
import getRandomFromArray from '../utils/getRandomFromArray';
import Preview from './Preview';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  const [banner, setBanner] = useState([]);

  async function getBanner() {
    // get all products

    const allProduct = await getAllProduct();
    setBanner(getRandomFromArray(7, allProduct));

    // randomly select 6 products from all products
  }

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {banner.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Preview id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
