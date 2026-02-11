import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { 
  Shield, 
  TrendingUp, 
  Briefcase, 
  Landmark, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';

const Home = () => {
  return (
    <>
     <Navbar />
     <link
       rel="stylesheet"
       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
     />

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, #1d4ed8 0%, #312e81 100%);
          padding: 100px 0 140px 0;
        }
        .risk-alert {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
        .stat-card {
          border-radius: 20px;
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .service-card {
          border-radius: 24px;
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          height: 100%;
          padding: 32px;
        }
        .service-card:hover {
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .service-card .icon-wrapper {
          transition: transform 0.3s ease;
        }
        .service-card:hover .icon-wrapper {
          transform: scale(1.1);
        }
        .disclosure-card {
          border-radius: 40px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
      `}</style>
      

      <div className="bg-light min-vh-100 font-sans text-dark">
        <section className="hero-section text-white text-center px-3">
          <div className="container">
            <h1 className="display-3 fw-bold mb-4">
              Your Gateway to Financial Freedom
            </h1>
            <h4 className="lead fs-4 mb-5 mx-auto opacity-75" style={{ maxWidth: '670px' }}>
              Professional investment services, fund recovery, loans, and career opportunities all on one trusted platform.
            </h4>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
              <button className="btn btn-light text-primary fw-bold py-3 px-5 rounded-pill shadow-lg border-0 transition">
                Start Investing
              </button>
              <button className="btn btn-outline-light fw-bold py-3 px-5 rounded-pill transition">
                Contact Us
              </button>
            </div>
            
            <div className="risk-alert mx-auto p-3" style={{ maxWidth: '768px' }}>
              <div className="small mb-0 d-flex align-items-center justify-content-center gap-2">
                <AlertCircle size={18} className="text-warning flex-shrink-0" />
                <span className="fw-bold text-uppercase text-warning" style={{ letterSpacing: '1px' }}>Risk Warning:</span> 
                Investment involves risk. The value of investments can go down as well as up.
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4" style={{ marginTop: '-50px', marginBottom: '80px' }}>
          <div className="row g-3 g-md-4">
            {[
              { label: "Active Users", val: "50k+" },
              { label: "Years Experience", val: "15+" },
              { label: "Secure Platform", val: "100%" },
              { label: "Assets Managed", val: "$2B+" }
            ].map((stat, i) => (
              <div key={i} className="col-6 col-lg-3">
                <div className="stat-card bg-white p-4 text-center">
                  <div className="h2 fw-bold text-primary mb-1">{stat.val}</div>
                  <div className="text-muted fw-medium mb-0">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Comprehensive Financial Services</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>Everything you need to manage, grow, and protect your financial future in one place.</p>
          </div>

          <div className="row g-4">
            {[
              { icon: <TrendingUp size={32} />, title: "Investments", desc: "Access stock markets, crypto, and forex with professional-grade trading tools." },
              { icon: <Shield size={32} />, title: "Fund Recovery", desc: "Expert assistance in recovering funds from fraudulent schemes and lost wallets." },
              { icon: <Landmark size={32} />, title: "Loan Services", desc: "Flexible financing options tailored for both personal and business growth." },
              { icon: <Briefcase size={32} />, title: "Careers", desc: "Join our global team and build a rewarding career in the evolving financial sector." }
            ].map((s, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="service-card bg-white">
                  <div className="text-primary mb-4 icon-wrapper">
                    {s.icon}
                  </div>
                  <h3 className="h5 fw-bold mb-3">{s.title}</h3>
                  <p className="text-muted mb-4 small lh-base">{s.desc}</p>
                  <a href="#" className="text-primary fw-bold text-decoration-none small d-flex align-items-center">
                    Learn More <span className="ms-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-5 px-3 border-top">
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <h2 className="display-6 fw-bold mb-4">Why Trust FinanceHub?</h2>
                <p className="text-muted mb-5">We combine industry-leading expertise with cutting-edge security to ensure your assets and information remain protected at all times.</p>
                <div className="d-flex flex-column gap-3">
                  {[
                    "Regulated financial service providers",
                    "Customized investment strategies",
                    "Expert recovery specialists",
                    "Competitive loan interest rates",
                    "24/7 dedicated client support"
                  ].map((item, i) => (
                    <div key={i} className="d-flex align-items-center gap-3">
                      <div className="bg-primary bg-opacity-10 p-1 rounded-circle text-primary d-flex">
                        <CheckCircle size={18} />
                      </div>
                      <span className="fw-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="disclosure-card bg-white p-4 p-md-5">
                  <div className="bg-light rounded-circle position-absolute top-0 end-0 m-n4" style={{ width: '128px', height: '128px', opacity: 0.5 }}></div>
                  <h3 className="h4 fw-bold mb-5">Service Disclosures</h3>
                  
                  <div className="d-flex flex-column gap-4 position-relative">
                    {[
                      { label: "Investment Risk", desc: "All investments involve risk. Past performance is not indicative of future results." },
                      { label: "Recovery Services", desc: "While we utilize expert strategies, success cannot be guaranteed in every recovery case." },
                      { label: "Loan Terms", desc: "All applications are subject to credit approval based on individual circumstances." }
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="fw-bold text-primary text-uppercase small ls-wider mb-2" style={{ letterSpacing: '2px' }}>{item.label}</div>
                        <p className="text-muted small mb-0">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;