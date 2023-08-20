import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast  from 'react-hot-toast';



const Home = () => {
    const tshirts = useLoaderData();
    const [cart , setCart] = useState([])

    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists){
          toast('you have a already added this product')
        }
        else{
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
       
    }



    const handleRemoveCart = id =>{
        const remeining =cart.filter(ts => ts._id !== id);
        setCart(remeining)
    }


    return (
        <div className='home-container'>
         
          <div className='product-container'>
            {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></Tshirt>)
            }
            </div>

            <div className='cart-container'>
             <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            </div>
        </div>
    );
};

export default Home;