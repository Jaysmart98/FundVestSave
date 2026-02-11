import React from 'react'
import { 
  Facebook,
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-primary">
              FinanceHub
            </h5>
            <p className="small text-secondary" style={{ lineHeight: '1.7' }}>
              Your trusted partner for investments, recovery services, loans, and career opportunities.
            </p>
            <div className="d-flex gap-3 mt-4 justify-content-center justify-content-md-start">
              <a href="#" className="text-secondary hover-white"><Facebook size={20} /></a>
              <a href="#" className="text-secondary hover-white"><Twitter size={20} /></a>
              <a href="#" className="text-secondary hover-white"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold small">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small hover-underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small hover-underline">Investment</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small hover-underline">Scam Recovery</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small hover-underline">Career</a></li>
            </ul>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold small">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small hover-underline">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small hover-underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small hover-underline">Risk Disclosure</a></li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold small">Contact Us</h5>
            <div className="d-flex align-items-start mb-3 gap-2 justify-content-center justify-content-md-start">
              <MapPin size={18} className="text-primary" />
              <p className="small text-secondary mb-0">123 Finance Street, New York, NY 10001</p>
            </div>
            <div className="d-flex align-items-center mb-3 gap-2 justify-content-center justify-content-md-start">
              <Phone size={18} className="text-primary" />
              <p className="small text-secondary mb-0">+1 (555) 123-4567</p>
            </div>
            <div className="d-flex align-items-center mb-3 gap-2 justify-content-center justify-content-md-start">
              <Mail size={18} className="text-primary" />
              <p className="small text-secondary mb-0">info@financehub.com</p>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary opacity-25" />

        <div className="text-center">
          <p className="small text-secondary mb-0">
            © {new Date().getFullYear()} FinanceHub. All rights reserved.
            <br />
            Investment involves risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;