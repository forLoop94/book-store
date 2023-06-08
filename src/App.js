import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
