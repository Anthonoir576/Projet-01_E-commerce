import React           from 'react';
import { useSelector } from 'react-redux';
import handleCart      from '../redux/reducers/handleCart';

const Cart = () => {

    const data = useSelector((state? :any) => state.handleCart);
    console.log(data);
    

    return (
        <div>
           Panier 
        </div>
    );
};

export default Cart;