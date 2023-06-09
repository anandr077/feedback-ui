
import { css } from "styled-components";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SelectColor from "SelectColor";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|select-color)">
          <SelectColor {...selectColorData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const checkbox1Data = {
    children: "Light Red",
};



const selectColorData = {
    pickAColourForFocusArea: "Pick a colour for focus area",
    line34: "/img/line-34@2x.png",
    checkbox1Props: checkbox1Data,
    checkbox2Props: checkbox2Data,
    checkbox3Props: checkbox3Data,
    checkbox4Props: checkbox4Data,
    checkbox5Props: checkbox5Data,
    checkbox6Props: checkbox6Data,
    checkbox7Props: checkbox7Data,
    checkbox8Props: checkbox8Data,
    checkbox9Props: checkbox9Data,
    checkbox10Props: checkbox10Data,
    checkbox11Props: checkbox11Data,
    checkbox12Props: checkbox12Data,
    checkbox13Props: checkbox13Data,
    checkbox14Props: checkbox14Data,
};

