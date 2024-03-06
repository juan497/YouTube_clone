import logo from './logo.svg';
import './App.css';
import Header from './Header';
import RecomendedVideos from './RecomendedVideos';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="app">

      <Header/>

      <Router>
        <Switch>
          <Route path='/search'>
            <h1>search page</h1>
          </Route>
          <Route path='/'>
            <div className='app__page'>
            <Sidebar/> 
            <RecomendedVideos/>
      </div> 
          </Route>
        </Switch>

      </Router>


      
      {/* <Header/>

      <div className='app__page'>
      <Sidebar/> 
      <RecomendedVideos/>
      </div> */}
    </div>
  );
}

export default App;
