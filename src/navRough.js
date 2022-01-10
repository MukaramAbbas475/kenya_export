import React from "react";
import "./Navrough.css";
//import { VscThreeBars } from "react-icons/vs";
//import { RiTwitterLine } from "react-icons/ri";
const NavRough = () => {
  function classToggle() {
    const navs = document.querySelectorAll(".Navbar__Items");

    navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
  }

  document.querySelector(".Navbar__Link-toggle");
  window.addEventListener("click", classToggle);
  return (
    <>
      <div class="Navbar">
        <div class="Navbar__Link Navbar__Link-brand">Website title</div>
        <div class="Navbar__Link Navbar__Link-toggle">
          <a href="#">
            {/* <VscThreeBars /> */}
          </a>
          {/* <span className="navbar-toggler-icon"></span> */}
          {/* <i class="fas fa-bars"></i> */}
        </div>
        <nav class="Navbar__Items">
          <div class="Navbar__Link">Longer Link
          {/* <RiTwitterLine /> */}
          </div>
          <div class="Navbar__Link">Longer Link</div>
          <div class="Navbar__Link">Link</div>
        </nav>
        <nav class="Navbar__Items Navbar__Items--right">
          <div class="Navbar__Link">Link</div>
          <div class="Navbar__Link">Link</div>
        </nav>
      </div>
    </>
  );
};
export default NavRough;
