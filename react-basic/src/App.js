// eslint-disable-next-line
import React from "react";
import Navbar from './components/Navbar';
// import Users from './Pages/Users';
// import Home from './Pages/Home';
// import Movies from './Pages/Movies';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
function App() {   
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            {routes.map(route=>{
              return (
              <Route 
                key={route.path}
                path={route.path} 
                exact
                >
                <route.component />
              </Route>
              )
            })}           
          </Switch> 
        </div>  
      </div>
    </Router>
  );
}
export default App;