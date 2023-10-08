import React from "react";
import '../navbar/NavbarStyles.css';
import {FaHome} from 'react-icons/fa';
import {MdOutlineProductionQuantityLimits} from 'react-icons/md';
import {GoListUnordered} from 'react-icons/go';
import {IoBarChartSharp} from 'react-icons/io5';
import {BiLogOut} from 'react-icons/bi';

import {BsShop} from 'react-icons/bs';

import {VscColorMode} from 'react-icons/vsc';
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";




const Navbar = () => {
  const navigate =  useNavigate();
  const {toggleUser} = useUserContext()


  const handleLogout = () => {
    toggleUser()
    navigate('/login', {replace: true})
}
    return(
        <div className="nav-layout">
            <div className="container">
                <div className="logo">
               <span className="logo_icon"> <BsShop />
               </span> 
                    <h1>Shop<span className= 'lgcolor'>Mart</span></h1> 
                </div>
                <ul>
                <Link to="/"> <li>
                <span className="icon"><FaHome /></span>
                <span className="nav_words">Dashboard</span>
                
                </li>     
                </Link>


                <Link to="/product"> <li> 
                <span className="icon"><MdOutlineProductionQuantityLimits /></span>
                <span className="nav_words">Products</span>
                
                </li> 
                 </Link>

                <Link to="/order"> <li> 
                <span className="icon"><GoListUnordered /></span>
                <span className="nav_words">Orders</span>
               
                </li>
                 </Link>

                <Link to="/analysis">
                <li> 
                <span className="icon"><IoBarChartSharp /></span>
                <span className="nav_words">Charts</span>
                
                </li>
                </Link>

                <Link to="/order">
                <li>
                         
                </li>
                </Link>
                                
                </ul>

                <div>
                <Link to="/login"> <li>
                <span className="icon"><BiLogOut /></span>
                <span onClick={handleLogout} className="nav_words" >Logout</span>
                
                
                </li>
                </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar;