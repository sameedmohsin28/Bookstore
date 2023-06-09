import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookPage from './components/BookPage';
import CategoriesPage from './components/CategoriesPage';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<BookPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </>
);

export default App;
