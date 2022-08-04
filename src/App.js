import React from "react";
import { render } from "react-dom";
const Pet = (obj) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, obj.name),
    React.createElement("h2", {}, obj.animal),
    React.createElement("h2", {}, obj.breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "idk" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      anima: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
