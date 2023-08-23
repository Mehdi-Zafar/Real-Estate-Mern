import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    //     <div>
    //       <nav>
    //           <ul>
    //               <li>
    //                   <li>
    //                       <a className="navbar-brand" href="#">Online Real Estate Market</a>
    //                   </li>

    //                   <li>
    //                   <Link className="home" to="/">Home</Link>
    //                   </li>
    //                     <li>
    //                         <Link className="search" to="/searchbar">Search</Link>
    //                     </li>
    //               <li className="nav-item dropdown d-inline-block">
    //                 <Link className="nav-link dropdown-toggle" style={{color:'black'}} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View&nbsp;Properties</Link>
    //                 <div className="dropdown-menu">
    //                   <Link className="dropdown-item " to="/proprent">Properties for rent</Link>
    //                   <Link className="dropdown-item " to="/propsale">Properties for sale</Link>
    //                 </div>
    //               </li>
    //               <li>
    //                   <Link className="ap" to="/addproperty">Add&nbsp;Property</Link>
    //               </li>
    //               <li>
    //                   <Link className="login" to="/signin">Login</Link>
    //               </li>
    //               <button><i class="bi bi-list"></i></button>
    //               </li>
    //           </ul>
    //       </nav>
    //   </div>
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Online Real Estate Market
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="home" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="home" to="/searchbar">
                Search
              </Link>
            </li>
            <li className="nav-item dropdown d-inline-block">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "#444" }}
              >
                View&nbsp;Properties
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item " to="/proprent">
                  Properties for rent
                </Link>
                <Link className="dropdown-item " to="/propsale">
                  Properties for sale
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="ap" to="/addproperty">
                Add&nbsp;Property
              </Link>
            </li>
            <li className="nav-item">
              <Link className="login" to="/signin">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Head;
