import { useState } from "react";
import  {HomeData}  from "../Data/HomeData";
import Home from "./Home";

function Homes()
{
    const [items,setitems]=useState(HomeData)
    return(
        <div className="home">
            <Home items={items}/>
        </div>
    )
  
}
export default Homes;