import Navbar from "./component/Navbar";

import ProductList from "./ProductList/page";
import Sliderpage from "./component/Sliderpage";
import FeaturedProduct from "./component/featuredpage";
import Footer from "./component/Footer";

export default function Home() {

  return (
    <div>
      <Navbar />

      <Sliderpage />
      <br />
      <ProductList />
      <FeaturedProduct />
      <br />
      <br />
      <Footer />
    </div>
  );
}
