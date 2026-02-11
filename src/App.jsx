import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Investment from './Pages/Investment/Investment.jsx';
import Recovery from './Pages/Scam Recovery/Recovery.jsx';
import Loan from './Pages/Loans/Loan.jsx';
import Career from './Pages/Career/Career.jsx';
import FAQ from './Pages/FAQ/FAQ.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/career" element={<Career />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;