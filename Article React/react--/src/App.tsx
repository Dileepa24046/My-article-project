import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Authers from './pages/Authers';
import Articles from './pages/articles/Articles';
import Read from './pages/articles/Read';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authers" element={<Authers />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/read" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
