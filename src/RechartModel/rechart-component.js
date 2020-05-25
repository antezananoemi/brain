import React from "react";
import { Radar, RadarChart, PolarGrid, PolarRadiusAxis } from "recharts";

const data = [
  { subject: "Frontal Derecho", A: 80, B: 78, fullMark: 120 },
  { subject: "Basal Derecho", A: 120, B: 65, fullMark: 120 },
  { subject: "Basal Izquierdo", A: 70, B: 79, fullMark: 120 },
  { subject: "Frontal Izquierdo", A: 60, B: 100, fullMark: 120 },
];
const RechartComponent = () => {
  return (
    <RadarChart
      cx={285}
      cy={240}
      outerRadius={190}
      width={600}
      height={500}
      data={data}
      style={{ transform: "rotate(45deg)" }}
    >
      <PolarGrid />

      <PolarRadiusAxis angle={90} domain={[0, 120]} />
      <Radar
        name="PersonA"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="PersonB"
        dataKey="B"
        stroke="red"
        fill="red"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};
export default RechartComponent;
