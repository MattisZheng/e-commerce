import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Swiper spaceBetween={50} slidesPerView={3}>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
          </Swiper>
        </section>
        <section>
          <a href="">Electronics</a>
          <a href="">Jewelry</a>
          <a href="">Man's</a>
          <a href="">Women's</a>
        </section>
        <section>熱銷</section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
