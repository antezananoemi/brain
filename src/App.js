import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Quadrant from "./Quadrant/quadrant";
import RadarPlot from "./Semiotic/radar";
import NavBar from "./NavBar/navigation";
import FormComponent from "./modelForm/form-component";
import ThinkingStyle from "./modelThinking/thinking-component";

function App() {
  const [formData, setFormData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (formData) {
      setIsLoading(true);
      fetch("api/coordinates")
        .then((response) => {
          if (!response.ok) throw new Error(response.status);
          else return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setCoordinates(data);
        })
        .catch((error) => {
          console.log("Opss.. Something went wrong");
        });
    }
  }, [formData]);
  let fSection = useRef();
  let fCharts = useRef();
  return (
    <div className="container">
      <NavBar />
      <div className="hero hero-sm bg-dark">
        <div className="hero-body text-center">
          <h1>Discover your thinking style and natural preference</h1>
          <p>Test your brain dominance</p>
        </div>
      </div>
      <FormComponent setFormData={setFormData} fSection={fSection} />
      <div className="columns" style={{ marginTop: "5%" }} ref={fCharts}>
        {formData && isLoading && (
          <div className="column col-12">
            <div className="loading loading-lg"></div>
          </div>
        )}
        <div className="column col-6">
          {!isLoading && coordinates && (
            <div className="bg">
              <div className="quadrant">
                <Quadrant coordinates={coordinates.quadrant} />
              </div>
            </div>
          )}
        </div>
        <div className="column col-6">
          {!isLoading && coordinates && (
            <div className="bg">
              <div className="semiotic">
                <RadarPlot coordinates={coordinates.semiotic} />
              </div>
            </div>
          )}
        </div>
      </div>
      <ThinkingStyle fSection={fSection} />
    </div>
  );
}

export default App;
