import React, { useEffect } from 'react';
import { 
  ShieldAlert, 
  Search, 
  Gavel, 
  HandCoins, 
  ClipboardCheck, 
  HeartCrack, 
  Bitcoin, 
  TrendingDown, 
  Globe, 
  UserX, 
  MailWarning, 
  FileWarning, 
  MoreHorizontal,
  ArrowRight
} from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Recovery = () => {
  useEffect(() => {
    // Injecting Bootstrap CSS
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
      <section className="bg-dark text-white py-5 mb-5 shadow-sm overflow-hidden position-relative">
        <div className="container py-5 text-center position-relative" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3">Scam & Fund Recovery Services</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '750px' }}>
            Expert assistance in recovering funds lost to fraudulent schemes. 
            Our team has helped thousands of victims reclaim their money through legal and technical intervention.
          </p>
        </div>
        {/* Subtle background pattern/glow */}
        <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 opacity-25" 
             style={{ background: 'radial-gradient(circle, #0d6efd 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
      </section>

      <div className="container">
        {/* Stats Row */}
        <div className="row g-4 mb-5 text-center">
          {[
            { value: "5,000+", label: "Cases Handled", sub: "Global reach" },
            { value: "$50M+", label: "Funds Recovered", sub: "Reclaimed capital" },
            { value: "70%", label: "Success Rate", sub: "Proven methodology" },
            { value: "24/7", label: "Expert Support", sub: "Always available" }
          ].map((stat, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <div className="bg-white p-4 rounded shadow-sm border-0 h-100">
                <h2 className="fw-bold text-primary mb-1">{stat.value}</h2>
                <h6 className="fw-bold text-dark mb-0">{stat.label}</h6>
                <small className="text-muted">{stat.sub}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Recovery Process */}
        <section className="mb-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Recovery Process</h2>
            <p className="text-muted">A systematic approach to maximize your chances of recovering lost funds</p>
          </div>

          <div className="row g-4">
            {[
              { step: "Step 1", title: "Initial Assessment", desc: "Submit your case details and our experts will review the viability of recovery.", icon: <ClipboardCheck /> },
              { step: "Step 2", title: "Investigation", desc: "We conduct a thorough investigation, gathering evidence and tracing funds.", icon: <Search /> },
              { step: "Step 3", title: "Legal Action", desc: "Our team works with legal authorities and financial institutions to recover funds.", icon: <Gavel /> },
              { step: "Step 4", title: "Fund Recovery", desc: "Successful cases result in fund recovery and return to victims.", icon: <HandCoins /> }
            ].map((item, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card h-100 border-0 shadow-sm text-center p-3 card-hover">
                  <div className="card-body">
                    <div className="bg-primary bg-opacity-10 text-primary d-inline-flex p-3 rounded-circle mb-3">
                      {React.cloneElement(item.icon, { size: 28 })}
                    </div>
                    <h6 className="text-uppercase text-primary fw-bold small mb-2">{item.step}</h6>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Refined Disclaimer/Warning */}
        <div className="custom-risk-alert mb-5">
          <div className="d-flex align-items-start mb-3">
            <ShieldAlert className="text-danger me-3 flex-shrink-0" size={24} />
            <div>
              <h6 className="fw-bold text-danger small mb-1">Important Disclaimer:</h6>
              <p className="mb-0 text-muted small">
                While our team employs proven strategies and has a strong success record, we cannot guarantee fund recovery in all cases. 
                Success depends on various factors including the nature of the scam, available evidence, cooperation from authorities, and jurisdictional issues.
              </p>
            </div>
          </div>
          <div className="ps-5">
             <p className="mb-0 text-muted small border-start ps-3" style={{ borderColor: 'rgba(0,0,0,0.1) !important' }}>
              Recovery timelines vary significantly. Some cases may be resolved in weeks, while others can take months or longer. 
              Our team will provide realistic expectations based on your specific situation.
            </p>
          </div>
        </div>

        {/* Types of Scams handled */}
        <section className="mb-5 py-5 bg-white rounded shadow-sm px-4">
          <h2 className="text-center fw-bold mb-5">Types of Scams We Handle</h2>
          <div className="row g-4">
            {[
              { icon: <TrendingDown />, title: "Investment/Ponzi Scheme" },
              { icon: <Bitcoin />, title: "Cryptocurrency Scam" },
              { icon: <HeartCrack />, title: "Romance Scam" },
              { icon: <Globe />, title: "Forex/Binary Fraud" },
              { icon: <UserX />, title: "Phishing/Identity Theft" },
              { icon: <MailWarning />, title: "Wire Transfer Fraud" },
              { icon: <FileWarning />, title: "Advance Fee Fraud" },
              { icon: <MoreHorizontal />, title: "Others" }
            ].map((scam, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="d-flex align-items-center p-3 border rounded scam-item-hover transition-all">
                  <div className="text-primary me-3">{React.cloneElement(scam.icon, { size: 20 })}</div>
                  <h6 className="mb-0 fw-semibold" style={{ fontSize: '0.9rem' }}>{scam.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </section>

   
        <section className="mx-auto mt-5" style={{ maxWidth: '850px' }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Submit a Recovery Claim</h2>
            <p className="text-muted">Provide details about your case for a free initial assessment</p>
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
                <label className="custom-label">Type of Scam</label>
                <select className="form-select form-select-lg custom-input" defaultValue="">
                  <option value="" disabled className="d-none">Select scam type</option>
                  <option>Investment/Ponzi Scheme</option>
                  <option>Cryptocurrency Scam</option>
                  <option>Romance Scam</option>
                  <option>Forex/Binary Options Fraud</option>
                  <option>Phishing/Identity Theft</option>
                  <option>Wire Transfer Fraud</option>
                  <option>Advanced Fee Fraud</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="custom-label">Approximate Amount Lost</label>
                <select className="form-select form-select-lg custom-input" defaultValue="">
                  <option value="" disabled className="d-none">Select amount range</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000+</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="custom-label">Date of incident</label>
                <input type="date" className="form-control form-control-lg custom-input" required />
              </div>
              
              <div className="col-md-12">
                <label className="custom-label">Detailed Description of the Scam</label>
                <textarea 
                  className="form-control custom-input" 
                  rows="4" 
                  placeholder="Please provide as much detail as possible: how you were contacted, what promises were made, payment methods used, names/websites involved, etc."
                ></textarea>
              </div>

              <div className="col-12">
                <div className="consent-container d-flex align-items-center rounded">
                  <input type="checkbox" className="form-check-input flex-shrink-0" required id="evidence" />
                  <label className="form-check-label small text-muted ms-3 mb-0" htmlFor="evidence">
                    I have documentation/evidence (transaction records, emails, screenshots, etc.)
                  </label>
                </div>
              </div>

              <div className="col-12">
                <div className="consent-container d-flex align-items-center rounded">
                  <input type="checkbox" className="form-check-input flex-shrink-0" required id="consent" />
                  <label className="form-check-label small text-muted ms-3 mb-0" htmlFor="consent">
                    I understand that FinanceHub cannot guarantee fund recovery and that the investigation process may vary in duration. I agree to provide all necessary documentation and cooperate with the recovery team. 
                  </label>
                </div>
              </div>

              <div className="col-4 mt-4">
                <button type="submit" className="btn btn-primary btn-lg w-100 py-3 fw-bold rounded shadow-sm d-flex align-items-center justify-content-center gap-2">
                  Submit Claim
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <Footer />

      <style>{`
        /* Refined Risk Alert - Matches the thin aesthetic */
        .custom-risk-alert {
          background-color: rgba(220, 53, 69, 0.03); 
          border: 1px solid rgba(220, 53, 69, 0.2); 
          padding: 1.5rem;
          border-radius: 8px;
        }

        /* Tiny lowercase labels */
        .custom-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: lowercase;
          color: #888;
          margin-bottom: 0.35rem;
          padding-left: 2px;
          letter-spacing: 0.5px;
        }

        /* Inputs and Textareas */
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
        }

        /* Consent containers with yellow warning bg */
        .consent-container {
          background-color: rgba(255, 193, 7, 0.08);
          border: 1px solid rgba(255, 193, 7, 0.15);
          padding: 1rem;
          transition: background-color 0.2s ease;
        }

        /* Hover effects for interactive elements */
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
        }

        .form-container-hover {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
        }
        .form-container-hover:hover {
          border-color: #0d6efd !important;
          box-shadow: 0 0.5rem 2rem rgba(13, 110, 253, 0.06) !important;
        }

        .scam-item-hover:hover {
          border-color: #0d6efd !important;
          background-color: rgba(13, 110, 253, 0.02);
          cursor: default;
        }

        .transition-all {
          transition: all 0.2s ease;
        }

        .form-check-input {
          cursor: pointer;
          width: 1.1rem;
          height: 1.1rem;
        }
      `}</style>
    </div>
   </>
  );
};

export default Recovery;