import React from "react";
import "./navBar.css";
import { GrUserManager } from "react-icons/gr";
import Navimg from "./Images/logo.png";
import { Link } from "react-router-dom";
import { IoBarcodeSharp } from "react-icons/io";
const NavBar = () => {
  function classToggle() {
    const navs = document.querySelectorAll(".Navbar__Items");

    navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
  }

  document.querySelector(".Navbar__Link-toggle");
  window.addEventListener("click", classToggle);

  return (
    <>
      <div className=" container pt-3">
        <div className="col-md-12">
          <div className="Navbar">
            <div className="Navbar__Link Navbar__Link-brand">
              <img className="nav_img" src={Navimg} alt="NavBar Image" />
            </div>
            <div className=" Navbar__Link-toggle">
              <i className="toogle">Menu</i>
              {/* <i class="fas fa-bars"></i> */}
            </div>
            <nav className="Navbar__Items">
              <div className="Navbar__Link ">
                <Link className="bar" to="/">
                  <strong> HOME</strong>
                </Link>
                {/* <RiTwitterLine /> */}
              </div>
              <div className="Navbar__Link">
                {" "}
                <Link className="bar" aria-current="page" to="/About">
                  <strong> ABOUT</strong>
                </Link>
              </div>
              <div className="Navbar__Link">
                {" "}
                <Link className="bar" to="/services">
                  <strong>SERVICES</strong>
                </Link>
              </div>
              <div className="Navbar__Link">
                {" "}
                <Link className="bar" to="/marketplace">
                  <strong> MARKETPLACE</strong>
                </Link>
              </div>
              <div className="Navbar__Link">
                {" "}
                <Link className="bar" to="/testinomial">
                  <strong> TESTIMONIALS</strong>
                </Link>
              </div>
              <div className="Navbar__Link">
                {" "}
                <Link className="bar" to="/Faq">
                  <strong> FAQS</strong>
                </Link>
              </div>
              <div className="Navbar__Link">
                {" "}
                <Link className="bar" to="/contact">
                  <strong> CONTACT</strong>
                </Link>
              </div>
              <form className="d-flex">
                <input
                  className="nav_search"
                  type="search"
                  placeholder="Search"
                />
                {localStorage.getItem("Mukaram") ? (
                  <button className="nav_button   " type="submit">
                    <GrUserManager />
                    <Link to="/DashBoard"> LOGOUT </Link>
                  </button>
                ) : (
                  <button className="nav_button" type="submit">
                    <GrUserManager />
                    <Link to="/login"> LOGIN </Link>
                  </button>
                )}
              </form>
            </nav>
            <nav classname="Navbar__Items Navbar__Items--right">
              <div className="">
                {" "}
                {/* <Link className="bar" to="/">
                  <strong> HOME</strong>
                </Link> */}
              </div>
              {/* <div class="Navbar__Link">Link</div>  */}
            </nav>
          </div>
          {/* ------------------------------------------------------------------------------------------ */}
          {/* <nav className="navbar navbar-expand-lg navbar-light  ">
            <img className="nav_img" src={Navimg} alt="NavBar Image" />
            <div className="container-fluid main_nav ">
              <Link className="navbar-brand active" to="/">
                <strong>
                  {" "}
                  <u>HOME</u>
                </strong>
              </Link> */}
          {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
          {/* <div class="Navbar__Link Navbar__Link-toggle">
                // < href="#">{/* <VscThreeBars /> */}
          {/* <span className="navbar-toggler-icon"></span> */}
          {/* <i class="fas fa-bars"></i> */}
          {/* </div> */}
          {/* <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/About"
                    >
                      <strong> ABOUT</strong>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link active" to="/services">
                      <strong>SERVICES</strong>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" to="/marketplace">
                      <strong> MARKETPLACE</strong>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link active" to="/testinomial">
                      <strong> TESTIMONIALS</strong>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link active" to="/Faq">
                      <strong> FAQS</strong>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link active" to="/contact">
                      <strong> CONTACT</strong>
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  {localStorage.getItem("Mukaram") ? (
                    <button className="btn nav_btn  btn-success" type="submit">
                      <GrUserManager />
                      <Link to="/DashBoard"> LOGOUT </Link>
                    </button>
                  ) : (
                    <button className="btn nav_btn  btn-success" type="submit">
                      <GrUserManager />
                      <Link to="/login"> LOGIN </Link>
                    </button>
                  )}
                </form>
              </div>
            </div>
          </nav>  */}
        </div>
      </div>
    </>
  );
};
export default NavBar;
