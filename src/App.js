import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Spot from './routes/Spot';
import Spotdetail from './routes/Spotdetail';
import Hotel from './routes/Hotel';
import Detail from './routes/Detail';


import Navigation from './components/Navigation';

class App extends React.Component {
//function App() {
  
  render(){
    
    return (
    
      <HashRouter>
        <Navigation />  
        <Route path="/" exact={true} component={Home} />
        <Route path="/spot" component={Spot} />
        <Route path="/spot-detail/:id" component={Spotdetail} />
        <Route path="/hotel" component={Hotel} />
        <Route path="/hotel-detail/:id" component={Detail} />
      </HashRouter>
      
    )
  }
  
  
}

export default App;

