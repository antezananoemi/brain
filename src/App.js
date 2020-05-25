import React from "react";
import "./App.css";
import BasicRadar from "./BasicRadar/basic-radar";
import RechartModel from "./RechartModel/rechart-component";
import Quadrant from "./Quadrant/quadrant";
import RadarPlot from "./Semiotic/radar";

function App() {
  const d = [
    [
      { axis: "Frontal Derecho", value: 20 },
      { axis: "Frontal Izquierdo", value: 80 },
      { axis: "Basal Izquierdo", value: 66 },
      { axis: "Basal Derecho", value: 74 },
    ],
    [
      { axis: "Frontal Derecho", value: 72 },
      { axis: "Frontal Izquierdo", value: 80 },
      { axis: "Basal Izquierdo", value: 50 },
      { axis: "Basal Derecho", value: 60 },
    ],
  ];

  const mycfg = {
    w: 400,
    h: 400,
    maxValue: 120,
    levels: 6,
    ExtraWidthX: 300,
  };

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column col-6">
            <div className="bg">
              <div className="quadrant">
                <Quadrant />
              </div>
            </div>
          </div>
          <div className="column col-6 ">
            <div className="bg">
              <div className="semiotic">
                <RadarPlot />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column col-6">
            <div className="bg">
              <div className="rechart">
                <RechartModel />
              </div>
            </div>
          </div>
          <div className="column col-6">
            <div className="bg">
              <div className="chart">
                <span>Frontal Izquierdo</span>
                <span style={{ float: "right" }}>Frontal Derecho</span>
                <span
                  style={{
                    marginLeft: "-15%",
                    position: "absolute",
                    bottom: "12%",
                  }}
                >
                  Basal Izquierdo
                </span>
                <span
                  style={{
                    marginLeft: "69%",
                    position: "absolute",
                    bottom: "12%",
                  }}
                >
                  Basal Derecho
                </span>
                <svg
                  width={600}
                  height={500}
                  style={{ transform: "rotate(45deg)" }}
                >
                  <BasicRadar d={d} options={mycfg} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
