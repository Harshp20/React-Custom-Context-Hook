import React from 'react'
import './styles/App.css'
import { ConsumerComponent } from './components/ConsumerComponent';
import { ContextProvider } from './hooks/ContextProvider'


function App() {

  return (
    <div className="App">
      <h1>Demonstrating Context using Custom Context Hook</h1>
      <ContextProvider>
        <ConsumerComponent />
      </ContextProvider>
    </div>
  );
}

export default App;
