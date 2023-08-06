import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

export default function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsInCategory, setProductsInCategory] = useState([]);

    const getProducts=(()=>{
        fetch(api_url).then((res) => res.json().then((data) => setProducts(data)));

    })
    const getCategories=(()=>{
        fetch(`${api_url}/categories`).then((res) => res.json().then((data) => setCategories(data)));

    })
    const getProductsInCategory=((catName)=>{
        console.log(catName);
        fetch(`${api_url}/categories/${catName}`).then((res) => res.json().then((data) => setProducts(data)));

    })
    useEffect(() => {
        getProducts();
        getCategories();    
    },[]);
    return (
    <>
      <div className="container py-5">
       <div className="py-5 d-flex justify-content-between w-50 m-auto"> {
            categories.map((cat)=>{
                return <button key={cat} onClick={()=>{
                    getProductsInCategory(cat);
                }}className="btn btn-primary">{cat}</button>
            })
        }</div>
        <div className="row">

         {products.map((product)=>{
            return(
                <div className="col-md-3" key={product.id}>
                <Products product={product} showButton={true}/>
              </div>    
            )
         })}
         
        </div>
      </div>
    </>
  );
}
