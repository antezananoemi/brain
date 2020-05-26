import { Server } from "miragejs";
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export function makeServer(environment = "development") {
  return new Server({
    environment,
    routes() {
      this.namespace = "api";
      //this.timing = 2000;
      this.get("coordinates", () => {
        return [
          { id: 1, name: "FrontLeft", point: getRandomInt(1, 120) },
          { id: 2, name: "FrontRight", point: getRandomInt(1, 120) },
          { id: 3, name: "BasalLeft", point: getRandomInt(1, 120) },
          { id: 4, name: "BasalRight", point: getRandomInt(1, 120) },
        ];
      });
    },
  });
}
