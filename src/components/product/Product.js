import React from "react";
import '../product/ProductStyles.css';



const Product = () =>{
    return(
        <div className="product">
        <div className="product_content">
            <div className="overview">
                <h3>Overview</h3>
                <div className="view_content">
                    <div className="firstcontent">
                        <div className="firstcontentword">
                            <h2>cake</h2>
                            <h2>$20</h2>
                         </div>
                       
                    </div>
                    <div className="firstcontent">pics2</div>
                    <div className="firstcontent">pics3</div>

                </div>
            </div>
            <div className="daily_product">Product of the day</div>
            <div className="trend">trending product</div>
        </div>
            
        </div>
    )
}

export default Product;