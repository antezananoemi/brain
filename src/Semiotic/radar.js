import React from "react";
import OrdinalFrame from "semiotic/lib/OrdinalFrame";
const frameProps = {
  data: [
    {
      name: "Adult",
      color: "#E0488B",
      attribute: "Frontal Right",
      value: 120,
    },
    {
      name: "Adult",
      color: "#E0488B",
      attribute: "Basal Right",
      value: 98,
    },
    {
      name: "Adult",
      color: "#E0488B",
      attribute: "Basal Left",
      value: 70,
    },
    {
      name: "Adult",
      color: "#E0488B",
      attribute: "Frontal Left",
      value: 59,
    },
    {
      name: "Child",
      color: "#9fd0cb",
      attribute: "Frontal Right",
      value: 102,
    },
    {
      name: "Child",
      color: "#9fd0cb",
      attribute: "Basal Right",
      value: 101,
    },
    {
      name: "Child",
      color: "#9fd0cb",
      attribute: "Basal Left",
      value: 99,
    },
    {
      name: "Child",
      color: "#9fd0cb",
      attribute: "Frontal Left",
      value: 22,
    },
    {
      name: "Child",
      color: "#9fd0cb",
      attribute: "Frontal Left",
      value: 0,
    },
  ],
  size: [500, 400],
  margin: { top: 70, left: 133 },
  type: "point",
  connectorType: function (e) {
    return e.name;
  },
  projection: "radial",
  oAccessor: "attribute",
  rAccessor: "value",
  rExtent: (0)[(0, 120)],

  style: function (e) {
    return { fill: e.color, stroke: "white", strokeOpacity: 0.5 };
  },
  connectorStyle: function (e) {
    return {
      fill: e.source.color,
      stroke: e.source.color,
      strokeOpacity: 0.5,
      fillOpacity: 0.5,
    };
  },
  //title: "Basal Derecho Trimodal",
  axes: true,
  pieceHoverAnnotation: true,
  tooltipContent: (d) => (
    <div className="tooltip-content">
      <p>{d.value !== 0 && d.value}</p>
    </div>
  ),
  oLabel: true,
};

export default () => {
  return <OrdinalFrame {...frameProps} />;
};
