import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section>輪播圖</section>
        <section>
          <a href="">Electronics</a>
          <a href="">Jewelry</a>
          <a href="">Man's</a>
          <a href="">Women's</a>
        </section>
        <section>熱銷</section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
