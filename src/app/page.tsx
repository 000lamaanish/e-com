import Navbar from "./component/Navbar";
import { ModeToggle } from "./component/ModeToggle";
import ProductList from "./ProductList/page";
import Sliderpage from "./component/Sliderpage";
import FeaturedProduct from "./component/featuredpage";
import Footer from "./component/Footer";

export default function Home() {

  return (
    <div>
      <Navbar />
      <ModeToggle />
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
