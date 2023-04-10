import { Link } from "react-router-dom";

function Product(props)
{
    const {product,button}=props;
    return(
        <>
        <div className="card" >
                    <img src={product.image} class="card-img-top" alt="..."/>
                   <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    {button && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
                   </div>
                 </div>
        </>
    )
}
export default Product;