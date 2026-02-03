import React from 'react';
import {Analytics} from '@vercel/analytics/next';
import Demo from './pages/landing_page';
import MobileWarn from './pages/mobile_warning';
import './styles/global.css';

import Window from './comps/helpers/handleWindow';

const App = () => {
  const {width} = Window();
  return (
    <>
      {width > 576 ? <Demo /> : <MobileWarn />}
      <Analytics />
    </>
  );
};

export default App;
