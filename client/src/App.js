import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopBar from './components/TopBar';
import Background from './components/Background';
import Headline from './components/Headline';


function App() {
  return (
    <BrowserRouter>
      <Link to="/"></Link>
      <Switch>
        <Route path="/">
          <TopBar />
          <Headline />
          <Background />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
