import React from "react";
import OrdinalFrame from "semiotic/lib/OrdinalFrame";

const frameProps = {
  data: [],
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
  color: "white",
  style: function (e) {
    return { fill: "white", stroke: "white", strokeOpacity: 0.5 };
  },
  connectorStyle: function (e) {
    return {
      fill: e.source.color,
      stroke: e.source.color,
      strokeOpacity: 0.5,
      fillOpacity: 0.5,
    };
  },
  axes: true,
  pieceHoverAnnotation: true,
  tooltipContent: (d) => (
    <div className="tooltip-content">
      <p>{d.value !== 0 && d.value}</p>
    </div>
  ),
  oLabel: true,
};

export default ({ coordinates }) => {
  frameProps.data = coordinates;
  return <OrdinalFrame {...frameProps} />;
};
