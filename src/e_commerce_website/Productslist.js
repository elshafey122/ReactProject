import Product from  './Product'
import { useEffect, useState } from "react";
function Productslist()
{
    let url="https://fakestoreapi.com/products";
    let [products,setproduct]=useState([]);
    let [categories,setcategori]=useState([]);

    const getproducts=()=>{
        fetch(url)
        .then((resorce)=>resorce.json())
        .then((data)=>setproduct(data))
    }

    const getcategories=()=>{
        fetch(`${url}/categories`)
        .then((resorce)=>resorce.json())
        .then((data)=>setcategori(data))
    }

    const get_products_in_category=(cat)=>{
        console.log(cat);
        fetch(`${url}/category/${cat}`)
        .then(resorce=>resorce.json())
        .then(data=>setproduct(data)
        )
    }

    useEffect(()=>{
        getproducts();
        getcategories();
       },)

    return(
        <>
        <h1 className="text-center p-3">our products</h1>
        <div className="container">
        {<button  className='btn btn-info' onClick={()=>{
                            getproducts()
            }}>All</button>}

            {
                categories.map((cat)=>{
                    
                    return(
                        <button key={cat} className='btn btn-info' onClick={()=>{
                            get_products_in_category(cat)
                        }}>{cat}</button>
                    )
                })
            }
            <div className="row">
            {products.map((product)=>{
                return(
                <div className="col-3" key={product.id}>
                <Product product={product} button={true}/>
                </div>
                )
            })};
                
            </div>
        </div> 
        </>
    )
}
export default Productslist;