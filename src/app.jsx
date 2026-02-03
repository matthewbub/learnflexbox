import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './comps/routes_';
import Demo from './pages/landing_page';
import MobileWarn from './pages/mobile_warning';
import './styles/global.css';

import Window from './comps/helpers/handleWindow';

const App = () => {
  const {width} = Window();
  return <>{width > 576 ? <Demo /> : <MobileWarn />}</>;
};

export default App;
