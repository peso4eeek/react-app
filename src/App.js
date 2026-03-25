import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <HashRouter>  
      <nav>
        <Link to="/">Главная</Link> | <Link to="/about">О нас</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
