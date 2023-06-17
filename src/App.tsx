import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './Components/TopNav';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import HomePage from './Pages/Home';
import PortfolioPage from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;