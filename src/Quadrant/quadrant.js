import React, { useState, useEffect } from "react";
import { RadarChart } from "react-vis";
import "../../node_modules/react-vis/dist/style.css";
const RADAR_PROPS = {
  data: [
    {
      FrontRight: 30,
      FrontLeft: 60,
      BasalLeft: 40,
      BasalRight: 40,
    },
    {
      FrontRight: 150,
      FrontLeft: 75,
      BasalLeft: 80,
      BasalRight: 64,
    },
  ],
  domains: [
    { name: "FrontRight", domain: [0, 120] },
    { name: "FrontLeft", domain: [0, 120] },
    { name: "BasalLeft", domain: [0, 120] },
    { name: "BasalRight", domain: [0, 120] },
  ],
  height: 400,
  width: 500,
};

export default function FourQuadrantRadarChart(props) {
  const [data, setData] = useState(RADAR_PROPS.data);
  const [valor, setValor] = useState(0);
  useEffect(() => {
    setData([
      {
        FrontRight: valor - 5,
        FrontLeft: valor + 10,
        BasalLeft: valor - 10,
        BasalRight: valor - 30,
      },
      {
        FrontRight: 120,
        FrontLeft: 75,
        BasalLeft: 80,
        BasalRight: 64,
      },
    ]);
  }, [valor]);
  return (
    <>
      <input
        className="slider"
        type="range"
        min="0"
        max="120"
        onChange={(e) => setValor(Number(e.target.value))}
      />
      <br />
      <div style={{ marginLeft: "33px" }}>
        <RadarChart
          animation
          data={data}
          domains={RADAR_PROPS.domains}
          height={RADAR_PROPS.height}
          width={RADAR_PROPS.width}
          startingAngle={Math.PI / 4}
          className="horizontally-centered"
          style={{
            labels: {
              fontSize: 13,
            },
            polygons: {
              fillOpacity: 0.5,
              strokeOpacity: 1,
              strokeWidth: 1,
            },
          }}
        />
      </div>
    </>
  );
}
