import { Link } from "react-router-dom"
import logo from "./../images/logo.png"
import '../header/Header.css'
import { useState } from "react"

function Header(){
    const [mobile,setmobile]=useState(false)
    return(
      <header>
        <div className=" container itemslist">
            <nav className="itemslist">
                <div className="Logo">
                    <img src={logo} alt=""/>
                </div>
                <ul className={mobile ? "navMenu-list" : "itemslista"} onClick={()=>setmobile(false)}>
                    <li class="check">
                        <Link to="/">Home</Link>
                        <Link to="/Series">Series</Link>
                        <Link to="/Movies">Movies</Link>
                        <Link to="/Pages">Pages</Link>
                        <Link to="/Pricing">Pricing</Link>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
                <button className="toogle" onClick={()=>{setmobile(!mobile)}}>
                  {mobile ? <i class="fa fa-times"></i>:<i class="fa fa-bars"></i> }
                </button>
            </nav>
                <div className="account itemslist">
                    <i className="fa fa-search"></i>
                    <i className="fa fa-bell"></i>
                    <i className="fa fa-user"></i>
                <button>Subscribe Now</button>
                </div>
        </div>
        </header>
    )
}
export default Header