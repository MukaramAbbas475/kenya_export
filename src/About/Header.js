import React from 'react';
import   "./About.css";
import NavBar from '../navBar';
const Header=()=>{
    return(
        <>
<div className="about_header">
<NavBar/>
<p className="about_header_text">
    About
</p>
    </div>        </>
        )
}
export default Header;