import { BrowserRouter,  Route} from 'react-router-dom';
import './App.css';

import LogIn from "./Pages/LogIn/LogIn"
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={LogIn} />
        <Route path="/home" exact component={Home} />
        <Route path="/register" exact component={Register} />
    </BrowserRouter>
  );
}

export default App;
