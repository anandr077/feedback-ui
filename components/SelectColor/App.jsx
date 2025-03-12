import { css } from 'styled-components';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SelectColor from './SelectColor';

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
  children: 'Light Red',
};

const selectColorData = {
  pickAColourForFocusArea: 'Pick a colour for focus area',
  line34: '/img/line-34@2x.png',
  checkbox1Props: checkbox1Data,
};
