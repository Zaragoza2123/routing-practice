import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,  //this allows us to enable routing for the application
  Switch, // this allows us to tell react which components/elements will show conditionally based on route
  Route, //this allows us to specify the route for a component/element
  Link //just like an anchor tag but it won't refresh the whole page
} from 'react-router-dom';

import Profile from './components/Profile';
import People from './components/People';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <p>Welcome</p>
          </Route>
          <Route exact path="/:id">
            <People></People>
          </Route>
          <Route exact path="/:id">
            <People></People>
          </Route>
          <Route exact path="/:id/:color1/:color2">
            <People></People>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;


