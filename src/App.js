import React, { useState, useEffect } from "react";
import "./App.css";
import Quadrant from "./Quadrant/quadrant";
import RadarPlot from "./Semiotic/radar";
import NavBar from "./NavBar/navigation";
import FormComponent from "./modelForm/form-component";

function App() {
  const [formData, setFormData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (formData) {
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

  return (
    <div className="container">
      <NavBar /> <FormComponent setFormData={setFormData} />
      <div className="columns mt-2 mb-2">
        {formData && isLoading && (
          <div className="column col-12 mt-2 mb-2">
            <div className="loading loading-lg"></div>
          </div>
        )}
        <div className="column col-6">
          {!isLoading && coordinates && (
            <div className="bg">
              <div className="quadrant">
                <Quadrant coordinates={coordinates} />
              </div>
            </div>
          )}
        </div>
        <div className="column col-6">
          {!isLoading && coordinates && (
            <div className="bg">
              <div className="semiotic">
                <RadarPlot />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
