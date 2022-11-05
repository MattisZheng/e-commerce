import Recommendation from "../components/Recommendation";
import Category from "../components/Category";
import Popular from "../components/Popular";
import Sale from "../components/Sale";

import "swiper/css";

const Home = () => {
  return (
    <main>
      <Recommendation />
      <Category />
      <Popular />
      <Sale />
    </main>
  );
};

export default Home;
