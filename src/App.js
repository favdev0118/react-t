import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

/**
 * switch(a) {
 *  case "a":
 *    //
 *  case 'b':
 *    // 
 * }
 * 
 * window.location.href
 * window.location.history
 * window.location.href.param
 */

export default App;
