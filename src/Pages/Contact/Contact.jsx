import React from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

const Contact = () => {

  return (
   <>
   <Navbar />
          <div className="bg-light min-vh-100">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      
      <style>{`
        .custom-input:focus {
          background-color: #fff !important;
          border-color: #0d6efd !important;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15) !important;
        }
        .form-container-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .form-container-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
        .custom-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #495057;
          margin-bottom: 0.5rem;
        }
        .icon-box {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          border-radius: 12px;
        }
        .hero-section {
          padding: 80px 0;
          margin-bottom: -60px; /* Pulls content up into the hero area slightly if desired, or keep 0 */
        }
      `}</style>

      <section className="bg-primary text-white hero-section text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <h4 className="text-white-50 fw-normal mx-auto" style={{ maxWidth: '650px' }}>
            Get in touch with our team. We're here to answer your questions and help you get started on your investment journey.
          </h4>
        </div>
      </section>

      <div className="container pb-5" style={{ marginTop: '100px' }}>
        <div className="row g-5">
          <div className="col-lg-5">
            <h1 className="fw-bold mb-5 text-dark">Get In Touch</h1>
            
            <div className="d-flex flex-column gap-5">
              <div className="d-flex align-items-start gap-4">
                <div className="icon-box flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h2 className="h5 fw-bold mb-1 text-dark">Phone</h2>
                  <h2 className="h4 text-primary fw-bold mb-1">+1 (555) 123-4567</h2>
                  <h3 className="h6 text-muted mb-0 d-flex align-items-center">
                    <Clock size={14} className="me-2" /> Mon-Fri 9am-6pm EST
                  </h3>
                </div>
              </div>

              <div className="d-flex align-items-start gap-4">
                <div className="icon-box flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h2 className="h5 fw-bold mb-1 text-dark">Email</h2>
                  <h2 className="h4 text-primary fw-bold mb-1">info@fundvestsave.com</h2>
                  <h3 className="h6 text-muted mb-0">We'll respond within 24 hours</h3>
                </div>
              </div>

              <div className="d-flex align-items-start gap-4">
                <div className="icon-box flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="h5 fw-bold mb-1 text-dark">Office</h2>
                  <h2 className="h4 text-dark fw-bold mb-1">123 Finance Street</h2>
                  <h3 className="h6 text-muted mb-0">New York, NY 10001</h3>
                  <h3 className="h6 text-muted mb-0 text-uppercase small ls-wide">United States</h3>
                </div>
              </div>
            </div>
          </div>

          <section className="col-lg-7">
            <form className="bg-white p-4 p-md-5 rounded-4 shadow-lg border-0 form-container-hover">
              <div className="row g-4">
                <div className="col-12 mb-2">
                  <h3 className="fw-bold text-dark">Send Us a Message</h3>
                  <p className="text-muted">Fill out the form below and our team will get back to you shortly.</p>
                </div>
                
                <div className="col-md-6">
                  <label className="custom-label">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="form-control form-control-lg bg-light border-0 custom-input py-3" 
                    required 
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="custom-label">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="form-control form-control-lg bg-light border-0 custom-input py-3" 
                    required 
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="custom-label">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    className="form-control form-control-lg bg-light border-0 custom-input py-3" 
                    required 
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="custom-label">Subject</label>
                  <select className="form-select form-select-lg bg-light border-0 custom-input py-3" defaultValue="">
                    <option value="" disabled>Select a subject</option>
                    <option>Investment Inquiry</option>
                    <option>Scam Recovery</option>
                    <option>Loan Application</option>
                    <option>Career Opportunities</option>
                    <option>General Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="custom-label">Message</label>
                  <textarea 
                    className="form-control bg-light border-0 custom-input py-3" 
                    rows="4" 
                    placeholder="Please provide details about your inquiry..."
                    required
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>

                <div className="col-12 pt-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100 py-3 fw-bold rounded shadow-sm d-flex align-items-center justify-content-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
     <Footer />
   </>
  );
};

export default Contact;