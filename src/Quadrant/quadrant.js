import React from "react";
import { RadarChart } from "react-vis";
import "../../node_modules/react-vis/dist/style.css";
const RADAR_PROPS = {
  data: [],
  domains: [
    { name: "FrontRight", domain: [0, 120] },
    { name: "FrontLeft", domain: [0, 120] },
    { name: "BasalLeft", domain: [0, 120] },
    { name: "BasalRight", domain: [0, 120] },
  ],
  height: 400,
  width: 500,
};

export default function FourQuadrantRadarChart({ coordinates }) {
  return (
    <>
      <br />
      <div style={{ marginLeft: "33px" }}>
        <RadarChart
          animation
          data={coordinates}
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
