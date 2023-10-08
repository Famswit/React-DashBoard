import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';



const Barchart = () => {
    const data = [
        {
         name: "Groceries", value: 300000 
        },
        {
            name: "Groceries", value: 10000 

        },
        {
            name: "Groceries", value: 40000 

        },
        {
            name: "Groceries", value: 85000 

        },
        {
            name: "Groceries", value: 15000 

        },
        {
            name: "Groceries", value: 210000 

        },
        
      ];
  
      return (
        <div>
        <h2>Total List</h2>
        <BarChart
        width={300}
        height={230}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 2,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" stackId="a" fill="#ff4500" />
        <Bar dataKey="value" stackId="a" fill="#fff" />
      </BarChart>

       
        
        </div>
      )

}

export default Barchart;