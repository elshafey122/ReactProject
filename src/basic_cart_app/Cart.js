import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import Image from 'react-bootstrap/Image'
import { deletefromcart } from "./rtk/CartSlices";
import {clearcart} from './rtk/CartSlices'
function Cart()
{
   const cart=useSelector(state=>state.Cart)
   const dispatch=useDispatch();
   const totalprice=cart.reduce((acc,product)=>{
    acc+=(product.price*product.quantity);
    return acc;
   },0)
   return(
    <Container >
    <h1 className="py-6">welcome to Cart</h1>
    <Button onClick={()=>dispatch(clearcart())}
     variant='primary'>clear</Button>
    <h4>total = {totalprice.toFixed(2)} $</h4>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>price</th>
          <th>quantity</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
         {cart.map((product)=>{
            return(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td><Image style={{height:'100px', width:'100px'}} src={product.image}/></td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><Button onClick={()=>dispatch(deletefromcart(product))} variant='danger'>Delete</Button></td>
          </tr>
         )})}
       
      </tbody>
    </Table>
    

    </Container>
   )
}
export default Cart;