import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="produit" height='700px' />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title text-black">Accueil</h5>
            <p className="card-text text-black">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text text-black">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
