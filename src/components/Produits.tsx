import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import ShowProducts from './ShowProducts';



const Produits = () => {

    const [data, setData]         = useState([]);
    const [filter, setFilter]     = useState(data);
    const [loading, setLoading]   = useState(false);
    
    let componentMounted :boolean = true;



    useEffect(() => {

        const getProducts = async (value? :any) => {
            
            setLoading(true);

            const reponse = await fetch('https://fakestoreapi.com/products');

            if (componentMounted) {
                setData(await reponse.clone().json());
                setFilter(await reponse.json());
                setLoading(false);
            };

            // eslint-disable-next-line react-hooks/exhaustive-deps
            return () => componentMounted = false;
            

        };

        getProducts();

    }, []);
    


    return (
        <div>
            <div className="container text-center py-2 arrow-container shadow-sm">
               <i className="fa fa-arrow-down"></i> 
            </div>
            
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className='recent display-6 fw-bolder text-end'>Ajout récent</h2>
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