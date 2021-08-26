/** React core **/
import ReactDOM from "react-dom";
import React from "react";

/** Components **/
import { Map } from "./Map";

describe("Map", () => {
  test("should renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Map />, div);
  });
});
