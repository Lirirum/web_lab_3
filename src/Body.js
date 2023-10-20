  import React from 'react';
import myImage from './img/comp.png';
import ProductList from './ProductList';

const Body = ({ products, onProductSelect }) => {
  return (
    <div className='container'>

        <div className='wrapper_container'>
        
        <img id="main_wrapper" src={myImage}/>
        
        </div>
                   
       




  

        <div className=''>
      <h2>Список товарів</h2>
      <ProductList />
 
    </div>

   






    </div>



  );
};

export default Body;