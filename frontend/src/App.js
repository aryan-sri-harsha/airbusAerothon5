import './App.css';
import Login from'./pages/login'
import Signup from './pages/signup'
import {BrowserRouter as Router , Redirect, Route, Switch} from 'react-router-dom'
import Alertinguser from './components/alertinguser'
import Welcome from './pages/welcome'
import Forgetpassword from './pages/forgetpassword'
import Data from './pages/data';
import Account from './postsPages/Account';
import Myposts from './postsPages/myposts';
import AllPosts from './postsPages/allPosts';
import Dashboard from './pages/dashboard';
import InfoPage from './pages/product';
function App() {
  return (
    <div >
      <Router>
        
        <Data> {/* contexapi is here */}
        <Switch>
     <Route exact path='/'> 
       <Login /> 
     </Route>
     <Route exact path='/signup'> 
        <Signup />
     </Route>
      {/* <Route exact path="/welcome/:userName/:type" children={<Welcome />}/> */}
      <Route exact path="/welcome/:userName/:type" children={<Dashboard />}/>
      
         
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/account/:userName" children={<Account />}/>
      <Route exact path ="/myposts/:userName" children={<Myposts />} />
      <Route exact path ="/product/:id" children={<InfoPage/>} />
      <Redirect  path="*" to="/">

      </Redirect>
      </Switch>
      </Data>
      </Router>
    </div>
  );
}

export default App;
