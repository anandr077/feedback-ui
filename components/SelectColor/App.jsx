import { css } from 'styled-components';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import SelectColor from 'SelectColor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/select-color" element={<SelectColor {...selectColorData} />} />
        <Route path="/" element={<SelectColor {...selectColorData} />} />
      </Routes>
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
