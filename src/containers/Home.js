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
      <div className="d-flex justify-content-between flex-wrap">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      {/* 
      <Link to="/offer">
        <Product />
      </Link> */}
    </React.Fragment>
  );
}
