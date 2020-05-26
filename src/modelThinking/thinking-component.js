import React, { useState, useEffect } from "react";
import Quadrant from "../Quadrant/quadrant";

const data = {
  mode4: {
    title: "Thinking Style Mode II",
    text: `People with this style of thinking are often very expressive, calm,
          encouraging, and connecting with others through words and gestures.
          They are compassionate and harmonious by nature, transmitting these
          concerns in their relationships, both in their personal and
          professional lives.`,
  },
  mode2: {
    title: "Thinking Style Mode IV",
    text:
      "People with this style of thinking stand out for being logical, having critical analysis and solving problems with the use of machines and tools. They are characterized by having well-defined goals and the ability to calculate the most efficient and cost-effective strategies for any situation.",
  },
};
const calculateCords = (valor1, valor2) => [
  {
    FrontLeft: valor2,
    FrontRight: valor1,
    BasalLeft: valor1 / 2,
    BasalRight: valor2 / 2,
  },
];

const ThinkingStyle = ({ fSection }) => {
  const [valor1, setValor1] = useState(80);
  const [valor2, setValor2] = useState(40);
  const [coordinates, setCoordinates] = useState([]);
  useEffect(() => {
    setCoordinates(calculateCords(valor1, valor2));
  }, [valor1, valor2]);
  return (
    <div className="columns" style={{ marginTop: "5%" }}>
      <div className="column ">
        <h3>
          {valor1 > 70 && valor2 > 20 ? data.mode4.title : data.mode2.title}
        </h3>
        <p>{valor1 > 70 || valor2 < 20 ? data.mode4.text : data.mode2.text}</p>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            fSection.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
          }}
        >
          Check your brain dominance
        </button>
      </div>
      <div className="divider-vert"></div>
      <div className="column ">
        <input
          className="slider"
          type="range"
          min="0"
          max="120"
          value={valor1}
          onChange={(e) => setValor1(Number(e.target.value))}
        />

        <div className="bg">
          <div className="quadrant">
            <br />
            <Quadrant coordinates={coordinates} />
          </div>
        </div>
        <input
          className="slider"
          type="range"
          min="0"
          max="120"
          value={valor2}
          onChange={(e) => setValor2(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
export default ThinkingStyle;
