import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Friend from './components/Friend/Friend';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
