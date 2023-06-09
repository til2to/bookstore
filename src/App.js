import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import BookList from './components/books/BookList';

const App = () => (
  <div className="App">
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BookList />} />
            {/* <Route path="home" element={<BookList />} /> */}
            {/* <Route path="/" element={<Books />} /> */}
            {/* <Route path="calculator" element={<CalculatorPage />} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
