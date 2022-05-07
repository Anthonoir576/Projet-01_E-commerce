import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const Produits = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted: boolean = true;

  useEffect(() => {
    const getProducts = async (value?: any) => {
      setLoading(true);

      const reponse = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await reponse.clone().json());
        setFilter(await reponse.json());
        setLoading(false);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => (componentMounted = false);
    };

    getProducts();
  }, []);

  const ShowProducts = () => {
    return (
      <>
        <div className="btn-filter container buttons mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">
            Tous les produits
          </button>
          <button className="btn btn-outline-dark me-2">
            Nouveauté pour lui
          </button>
          <button className="btn btn-outline-dark me-2">Biker style</button>
          <button className="btn btn-outline-dark me-2">
            Collection retro
          </button>
        </div>
        {filter.map((product?: any) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card carte-produit">
                  <img
                    src={product.image}
                    className="card-img-top carte-produit-img"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        {product.price} €
                    </p>
                    <a href="*" className="btn btn-danger">
                        Ajouter au panier
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container text-center py-2 arrow-container shadow-sm">
        <i className="fa fa-arrow-down"></i>
      </div>

      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="recent display-6 fw-bolder text-end">
              Ajout récent
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Produits;
