import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Candidate from './pages/Candidate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/candidate' element={<Candidate/>} />
        <Route path='/candidate/:id' element={<Candidate/>} />
      </Routes>
    </Router>
  );
}

export default App;
