import React from "react";
import { Link } from "react-router-dom";
export default function Home({}) {
  return (
    <div>
      <div>
        <h1 className="fc-heading"> FEATURED CATEGORIES </h1>
      </div>
      <div className="home-cards">
        <Link to="ProductListing">
          <div className="card-design">
            <img src="https://via.placeholder.com/150" />
            <div> AIR PURIFYING </div>
          </div>
        </Link>

        <div className="card-design">
          <img src="https://via.placeholder.com/150" />
          <div> FLOWERING </div>
        </div>

        <div className="card-design">
          <img src="https://via.placeholder.com/150" />
          <div> EASY TO CARE </div>
        </div>

        <div className="card-design">
          <img src="https://via.placeholder.com/150" />
          <div> HANGING PLANTS </div>
        </div>
      </div>
    </div>
  );
}
