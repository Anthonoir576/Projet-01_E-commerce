import React      from "react";
import Produits   from "./Produits";

const Home = () => {
  return (
    <div className="hero">
      <div className="card card-hero bg-dark text-white border-0">
        <img src="https://github.com/Anthonoir576/Projet-01_E-commerce/blob/master/public/assets/bg2.jpg?raw=true" className="card-img" alt="produit" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h1 className="card-title text-black display-3">Nouvelle collection été</h1>
            <p className="card-text text-black lead fs-2">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <Produits />
    </div>
  );
};

export default Home;
