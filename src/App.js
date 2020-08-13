import React from 'react';
import './App.css';
import { data, data2 } from './data.js';
import { ResponsiveLine } from "@nivo/line";

const line1Color = "blue";

export default function App() {
  console.log("Graph1 Data: ", data);
  return (
      <div className="App">
        <h1>Two Y-Axis Line Chart</h1>
        <p>
          I'd like to have a chart with two lines on it. These would have
          different scales the first graph would have its y-axis displayed on the
          left and the second would have its y-axis displayed on the right
        </p>
        <div className="wrapper">
          <div className="graphContainer">
            <ResponsiveLine
                data={data}
                colors={[line1Color]}
                layers={["grid", "axes", "lines", "markers", "legends"]}
                axisLeft={{
                  legend: "Points Scored",
                  legendPosition: "middle",
                  legendOffset: -40
                }}
                theme={getColoredAxis(line1Color)}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            />
          </div>

          <div className="secondGraph">
            <SecondGraph />
          </div>
        </div>
      </div>
  );
}

// I want this to be on top of the other graph
const SecondGraph = () => {
  const data1And2 = data.concat(data2);
  console.log("Graph2 Data: ", data1And2);

  return (
      <ResponsiveLine
        data={data1And2}
        colors={["rgba(255, 255, 255, 0)", "red"]} /* Make the first line transparent with 0 opacity */
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

        /* Add this for tooltip */
        useMesh={true}
        enableSlices="x"
        sliceTooltip={({ slice }) => {
          return (
              <div
                  style={{
                    background: 'white',
                    padding: '9px 12px',
                    border: '1px solid #ccc',
                  }}
              >
                <div>x: {slice.points[0].data.x}</div>
                {slice.points.map(point => (
                    <div
                        key={point.id}
                        style={{
                          color: point.serieColor === "rgba(255, 255, 255, 0)" ? line1Color : point.serieColor,
                          padding: '3px 0',
                        }}
                    >
                      <strong>{point.serieId}</strong> [{point.data.yFormatted}]
                    </div>
                ))}
              </div>
          )
        }}
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
