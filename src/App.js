import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Principal from './page/principal';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
