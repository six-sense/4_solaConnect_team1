import Landing from 'Pages/MainPage';
import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
    </div>
  );
}

export default App;
