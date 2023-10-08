import React from "react";
import '../table/TableStyles.css';


const Table = () => {
    return(
        <div className="Table">
        <div className="table_header">
        <h1>Recent <span className="lgcolor">Orders</span> </h1>
        <button>View all</button>
        </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Status</th>

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Phones</td>
                        <td>$10000</td>
                        <td>Paid</td>
                        <td><span className="status_delivered">Delivered</span> </td>

                    </tr>

                    <tr>
                        <td>Phones</td>
                        <td>$10000</td>
                        <td>Due</td>
                        <td><span className="status_pending">Pending</span> </td>

                    </tr>
                    <tr>
                        <td>Phones</td>
                        <td>$10000</td>
                        <td>Paid</td>
                        <td><span className="status_return">Return</span> </td>

                    </tr>

                    <tr>
                        <td>Phones</td>
                        <td>$10000</td>
                        <td>Due</td>
                        <td><span className="status_progress">In progress</span> </td>

                    </tr>

                    <tr>
                    <td>Phones</td>
                    <td>$1000</td>
                    <td>Paid</td>
                    <td><span className="status_return">Return</span> </td>

                </tr>

                <tr>
                <td>Watch</td>
                <td>$1500</td>
                <td>Paid</td>
                <td><span className="status_delivered">Delivered</span> </td>

            </tr>

            <tr>
            <td>Phones</td>
            <td>$10000</td>
            <td>Due</td>
            <td><span className="status_pending">Pending</span> </td>

        </tr>
                </tbody>
            
            </table>
        </div>
    )
}

export default Table;