import React from "react";
import { Link } from "react-router-dom";

const PropertySale = () => {
  return (
    <div>
      <h1 className="prop-sale-head">Property for Sale</h1>
      <div className="card-container">
        <div className="card">
          <img src="assets\img\home.jpg" alt="" />
          <h2>House 1</h2>
          <h6>House for sale</h6>
          <button>
            <Link to="/propertydetail">View Property</Link>
          </button>
        </div>
        <div className="card">
          <img src="assets\img\home2.jpg" alt="" />
          <h2>House 2</h2>
          <h6>House for sale</h6>
          <button>
            <Link to="/propertydetail">View Property</Link>
          </button>
        </div>
        <div className="card">
          <img src="assets\img\home3.jpg" alt="" />
          <h2>House 3</h2>
          <h6>House for sale</h6>
          <button>
            <Link to="/propertydetail">View Property</Link>
          </button>
        </div>
        <div className="card">
          <img src="assets\img\home4.jpg" alt="" />
          <h2>House 4</h2>
          <h6>House for sale</h6>
          <button>
            <Link to="/propertydetail">View Property</Link>
          </button>
        </div>
        <div className="card">
          <img src="assets\img\home3.jpg" alt="" />
          <h2>House 3</h2>
          <h6>House for sale</h6>
          <button>
            <Link to="/propertydetail">View Property</Link>
          </button>
        </div>
        <div className="card">
          <img src="assets\img\home4.jpg" alt="" />
          <h2>House 4</h2>
          <h6>House for sale</h6>
          <button>
            <Link to="/propertydetail">View Property</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySale;
