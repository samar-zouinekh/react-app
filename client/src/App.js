import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Landing from './components/layout/landing';
import SideBar from './components/layout/sideBar/sideBar';
import Issue from './components/layout/issue'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">

      <Header />
      <SideBar />
      
      <Switch>
        <Route exact path="/">
        <Landing />
        </Route>
          <Route exact path="/issue">
            <Issue />
          </Route>
         
        </Switch>

    </div>
    </Router>
  );
}

export default App;
