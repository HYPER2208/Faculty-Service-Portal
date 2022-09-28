import { BrowserRouter,  Route} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContex';
import './App.css';


import LogIn from "./Pages/LogIn/LogIn";
import Home from './Pages/Home/Home';
import SetPassword from "./Pages/SetPassword/SetPassword";
import Register from './Pages/Register/Register';


function App() {

  const { user } = useAuthContext();
  const [isSetingPassword, setisSetingPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <BrowserRouter>
        {!user && <Route path="/" exact component={LogIn} />}
        {!user && <Route path="/set-password" exact component={SetPassword} />}
        {user && <Route path="/home" exact component={Home} />}
        {user && <Route path="/register" exact component={Register} />}
        
    </BrowserRouter> 
  );
}

export default App;
