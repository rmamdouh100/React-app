import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Products/Products';

export default function ProductDetails() {
    const api_url="https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});

    const params =useParams();
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product));
    },[]); 
  return <>

    <div className="w-50 m-auto">   <Products product={product} showButton={false}/>
</div>
  </>
}
