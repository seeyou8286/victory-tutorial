import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList } from 'recharts';
import ReactDOM from "react-dom";


const data = [
    {name: 'Page A', uv: 4000},
    {name: 'Page B', uv: 3000},
    {name: 'Page C', uv: 2000},
    {name: 'Page D', uv: 1223},
    {name: 'Page E', uv: 1890},
    {name: 'Page F', uv: 2390},
    {name: 'Page G', uv: 3490},
];
const SimpleAreaChart = React.createClass({
    render () {
        return (
            <div>
                <h4>A demo of synchronized AreaCharts</h4>
                <LineChart width={1000} height={500} data={data} syncId="anyId"
                           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                </LineChart>
                {/*<p>Maybe some other content</p>*/}
                {/*<LineChart width={600} height={200} data={data} syncId="anyId"*/}
                           {/*margin={{top: 10, right: 30, left: 0, bottom: 0}}>*/}
                    {/*<CartesianGrid strokeDasharray="3 3"/>*/}
                    {/*<XAxis dataKey="name"/>*/}
                    {/*<YAxis/>*/}
                    {/*<Tooltip/>*/}
                    {/*<Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />*/}
                    {/*<Brush />*/}
                {/*</LineChart>*/}
                {/*<AreaChart width={600} height={200} data={data} syncId="anyId"*/}
                           {/*margin={{top: 10, right: 30, left: 0, bottom: 0}}>*/}
                    {/*<CartesianGrid strokeDasharray="3 3"/>*/}
                    {/*<XAxis dataKey="name"/>*/}
                    {/*<YAxis/>*/}
                    {/*<Tooltip/>*/}
                    {/*<Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />*/}
                {/*</AreaChart>*/}
            </div>
        );
    }
})


const app = document.getElementById('app');
ReactDOM.render(<SimpleAreaChart/>, app);