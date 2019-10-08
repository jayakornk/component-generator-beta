import React from 'react';
import 'styled-components/macro';

import Preview from './components/Preview/Preview';
import Sidebars from './components/Sidebars/Sidebars';
import './App.css';
import GlobalContextProvider from './contexts/global/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <div>
        <Sidebars>
          <Preview />
        </Sidebars>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
