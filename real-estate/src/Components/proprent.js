import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PropertyRent = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch("/property");
      const json = await response.json();
      if (response.ok) {
        setProperties(json.properties);
      }
    };

    fetchProperties();
  }, []);

  console.log(properties);

  return (
    <div>
      <h1 className="prop-sale-head">Property for Rent</h1>
      <div className="card-container">
        {properties?.map((property) => (
          <div className="card">
            <img src="assets\img\home.jpg" alt="" />
            <h4>{property.title}</h4>
            <h5>For {property.purpose}</h5>
            <button>
              <Link to="/propertydetail">View Property</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyRent;
