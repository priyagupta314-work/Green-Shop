import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";

export default function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar">
          <div>GREENSHOP</div>
          <div>
            <Link to="/">
              <i className="fas fa-home nav-pills"></i>
            </Link>
            <i className="fas fa-heart nav-pills"></i>
            <i className="fas fa-shopping-cart nav-pills"></i>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ProductListing" element={<ProductListing />} />
      </Routes>
    </div>
  );
}
