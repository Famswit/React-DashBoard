import React from "react";
import Header from "../../components/header/Header";
import '../content/ContentStyles.css';
import Barchart from "../../components/charts/Barchart";
import {HiClipboardDocumentList} from 'react-icons/hi2';
import Linechart from "../charts/Linecharts";
import PieChart from "../charts/Piechart";

import Table from "../table/Table";
import { Link } from "react-router-dom";




const Content = () => {
    return(
        <div className="content_layout">
        <Header />
        <div className="main_content">
            
        <div className="contentone"> 
             <div className="content_container">
                
                <h2>Top Deals</h2>
                <div className="profile_container">
                <div className="deal_container">
                    <div className="profile">
                    <div className="profile_image"></div>
                    <div className="profile_details">
                    <p>Travis Green</p>
                    <h6>travis@gmail.com</h6>
                    </div>
                    </div>
                    
                    <div>$3,000</div>
                
            </div>
            <div className="deal_container">
                    <div className="profile">
                    <div className="profile_image"></div>
                    <div className="profile_details">
                    <p>Juve Game</p>
                    <h6>travis@gmail.com</h6>
                    </div>
                    </div>
                    
                    <div>$31,000</div>
                
            </div>
            <div className="deal_container">
            <div className="profile">
            <div className="profile_image"></div>
            <div className="profile_details">
            <p>Gene Graffit</p>
            <h6>travis@gmail.com</h6>
            </div>
            </div>
            
            <div>$10,000</div>
        
    </div>
    <div className="deal_container">
    <div className="profile">
    <div className="profile_image"></div>
    <div className="profile_details">
    <p>Eben Fam</p>
    <h6>travis@gmail.com</h6>
    </div>
    </div>
    
    <div>$2,670</div>

</div>
<div className="deal_container">
<div className="profile">
<div className="profile_image"></div>
<div className="profile_details">
<p>Messi Green</p>
<h6>travis@gmail.com</h6>
</div>
</div>

<div>$6,500</div>

</div>
                </div>
                

            <div className="contentone_visit"> 
            
            </div>
            </div>
            <Barchart />
            </div>
            <div className="contenttwo">  
            <div className="contenttwo_container">
                <div className="total_container">
                    <div className="totalone">
                        <div className="total_content">
                        
                        <HiClipboardDocumentList className="icon" />
                        <span className="icon_total">Total Users</span>
                        <h3>1,234</h3>
                        <a href="#" className="view">view all</a>
                        </div>
                       <div className="total_charts">
                       <Linechart />
                       <p>45%</p>
                       <h5>this month</h5>
                       </div>
                        
                    </div>


                    <div className="totalone">
                    <div className="total_content">
                        
                    <HiClipboardDocumentList className="icon" />
                    <span className="icon_total">Total Users</span>
                    <h3>1,234</h3>
                    <a href="#" className="view">view all</a>
                    </div>
                   <div className="total_charts">
                   <Linechart />
                   <p>45%</p>
                   <h5>this month</h5>
                   </div>

                    </div>



                    <div className="totalone">
                    <div className="total_content">
                        
                    <HiClipboardDocumentList className="icon" />
                    <span className="icon_total">Total Users</span>
                    <h3>1,234</h3>
                    <a href="#" className="view">view all</a>
                    </div>
                   <div className="total_charts">
                   <Linechart />
                   <p>45%</p>
                   <h5>this month</h5>
                   </div></div>


                    <div className="totalone">
                    <div className="total_content">
                        
                    <HiClipboardDocumentList className="icon" />
                    <span className="icon_total">Total Users</span>
                    <h3>1,234</h3>
                    <a href="#" className="view">view all</a>
                    </div>
                   <div className="total_charts">
                   <Linechart />
                   <p>45%</p>
                   <h5>this month</h5>
                   </div>
                    </div>

                </div> 
                <div className="analysis">
                <Table />
                </div>
            </div>
            </div>

            
            <div className="contentthree">
            <div className="contentthree_container">
                <div className="piechart">
                <h2>Leads by Source</h2>
                <PieChart />
                </div>
                <div className="update">
                
                <h2>Updated Orders</h2>

                <div className="update_profile">
                    <div className="update_pics"></div>
                    <div>
                    <h3>Ben femi</h3>
                    <span className="order_name">Ginger</span>
                    <span className="update_span">$2,500</span>
                    </div>
                    
                </div>

                <div className="update_profile">
                <div className="update_pics"></div>
                <div>
                <h3>Ben femi</h3>
                <span className="order_name">Ginger</span>
                <span className="update_span">$2,500</span>
                </div>
                
            </div>

          <Link to='/neworder'><button className="order_btn">Add Order</button></Link>  
                </div>
            </div>

            </div>

        </div>
            
           


        </div>
    )
}

export default Content;