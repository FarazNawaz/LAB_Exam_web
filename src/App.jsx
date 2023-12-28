// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksList from './components/BooksList';
import AddBookForm from './components/AddBookForm';
import CategoriesList from './components/CategoriesList'; // Import the CategoriesList component
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/books" element={<><BooksList /><AddBookForm /></>} />
        {/* Update the categories route to include the CategoriesList component */}
        <Route path="/categories" element={<CategoriesList />} />
      </Routes>
    </Router>
  );
}

export default App;
