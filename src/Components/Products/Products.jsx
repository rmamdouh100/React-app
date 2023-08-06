import React from 'react'
import { Link } from 'react-router-dom';

export default function Products(props) {
    console.log(props);
    const {product,showButton}=props; 
  return (
    <>
    
    
    <div className="card    ">
             <img src={product.image} className="card-img-top" alt={product.title}/>
                  <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                       <p className="card-text">{product.description}</p>
                       <b>Price:{product.price}$</b>
                       {showButton&&<Link href="#" className="btn btn-primary"to={`/products/${product.id}`}>Details</Link>}
                    </div>
             </div>
    
    </>
  )
}
