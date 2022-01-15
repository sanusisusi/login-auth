import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Preferences from './components/Preferences';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h2>Application</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/preferences" element={<Preferences />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
