import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Ge from './Resources/ge';
import En from './Resources/en';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ge />} />
        <Route path="/en" element={<En />} />
      </Routes>
    </Router>
  );
}

export default App;
