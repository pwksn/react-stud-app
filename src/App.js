import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Sidebar from "./Sidebar";
import Courses from './Courses/Courses';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/courses">
              <Courses className="app-courses"/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
