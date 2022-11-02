import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Sale from "../components/Sale";
import Product from "./Product";

import "swiper/css";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section>Swiper</section>
        <section>
          <a href="">Electronics</a>
          <a href="">Jewelry</a>
          <a href="">Man's</a>
          <a href="">Women's</a>
        </section>
        <Product item={1} />
        <Sale/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
