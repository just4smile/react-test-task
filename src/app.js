import React from 'react';

import { DataProvider } from './components';
import { Main } from './pages';

import './App.css';

function App() {
  return (
    <main className="app">
      <DataProvider>
        <Main />
      </DataProvider>
    </main>
  );
}

export default App;
