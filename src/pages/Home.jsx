import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../layouts/Header";
import Category from "../components/Category";
import Sale from "../components/Sale";
import Footer from "../layouts/Footer";

import "swiper/css";

const Home = () => {
  return (
    <div className="border-2">
      <Header />
      <main>
        <section>Swiper</section>
       
        
        <Sale />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
