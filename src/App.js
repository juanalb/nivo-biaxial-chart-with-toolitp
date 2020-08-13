import React from 'react';
import './App.css';
import { testData, testData2 } from './data.js';
import { ResponsiveLine } from "@nivo/line";

export default function App() {
  const data = testData
  return (
      <div className="App">
        <h1>Two Y-Axis Line Chart</h1>
        <p>
          I'd like to have a chart with two lines on it. These would have
          different scales the first graph would have its y-axis displayed on the
          left and the second would have its y-axis displayed on the right
        </p>
        {/*<div className="wrapper">*/}
        {/*  <div className="graphContainer">*/}
        {/*    <ResponsiveLine*/}
        {/*        data={data}*/}
        {/*        colors={["red"]}*/}
        {/*        layers={["grid", "axes", "lines", "markers", "legends"]}*/}
        {/*        axisLeft={{*/}
        {/*          legend: "Points Scored",*/}
        {/*          legendPosition: "middle",*/}
        {/*          legendOffset: -40*/}
        {/*        }}*/}
        {/*        theme={getColoredAxis("blue")}*/}
        {/*        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}*/}

        {/*        useMesh={true}*/}

        {/*    />*/}
        {/*  </div>*/}

          <div className="secondGraph">
            <SecondGraph />
          </div>
        {/*</div>*/}
      </div>
  );
}

// I want this to be on top of the other graph
const SecondGraph = () => {
  const data = testData2
  return (
      <ResponsiveLine
        data={data}
        colors={["blue"]}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        axisRight={{
          legend: "Wins / Loss",
          legendPosition: "middle",
          legendOffset: 40
        }}
        axisLeft={null}
        axisTop={null}
        enableGridY={false}
        axisBottom={null}
        theme={getColoredAxis("red")}

        useMesh={true}
      />
  );
};

const getColoredAxis = color => {
  return {
    axis: {
      ticks: {
        line: {
          stroke: color
        },
        text: { fill: color }
      },
      legend: {
        text: {
          fill: color
        }
      }
    }
  };
};

// generate some random data for charts
const getTestData = (name, max = 1) => {
  const data = {
    id: name,
    data: []
  };
  for (let x = 0; x < 10; x++) {
    data.data[x] = { x, y: Math.random() * max };
  }
  console.log(data);
  return [data];
};
