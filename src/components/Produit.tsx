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

        // console.log(produit);
        

        return (
            <>
                <div className="col-md-6 produit-solo img">
                    <img src={produit.image} 
                         alt={produit.title}

                    />
                </div>
                <div className="col-md-6 produit-solo produit-solo-footer">
                    <h2 className="text-uppercase text-black-50 produit-solo-title">
                        <em>{produit.category}</em>
                    </h2>
                    <h3 className="display-5 produit-solo-title produit-solo-title-first">
                        {produit.title}
                    </h3>
                    <p className="lead rating">
                        <strong>Note</strong> : {produit.rating ? produit.rating.rate : '0'} <i className="fa fa-star"></i>
                    </p>
                    <p className="lead rating-count">
                        <strong>Évaluation</strong> : {produit.rating ? produit.rating.count : 0} client{produit.rating ? produit.rating.count  > 1 ? 's' : '' : ''}
                    </p>
                    <h4 className="display-6 my-4 mt-5">
                        <em>{produit.price}</em> €
                    </h4>
                    <p className="lead mt-5">
                        {produit.description}
                    </p>
                    <div className="d-flex justify-content-between mt-5 btn-forCard">
                        <button className="btn btn-outline-dark add-cart"> 
                            Ajouter au panier   
                            <i className="fa fa-shopping-cart"></i>
                        </button>
                        <NavLink className='btn btn-outline-dark cart' to='/cart'>
                            Voir le panier
                        </NavLink>
                    </div>
                </div>
            </>
        )
    };

  return (
    <div>
        <div className="container produit-solo-container">
            <div className="row">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    </div>
  );
};

export default Produit;
