import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

import './stats.css';

const data = [
    {name: '01 Jul', yAxis: ' ', rate: 2},
    {name: '07 Jul', yAxis: ' ', rate: 3.5},
    {name: '14 Jul', yAxis: ' ', rate: 5.5},
    {name: '21 Jul', yAxis: ' ', rate: 7},
    {name: '28 Jul', yAxis: ' ', rate: 8}
];
const Stats = () => {

    return (
        <ResponsiveContainer width='100%' aspect={3.0 / 2.0}>
            <LineChart width={380} height={200} data={data} className="ideas-chart"
                       margin={{top: 25, right: 0, left: 0, bottom: 5}}>
                <YAxis label={{value: 'Ideas', angle: -90, position: 'insideLeft'}}/>
                <XAxis dataKey="name"/>
                <CartesianGrid strokeDasharray="0" vertical={false}/>
                <Tooltip/>
                <Line type="monotone" dataKey="rate" strokeWidth={2} stroke="#003c5a" fill="#ffc828" dot={{r: 6}}
                      activeDot={{r: 8, fill: '#ffc828', stroke: '#003c5a', strokeWidth: '2'}}/>
            </LineChart>
        </ResponsiveContainer>
    )
}
export default Stats;
