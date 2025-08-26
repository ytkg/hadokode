import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/media/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
