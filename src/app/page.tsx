import Link from "next/link";
import Navbar from "./component/Navbar";
import { ModeToggle } from "./component/ModeToggle";
import ProductList from "./ProductList/page";

export default function Home() {

  return (
    <div>
      <Navbar />
      <ModeToggle />
      <ProductList />
    </div>
  );
}
