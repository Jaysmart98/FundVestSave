import React, { useState, useEffect } from 'react';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Investment', href: '/investment' },
    { name: 'Scam Recovery', href: '/recovery' },
    { name: 'Loans', href: '/loan' },
    { name: 'Career', href: '/career' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Legal', href: '/legal' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <style>{`
        .nav-link-custom {
          font-size: 0.9rem;
          font-weight: 500;
          color: #4a5568 !important;
          transition: all 0.25s ease;
          position: relative;
          padding: 0.5rem 1rem !important;
        }
        
        .nav-link-custom:hover {
          color: #0d6efd !important;
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 5px;
          left: 50%;
          background-color: #0d6efd;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link-custom:hover::after {
          width: 20px;
        }

        .navbar-brand-custom {
          font-weight: 800;
          letter-spacing: -0.5px;
          font-size: 1.4rem;
        }

        .navbar-transition {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <nav 
        className={`navbar navbar-expand-lg sticky-top navbar-transition ${
          isScrolled ? 'navbar-light bg-white shadow-sm py-2' : 'navbar-light bg-transparent py-3'
        }`}
      >
        <div className="container">
          <a className="navbar-brand navbar-brand-custom d-flex align-items-center" href="/">
            <span className="text-primary">FUNDVEST</span>
            <span className="text-dark">SAVE</span>
          </a>

          <button 
            className="navbar-toggler border-0 shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-center">
              {navLinks.map((link, idx) => (
                <li className="nav-item" key={idx}>
                  <a className="nav-link nav-link-custom" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
              {/* <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <button className="btn btn-primary px-4 fw-bold rounded-pill shadow-sm btn-sm">
                  Get Started
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>     
    </>
  );
};

export default Navbar;