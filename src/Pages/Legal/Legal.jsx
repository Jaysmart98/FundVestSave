import React from 'react';
import { ShieldAlert, FileText, Lock, Scale, AlertTriangle, Mail, CheckCircle2 } from 'lucide-react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

const Legal = () => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
    <Navbar />
     <div className="bg-light min-vh-100 pb-5">
      {/* Hero Section */}
      <header className="bg-primary text-light border-bottom py-5 mb-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Legal & Risk Disclosure</h1>
          <p className="lead text-light mx-auto" style={{ maxWidth: '700px' }}>
            Important information about our services, terms, and risk disclosures.
          </p>
        </div>
      </header>

      <div className="container">
        {/* Quick Links Grid */}
        <section className="row g-4 mb-5">
          {[
            { title: 'Risk Disclosure', icon: <ShieldAlert className="text-danger" />, color: 'border-danger' },
            { title: 'Terms of Service', icon: <FileText className="text-primary" />, color: 'border-primary' },
            { title: 'Privacy Policy', icon: <Lock className="text-success" />, color: 'border-success' },
            { title: 'Compliance', icon: <Scale className="text-info" />, color: 'border-info' },
          ].map((item, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <div className={`card h-100 text-center shadow-sm border-0 border-top border-4 ${item.color}`}>
                <div className="card-body">
                  <div className="mb-2">{item.icon}</div>
                  <h6 className="card-title fw-bold mb-0">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Detailed Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            {/* Risk Disclosure */}
            <div className="card shadow-sm mb-5 border-0">
              <div className="card-header bg-white py-3">
                <h2 className="h4 mb-0 d-flex align-items-center fw-bold">
                  <ShieldAlert className="me-2 text-danger" /> Risk Disclosure
                </h2>
              </div>
              <div className="card-body p-4">
                <div className="alert alert-warning border-0 shadow-sm d-flex align-items-start mb-4">
                  <AlertTriangle className="me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="alert-heading fw-bold">Investment Risks</h5>
                    <p className="mb-0">All investments involve risk and may result in partial or complete loss of capital. Past performance is not indicative of future results.</p>
                  </div>
                </div>

                <div className="row g-4 mb-4">
                  {[
                    { t: 'Market Risk', d: 'Values fluctuate based on market conditions and geopolitical events.' },
                    { t: 'Volatility Risk', d: 'Crypto and forex markets can experience significant price swings.' },
                    { t: 'Liquidity Risk', d: 'Some investments may be difficult to sell quickly.' },
                    { t: 'Credit Risk', d: 'Issuers of securities may default on their obligations.' },
                  ].map((risk, i) => (
                    <div className="col-md-6" key={i}>
                      <div className="d-flex align-items-start">
                        <CheckCircle2 className="text-success me-2 flex-shrink-0" size={18} />
                        <div>
                          <p className="mb-0 fw-bold">{risk.t}</p>
                          <small className="text-muted">{risk.d}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="h5 fw-bold border-bottom pb-2 mt-4">Recovery Service Disclaimer</h3>
                <p className="text-secondary">
                  While FinanceHub employs expert strategies, <span className="text-dark fw-bold">we cannot guarantee successful fund recovery in all cases.</span>
                </p>
                <ul className="text-muted small">
                  <li>Success depends on fraud type, evidence, and jurisdictional issues.</li>
                  <li>Processes can be lengthy and may involve legal proceedings.</li>
                </ul>

                <div className="bg-light p-3 rounded mt-4">
                  <h3 className="h5 fw-bold text-danger">Loan Risks</h3>
                  <p className="small mb-2">Failure to repay loans as agreed can result in:</p>
                  <ul className="small text-muted mb-0">
                    <li>Damage to your credit score and history.</li>
                    <li>Late payment fees and increased interest rates.</li>
                    <li>Potential asset seizure for secured loans.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="card shadow-sm mb-5 border-0">
              <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h2 className="h4 mb-0 d-flex align-items-center fw-bold">
                  <FileText className="me-2 text-primary" /> Terms of Service
                </h2>
                <span className="badge bg-light text-dark border">Updated: {today}</span>
              </div>
              <div className="card-body p-4">
                <div className="mb-4">
                  <h5 className="fw-bold">1. Acceptance of Terms</h5>
                  <p className="text-muted">By accessing FinanceHub, you agree to be bound by these Terms. If you do not agree, you are prohibited from using our services.</p>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold">2. User Responsibilities</h5>
                  <ul className="text-muted">
                    <li>Provide accurate and complete information.</li>
                    <li>Maintain confidentiality of account credentials.</li>
                    <li>Comply with all applicable laws and regulations.</li>
                  </ul>
                </div>
                <div className="p-3 bg-light rounded text-center">
                  <p className="mb-0 small fw-bold">Our liability is limited to the amount of fees paid for the specific service.</p>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="card shadow-sm mb-5 border-0">
              <div className="card-header bg-dark text-white py-3">
                <h2 className="h4 mb-0 d-flex align-items-center fw-bold">
                  <Lock className="me-2 text-success" /> Privacy Policy
                </h2>
              </div>
              <div className="card-body p-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold">Information Collection</h5>
                    <ul className="text-muted small">
                      <li><strong>Personal:</strong> Name, address, email, phone.</li>
                      <li><strong>Financial:</strong> Income, credit history.</li>
                      <li><strong>Technical:</strong> IP address, device usage.</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold">Data Protection</h5>
                    <p className="text-muted small">We use industry-standard encryption and regular audits. However, no method of transmission is 100% secure.</p>
                    <h5 className="fw-bold">Your Rights</h5>
                    <p className="text-muted small mb-0">You may request access, correction, or deletion of your data at any time.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance */}
            <div className="card shadow-sm mb-5 border-0 bg-info bg-opacity-10">
              <div className="card-body p-4">
                <h2 className="h4 mb-4 fw-bold d-flex align-items-center">
                  <Scale className="me-2" /> Regulatory Compliance
                </h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold">Licensing & Registration</h6>
                    <p className="text-muted small">FundVestSave is regulated by relevant financial authorities. we maintain all necessary AML and KYC registrations.</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold">Investor Protection</h6>
                    <p className="text-muted small">Client funds are held in segregated accounts with reputable institutions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="text-center bg-white p-5 rounded shadow-sm border">
              <Mail className="text-primary mb-3" size={40} />
              <h3 className="fw-bold">Questions About Legal Terms?</h3>
              <p className="text-muted mb-4">If you have questions about our privacy policy or compliance procedures, please contact us.</p>
              <button className="btn btn-primary btn-lg px-5 fw-bold">
                Contact Legal Department
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Legal;