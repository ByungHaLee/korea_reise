import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Hotel from './routes/Hotel';
import Spot from './routes/Spot';
import Navigation from './components/Navigation';

function App() {
  return (
    
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/spot" component={Spot} />
      <Route path="/hotel" component={Hotel} />
      <Route path="/hotel-detail/:id" component={Detail} />
    </HashRouter>
    
  ); 
}

export default App;
