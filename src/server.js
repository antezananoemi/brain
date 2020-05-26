import { Server } from "miragejs";
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export function makeServer(environment = "development") {
  return new Server({
    environment,
    routes() {
      this.namespace = "api";
      this.get("coordinates", () => {
        return {
          quadrant: [
            {
              FrontLeft: getRandomInt(1, 120),
              FrontRight: getRandomInt(1, 100),
              BasalLeft: getRandomInt(1, 50),
              BasalRight: getRandomInt(1, 120),
            },
            {
              FrontLeft: getRandomInt(1, 120),
              FrontRight: getRandomInt(1, 50),
              BasalLeft: getRandomInt(1, 120),
              BasalRight: getRandomInt(1, 100),
            },
          ],
          semiotic: [
            {
              name: "Adult",
              color: "#E0488B",
              attribute: "Frontal Right",
              value: getRandomInt(1, 100),
            },
            {
              name: "Adult",
              color: "#E0488B",
              attribute: "Basal Right",
              value: getRandomInt(1, 70),
            },
            {
              name: "Adult",
              color: "#E0488B",
              attribute: "Basal Left",
              value: getRandomInt(1, 120),
            },
            {
              name: "Adult",
              color: "#E0488B",
              attribute: "Frontal Left",
              value: getRandomInt(1, 120),
            },
            {
              name: "Child",
              color: "#9fd0cb",
              attribute: "Frontal Right",
              value: getRandomInt(1, 120),
            },
            {
              name: "Child",
              color: "#9fd0cb",
              attribute: "Basal Right",
              value: getRandomInt(1, 120),
            },
            {
              name: "Child",
              color: "#9fd0cb",
              attribute: "Basal Left",
              value: getRandomInt(1, 120),
            },
            {
              name: "Child",
              color: "#9fd0cb",
              attribute: "Frontal Left",
              value: getRandomInt(1, 120),
            },
            {
              name: "Child",
              color: "#9fd0cb",
              attribute: "Frontal Left",
              value: 0,
            },
          ],
        };
      });
    },
  });
}
