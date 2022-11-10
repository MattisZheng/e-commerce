import Banner from "../components/Banner";
import Category from "../components/Category";
import Popular from "../components/Popular";
import Sale from "../components/Sale";
import "swiper/css";

const Home = () => {
  return (
    <main className="w-2/3 mx-auto">
      <Banner />
      <Category />
      <Popular />
      <Sale />
    </main>
  );
};

export default Home;
