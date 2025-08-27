import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import Search from './components/Search';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      {isHomePage && <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/media/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
