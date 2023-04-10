import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";


function ProductDetails (){
    const params=useParams();
    const url='https://fakestoreapi.com/products';
    const [products,setproduct]=useState([]);
    useEffect(()=>{
        fetch(`${url}/${params.productid}`).then((res)=>{
            res.json().then((product)=>{
                setproduct(product)
            })
        })
    })
    console.log(params);
    return(
        <>

        {/* <h1>product details:{products.title}</h1> */}
        <Product product={products} button={false}/>

        </>




    )
};
export default ProductDetails;