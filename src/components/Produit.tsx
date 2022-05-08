import React, { useState, useEffect } from "react";
import { useParams, NavLink }         from 'react-router-dom';
import Loading                        from "./Loading";

const Produit = () => {

    const {id}                  :any     = useParams();
    const [produit, setProduit] :any     = useState([]);
    const [loading, setLoading] :any     = useState(false);

    useEffect((val? :any) => {

        const getProduct = async (value? :any) => {
            setLoading(true);
            const reponse = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduit(await reponse.json());
            setLoading(false);
        };
        getProduct();
    }, []);

    const ShowProduct = () => {

        console.log(produit);
        

        return (
            <>
                <div className="col-md-6 produit-solo">
                    <img src={produit.image} 
                         alt={produit.title}
                         width='400px'
                         height='400px' 
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="text-uppercase text-black-50">
                        {produit.category}
                    </h2>
                    <h3 className="display-5">
                        {produit.title}
                    </h3>
                    <p className="lead">
                        <strong>Note :</strong> {produit.rating.rate} <i className="fa fa-star"></i>
                    </p>
                    <p className="lead">
                        <strong>Évaluation :</strong> {produit.rating.count} client{produit.rating.count > 1 ? 's' : ''}
                    </p>
                    <h4 className="display-6 my-4">
                        <em>{produit.price}</em> €
                    </h4>
                    <p className="lead">
                        {produit.description}
                    </p>
                    <button className="btn btn-outline-dark add-cart"> 
                        Ajouter au panier   
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                    <NavLink className='btn btn-outline-dark cart' to='/cart'>
                        Voir le panier
                    </NavLink>
                </div>
            </>
        )
    };

  return (
    <div>
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    </div>
  );
};

export default Produit;
