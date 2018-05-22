import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList } from 'recharts';
import ReactDOM from "react-dom";
import request from "superagent";


class SimpleAreaChart extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            values:[]
        }
    }

    componentWillMount() {
        request
            .get('http://localhost:8081/listData')
            .then((res) => {
                this.setState({
                    values:JSON.parse(res.text)
                });

            })
    }

    render () {
        var test = this.state.values;
        return (
            <div>
                <h4>A demo of synchronized AreaCharts</h4>
                <LineChart width={1000} height={500} data={test} syncId="anyId"
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
}


const app = document.getElementById('app');
ReactDOM.render(<SimpleAreaChart/>, app);