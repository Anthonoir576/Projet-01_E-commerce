import React, {useState, useEffect} from 'react';



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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Ajout récent</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Produits;