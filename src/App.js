import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import BookList from './components/books/BookList';
import Categories from './components/categories/Categories';

const App = () => (
  <div className="App">
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BookList />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
