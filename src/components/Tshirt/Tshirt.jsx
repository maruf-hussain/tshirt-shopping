import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {name, id, picture, price, gender} = tshirt;
    return (
        <div className='product'>
            <div>
            <img src={tshirt.picture}></img>
          <p>Name: {tshirt.name}</p>
          <p>Price: ${tshirt.price}</p> 
          <p>Gender: {tshirt.gender}</p> 
         
            </div>
           <div>
           <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
           </div>
           
        </div>

    );
};

export default Tshirt;