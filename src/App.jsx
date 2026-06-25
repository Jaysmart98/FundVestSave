import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from '../src/Pages/About/About.jsx'
import Investment from '../src/Pages/Investment/Investment.jsx'
import Recovery from '../src/Pages/ScamRecovery/Recovery.jsx'
import Loan from '../src/Pages/Loans/Loan.jsx';
import Career from '../src/Pages/Career/Career.jsx';
import FAQ from '../src/Pages/FAQ/FAQ.jsx';
import Legal from '../src/Pages/Legal/Legal.jsx';
import Contact from '../src/Pages/Contact/Contact.jsx';

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
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;