import { BrowserRouter,  Route} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContex';
import './App.css';


import LogIn from "./Pages/LogIn/LogIn";
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';


function App() {

  const { user } = useAuthContext();

  return (
    <BrowserRouter>
        {!user && <Route path="/" exact component={LogIn} />}
        
        {user && <Route path="/home" exact component={Home} />}
        {user && <Route path="/register" exact component={Register} />}
    </BrowserRouter>
  );
}

export default App;
