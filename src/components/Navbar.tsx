import React from "react";

const Navbar = () => {




  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="*">
            La boutique pour lui
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="*"
                >
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">
                  Produits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">
                  À propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="*" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Connexion
              </a>
              <a href="*" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> S'enregistrer
              </a>
              <a href="*" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Panier (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
