import React, { useState, useEffect } from "react";
import Loading                        from "./Loading";
import { NavLink }                    from 'react-router-dom';

const Produits = () => {
  const [data, setData]       = useState([]);
  const [filter, setFilter]   = useState(data);
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
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => (componentMounted = false);
    };

    getProducts();
  }, []);

  const filterProduct = (categorie?: any) => {
    const updateList = data.filter((x?: any) => x.category === categorie);
    setFilter(updateList);
  };

  const ShowProducts = (value?: any) => {
    return (
      <>
        {filter.map((product?: any) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card carte-produit" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top carte-produit-img"
                    alt={product.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {product.title.substring(0, 70)}
                    </h5>
                    <p className="card-text fw-bolder text-center">
                      <em>{product.price}</em> €
                    </p>
                    <NavLink to={`/produit/${product.id}`} className="btn btn-danger">
                      Ajouter <i className="fa fa-shopping-cart"></i>
                    </NavLink>
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
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="recent display-6 fw-bolder text-end">
              Ajout récent
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="btn-filter container buttons mb-5 pb-5">
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => {
                setFilter(data);
              }}
            >
              Tous les produits
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => {
                filterProduct("men's clothing");
              }}
            >
              Nouveauté pour lui
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => {
                filterProduct("women's clothing");
              }}
            >
              Biker style
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => {
                filterProduct("jewelery");
              }}
            >
              Collection retro
            </button>
          </div>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Produits;
