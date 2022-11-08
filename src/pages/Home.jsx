import Banner from "../components/Banner";
import Category from "../components/Category";
import Popular from "../components/Popular";
import Sale from "../components/Sale";

import "swiper/css";

const Home = () => {
  return (
    <main>
      <Banner />
      <Category />
      <Popular />
      <Sale />
    </main>
  );
};

export default Home;
