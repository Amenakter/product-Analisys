import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip ,BarChart,Bar } from 'recharts';


const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
        
    },[])
    return (
      <div className='container align-item-center justify-content-center'>
        <div className=''>
        <h2 className='py-5'>MONTH WILL SELL</h2>
        <LineChart width={550} height={300} data={data}>
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        </LineChart>
      </div>
        
        <div>
        <h2 className='py-5'>Invesment vs revenue</h2>
        <BarChart width={550} height={300} data={data}>
        <XAxis dataKey="month" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="sell" fill="#8884d8" barSize={30} />
        </BarChart>
        </div>
    </div>
);
       
    
};

export default Dashboard;