import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { 
  ShieldAlert, 
  TrendingUp, 
  Bitcoin, 
  Globe, 
  ShieldCheck, 
  Headset, 
  BarChart3, 
  ArrowRight 
} from 'lucide-react';

const Investment = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
    <Navbar />
      <div className="bg-light pb-5 min-vh-100">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 mb-5 shadow-sm">
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold mb-3">Investment Services</h1>
          <h4 className="lead fs-4 fw-bold opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            Access global markets with professional guidance, advanced tools, and personalized strategies.
          </h4>
        </div>
      </section>

      <div className="container">
        {/* Refined Risk Warning */}
        <div className="custom-risk-alert d-flex align-items-center mb-5 shadow-sm">
          <ShieldAlert className="me-3 flex-shrink-0 text-danger" size={24} />
          <div>
            <h6 className="fw-bold mb-1 text-danger small">Investment Risk Warning:</h6>
            <h4 className="mb-0 text-muted" style={{ fontSize: '1rem' }}>
              The value of investments can go down as well as up. You may not get back the amount you invest. 
              Past performance is not a reliable indicator of future results.
            </h4>
          </div>
        </div>

        {/* Opportunities Grid */}
        <section className="mb-5">
          <h2 className="text-center fw-bold mb-4">Investment Opportunities</h2>
          <div className="row g-4">
            {[
              { title: "Stock Trading", icon: <TrendingUp />, risk: "Medium to High", color: "primary" },
              { title: "Cryptocurrency", icon: <Bitcoin />, risk: "High", color: "warning" },
              { title: "Forex Trading", icon: <Globe />, risk: "High", color: "success" }
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm card-hover-effect">
                  <div className="card-body p-4 text-center">
                    <div className={`text-${item.color} mb-3`}>{React.cloneElement(item.icon, { size: 40 })}</div>
                    <h4 className="fw-bold">{item.title}</h4>
                    <p className="text-muted small">Invest in global markets with access to real-time data and professional analysis.</p>
                    <ul className="list-unstyled text-start small mb-4">
                      <li>• Real-time quotes</li>
                      <li>• Advanced charting</li>
                      <li>• Expert research</li>
                    </ul>
                    <hr />
                    <div className="mt-3">
                      <span className="text-muted small d-block mb-1">Risk Level:</span>
                      <span className={`badge bg-${item.risk === 'High' ? 'danger' : 'warning'} px-3 py-2`}>
                        {item.risk}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="row py-5 g-4 text-center border-top border-bottom my-5 bg-white rounded shadow-sm mx-0">
          <div className="col-md-4 border-end-md">
            <ShieldCheck size={32} className="text-primary mb-2" />
            <h6 className="fw-bold">Secure Platform</h6>
            <p className="small text-muted mb-0">Industry-leading encryption</p>
          </div>
          <div className="col-md-4 border-end-md">
            <Headset size={32} className="text-primary mb-2" />
            <h6 className="fw-bold">Expert Guidance</h6>
            <p className="small text-muted mb-0">Professional advisors 24/7</p>
          </div>
          <div className="col-md-4">
            <BarChart3 size={32} className="text-primary mb-2" />
            <h6 className="fw-bold">Advanced Tools</h6>
            <p className="small text-muted mb-0">Real-time analytics</p>
          </div>
        </section>

        {/* Application Form */}
        <section className="mx-auto" style={{ maxWidth: '850px' }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Start Your Journey</h2>
            <p className="text-muted">Complete the application below and our team will contact you.</p>
          </div>

          <form className="bg-white p-4 p-md-5 rounded shadow-sm border border-2 form-container-hover">
            <div className="row g-4">
              <div className="col-md-6">
                <label className="custom-label">full name</label>
                <input type="text" className="form-control form-control-lg custom-input" required />
              </div>
              <div className="col-md-6">
                <label className="custom-label">email address</label>
                <input type="email" className="form-control form-control-lg custom-input" required />
              </div>
              <div className="col-md-6">
                <label className="custom-label">phone number</label>
                <input type="number" className="form-control form-control-lg custom-input" required />
              </div>
              <div className="col-md-6">
                <label className="custom-label">investment type</label>
                <select className="form-select form-select-lg custom-input" defaultValue="">
                  <option value="" disabled className="d-none">Select investment type</option>
                  <option>Stock Trading</option>
                  <option>Cryptocurrency</option>
                  <option>Forex Trading</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="custom-label">select investment amount</label>
                <select className="form-select form-select-lg custom-input" defaultValue="">
                  <option value="" disabled className="d-none">Select investment amount</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="custom-label">investment experience</label>
                <select className="form-select form-select-lg custom-input" defaultValue="">
                  <option value="" disabled className="d-none">Select investment experience</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div className="col-md-12">
                <label className="custom-label">risk tolerance</label>
                <select className="form-select form-select-lg custom-input" defaultValue="">
                  <option value="" disabled className="d-none">Select risk tolerance</option>
                  <option>Conservative - Prioritize capital preservation</option>
                  <option>Moderate - Balanced growth and safety</option>
                  <option>High - Willing to accept significant risk for potential returns</option>
                </select>
              </div>
              
              <div className="col-md-12">
                <label className="custom-label">additional information</label>
                <textarea className="form-control custom-input" rows="4" placeholder="Tell us about your investment goals and any questions you have..."></textarea>
              </div>

              <div className="col-12">
                <div className="consent-container d-flex align-items-center rounded">
                  <input type="checkbox" className="form-check-input flex-shrink-0" required id="consent" />
                  <label className="form-check-label small text-muted ms-3 mb-0" htmlFor="consent">
                    I acknowledge that I have read and understood the <a href="#" className="text-decoration-none fw-semibold">Risk Disclosure</a> and agree to the <a href="#" className="text-decoration-none fw-semibold">Terms of Service</a>. I understand that investing carry risk abd i may lose my invested capital.
                  </label>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-lg w-100 py-3 fw-bold rounded shadow-sm d-flex align-items-center justify-content-center gap-2">
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <style>{`
        /* Refined Risk Alert */
        .custom-risk-alert {
          background-color: rgba(220, 53, 69, 0.03); /* Very soft red tint */
          border: 1px solid rgba(220, 53, 69, 0.2); /* Thin, light border */
          padding: 1rem 1.5rem;
          border-radius: 8px;
        }

        /* Label Styling - Small letters and tiny font */
        .custom-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: lowercase;
          color: #888;
          margin-bottom: 0.35rem;
          padding-left: 2px;
        }

        /* Input Styling */
        .custom-input {
          border: 1px solid #e0e0e0;
          transition: all 0.2s ease;
          font-size: 0.9rem;
          border-radius: 8px;
        }

        .custom-input:hover {
          border-color: #0d6efd;
          background-color: #fcfcfd;
        }

        .custom-input:focus {
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.05);
          border-color: #0d6efd;
          background-color: #fff;
        }

        /* Textarea specific spacing */
        textarea.custom-input {
          padding-top: 0.75rem;
        }

        /* Consent Container with Warning/Yellow BG */
        .consent-container {
          background-color: rgba(255, 193, 7, 0.08);
          border: 1px solid rgba(255, 193, 7, 0.15);
          padding: 1rem;
          transition: background-color 0.2s ease;
        }
        
        .consent-container:hover {
          background-color: rgba(255, 193, 7, 0.12);
        }

        /* Form Container Hover */
        .form-container-hover {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
        }
        .form-container-hover:hover {
          border-color: #0d6efd !important;
          box-shadow: 0 0.5rem 2rem rgba(13, 110, 253, 0.06) !important;
        }

        /* Card Effects */
        .card-hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05) !important;
          border-radius: 12px;
        }
        .card-hover-effect:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
        }

        @media (min-width: 768px) {
          .border-end-md {
            border-right: 1px solid #eee;
          }
        }

        /* Fix checkbox align if multiline */
        .form-check-input {
          cursor: pointer;
          width: 1.15rem;
          height: 1.15rem;
          margin-top: 0;
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

export default Investment;