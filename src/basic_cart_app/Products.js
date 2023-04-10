import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct } from "./rtk/ProductsSlices";
import { addcart } from "./rtk/CartSlices";

function Products()
{

    const products=useSelector((state)=>state.products)    //تستخدم فى استدعاء البيانات من store على حسب البيانات المحددة بداخلة
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchproduct());    //نستخدم useeffect فى استدعاء البيانات من api الى عاملة باستخدام 
    })

   return(
    <Container className='py-5'>
        <Row>
            {products.map((product)=>(
                <div className="col col-lg-3 col-md-auto" id={product.id}>
                    <Card className="mr-7" style={{ width: '18rem' }}>
                            <Card.Img style={{height:'300px'}} variant="top" src={product.image} />
                            <Card.Body>

                            <Card.Title>{product.title}</Card.Title>

                            <Card.Text>
                            {product.description}
                        </Card.Text>

                        <Card.Text>
                            {product.price}
                        </Card.Text>

                        <Button onClick={()=>dispatch(addcart(product))} variant="primary">Add to Cart</Button>
                        </Card.Body>
                        
                    </Card>
                    </div>
            ))}
        </Row>
    </Container>
   )
}
export default Products;