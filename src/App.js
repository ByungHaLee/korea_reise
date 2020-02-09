import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Hotel from './routes/Hotel';
import Spot from './routes/Spot';
import Navigation from './components/Navigation';

class App extends React.Component {
//function App() {
  
  render(){
    
    return (
    
      <HashRouter>
        <Navigation />  
        <Route path={process.env.PUBLIC_URL + '/'} exact={true} component={Home} />
        <Route path={process.env.PUBLIC_URL + '/spot'} component={Spot} />
        <Route path={process.env.PUBLIC_URL + '/hotel'} component={Hotel} />
        <Route path={process.env.PUBLIC_URL + '/hotel-detail/:id'} component={Detail} />
      </HashRouter>
      
    )
  }
  
  
}

export default App;

