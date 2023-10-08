import React from "react";

import '../pages/HomepageStyles.css';
import Navbar from "../components/navbar/Navbar";
import Content from "../components/content/Content";


const HomePage = () => {
    return(
        <div className="layout">
            <Navbar />
            <Content > 
                  
            </Content>
        </div>

    )
}

export default HomePage;