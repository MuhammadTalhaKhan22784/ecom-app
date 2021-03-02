import React from "react";
import subheader from "../assets/subheader.jpeg";
import { Link } from "react-router-dom";
import Product from "../components/Product";
// import { Button } from "../components/Navbar/Button";

export default function Home() {
  return (
    <React.Fragment>
      <div className="subheader">
        <img src={subheader} alt="Vinted-Subheader" />
        <div>
          <p>Ready to declutter your wardrobe?</p>
          {/* <button>Sell Now</button> */}
          {/* <Button>Sign Up</Button> */}
        </div>
      </div>
      <Product />
{/* 
      <Link to="/offer">
        <Product />
      </Link> */}
    </React.Fragment>
  );
}
