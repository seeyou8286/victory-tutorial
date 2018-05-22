import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryArea, VictoryPolarAxis, VictoryGroup, VictoryLabel, VictoryLine, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];
const characterData = [
    { strength: 1, intelligence: 250, luck: 1, stealth: 40, charisma: 50 },
    { strength: 2, intelligence: 300, luck: 2, stealth: 80, charisma: 90 },
    { strength: 5, intelligence: 225, luck: 3, stealth: 60, charisma: 120 }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.processData(characterData),
            maxima: this.getMaxima(characterData)
        };
    }

    getMaxima(data) {
        const groupedData = Object.keys(data[0]).reduce((memo, key) => {
            memo[key] = data.map((d) => d[key]);
            return memo;
        }, {});
        return Object.keys(groupedData).reduce((memo, key) => {
            memo[key] = Math.max(...groupedData[key]);
            return memo;
        }, {});
    }

    processData(data) {
        const maxByGroup = this.getMaxima(data);
        const makeDataArray = (d) => {
            return Object.keys(d).map((key) => {
                return { x: key, y: d[key] / maxByGroup[key] };
            });
        };
        return data.map((datum) => makeDataArray(datum));
    }

    render() {
        return (
            <VictoryChart polar
                          theme={VictoryTheme.material}
                          domain={{ y: [ 0, 1 ] }}
            >
                <VictoryGroup colorScale={["gold", "orange", "tomato"]}
                              style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
                >
                    {this.state.data.map((data, i) => {
                        return <VictoryArea key={i} data={data}/>;
                    })}
                </VictoryGroup>
                {
                    Object.keys(this.state.maxima).map((key, i) => {
                        return (
                            <VictoryPolarAxis key={i} dependentAxis
                                              style={{
                                                  axisLabel: { padding: 10 },
                                                  axis: { stroke: "none" },
                                                  grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
                                              }}
                                              tickLabelComponent={
                                                  <VictoryLabel labelPlacement="vertical"/>
                                              }
                                              labelPlacement="perpendicular"
                                              axisValue={i + 1} label={key}
                                              tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
                                              tickValues={[0.25, 0.5, 0.75]}
                            />
                        );
                    })
                }
                <VictoryPolarAxis
                    labelPlacement="parallel"
                    tickFormat={() => ""}
                    style={{
                        axis: { stroke: "none" },
                        grid: { stroke: "grey", opacity: 0.5 }
                    }}
                />

            </VictoryChart>
        );
    }
}


const app = document.getElementById('app');
ReactDOM.render(<App />, app);