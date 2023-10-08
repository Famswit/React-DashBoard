import React from "react";
import {AiOutlineMenu} from 'react-icons/ai';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {AiOutlineSearch, AiOutlineSetting} from 'react-icons/ai';
import {FaCircleUser} from 'react-icons/fa6';
import '../header/HeaderStyles.css';
import DarkMode from "../../components/DarkMode/DarkMode";




const Header = () => {
    return(
        <div className="header_layout">
            <div className="modebar">
            <h1>DashBoard</h1>
            </div>

            <div className="searchbar">

            <input placeholder="search"  /> 
            </div>

            <div className="profilebar">
            <DarkMode />          

            <IoMdNotificationsOutline />
            <AiOutlineSetting />
            <FaCircleUser />
            </div>

        </div>
    )
}

export default Header;