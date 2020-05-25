import React from "react";
import ReactDOM from "react-dom";
//import pi,{doublePi , tripplePi} from "./math.js";
import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.tripplePi()}</li>
  </ul>,
  document.getElementById("root")
);
