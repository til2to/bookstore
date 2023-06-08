import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import Quotes from './pages/quote/Quotes';
import Home from './pages/home/Home';
import CalculatorPage from './pages/calculator/CalculatorPage';

const App = () => (
  <div className="App">
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="quote" element={<Quotes />} />
            <Route path="calculator" element={<CalculatorPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
