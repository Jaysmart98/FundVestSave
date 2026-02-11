import React, { useEffect } from 'react';
import { 
  ShieldAlert, 
  Info, 
  CheckCircle2, 
  ChevronRight,
  User,
  Lock,
  Briefcase,
  CreditCard,
  Clock,
  Percent,
  Calendar,
  DollarSign
} from 'lucide-react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

const Loan = () => {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontLink);

    // Injecting Bootstrap 5
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);

    return () => {
      if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
      if (document.head.contains(bootstrapLink)) document.head.removeChild(bootstrapLink);
    };
  }, []);

  const stats = [
    { val: "24hrs", label: "Fast Approval", icon: <Clock size={20} /> },
    { val: "4.99%", label: "Rates From", icon: <Percent size={20} /> },
    { val: "60 Months", label: "Max Term", icon: <Calendar size={20} /> },
    { val: "$500K", label: "Max Amount", icon: <DollarSign size={20} /> }
  ];

  const products = [
    {
      title: "Personal Loans",
      icon: <User size={32} className="text-primary" />,
      desc: "Flexible unsecured loans for any personal need from $1,000 to $50,000.",
      rate: "6.99% - 24.99% APR",
      features: ["Fast Approval", "Flexible terms 12-60 months", "Competitive rates from 6.99% APR", "No prepayment penalty"]
    },
    {
      title: "Secure Loans",
      icon: <Lock size={32} className="text-primary" />,
      desc: "Lower rates by securing your loan with collateral such as property or vehicles.",
      rate: "4.99% - 12.99% APR",
      features: ["Lower interest rates", "Higher loan amounts", "Extended repayment terms", "Build credit history"]
    },
    {
      title: "Business Loans",
      icon: <Briefcase size={32} className="text-primary" />,
      desc: "Financing solutions for small to medium businesses from $5,000 to $500,000.",
      rate: "5.99% - 18.99% APR",
      features: ["Working Capital", "Equipment financing", "Business expansion", "Flexible repayment options"]
    },
    {
      title: "Line of Credit",
      icon: <CreditCard size={32} className="text-primary" />,
      desc: "Revolving credit line for ongoing financial flexibility and emergencies.",
      rate: "8.99% - 19.99% APR",
      features: ["Pay only for what you use", "Reusable credit line", "Quick access to funds", "No annual fee"]
    }
  ];

  return (
   <>
    <Navbar />
      <div className="loan-page bg-light min-vh-100 pb-5">
      <section className="bg-primary text-white py-5 mb-5 position-relative overflow-hidden text-center">
        <div className="container py-4">
          <h1 className="fw-bold display-5 mb-3">Loan Services</h1>
          <p className="lead opacity-75 mx-auto fs-5 fw-light" style={{ maxWidth: '650px' }}>
            Flexible financing solutions with competitive rates and personalized service to meet your needs.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="row g-3 mb-5 mt-n5">
          {stats.map((stat, i) => (
            <div key={i} className="col-6 col-lg-3">
              <div className="bg-white p-4 rounded-4 shadow-sm border-0 h-100 text-center transition-hover">
                <div className="d-inline-flex p-2 bg-light text-primary rounded-3 mb-3">
                  {stat.icon}
                </div>
                <h2 className="fw-bold h4 mb-1 text-dark">{stat.val}</h2>
                <p className="small text-muted mb-0 text-uppercase fw-semibold tracking-wider" style={{ fontSize: '0.65rem' }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loan Products Section */}
        <section className="mb-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3 mb-2">Our Loan Products</h2>
            <p className="text-muted">Choose from a range of products designed to fit your financial situation</p>
          </div>

          <div className="row g-4 mb-5">
            {products.map((product, idx) => (
              <div key={idx} className="col-md-6">
                <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden product-card text-center">
                  <div className="card-body p-4 p-lg-5">
                    {/* Icon above Title */}
                    <div className="mb-3 text-primary">
                      {product.icon}
                    </div>
                    <h3 className="h4 fw-bold mb-3">{product.title}</h3>
                    <p className="text-muted small mb-4 px-lg-3">{product.desc}</p>
                    
                    <div className="mb-4 text-start bg-light p-3 rounded-3">
                      <h6 className="fw-bold small text-dark mb-3">Key Features</h6>
                      <ul className="list-unstyled mb-0">
                        {product.features.map((feature, fidx) => (
                          <li key={fidx} className="d-flex align-items-center gap-2 mb-2 small text-secondary">
                            <CheckCircle2 size={14} className="text-success flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-top">
                      <p className="text-muted mb-1 fw-semibold tracking-tighter" style={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>Interest Rate</p>
                      <h2 className="fw-bold text-primary mb-0 h4">{product.rate}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stacked Notices Section */}
        <div className="mx-auto mb-5" style={{ maxWidth: '850px' }}>
          <div className="d-flex flex-column gap-3">
            <div className="p-4 bg-white rounded-4 shadow-sm border-start border-warning border-4">
              <div className="d-flex gap-3 align-items-start">
                <ShieldAlert className="text-warning flex-shrink-0 mt-1" size={24} />
                <div>
                  <h5 className="fw-bold h6 mb-2">Important Lending Notice:</h5>
                  <p className="text-muted mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                    All loan applications are subject to credit approval. Interest rates and terms vary based on creditworthiness, loan amount, and other factors. Failure to make payments as agreed may result in late fees, collection activity, and negative impact to your credit score.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-4 shadow-sm border-start border-primary border-4">
              <div className="d-flex gap-3 align-items-start">
                <Info className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h5 className="fw-bold h6 mb-2">Responsible Borrowing:</h5>
                  <p className="text-muted mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                    Only borrow what you can afford to repay. Consider your current financial situation and future obligations before applying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <section className="mx-auto" style={{ maxWidth: '850px' }}>
          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border-0">
            <div className="text-center mb-5">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 small fw-bold">Online Application</span>
              <h2 className="fw-bold h3">Apply for a Loan</h2>
              <p className="text-muted small">Complete the form below and get a decision within 24 hours</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="custom-label">Full Name</label>
                  <input type="text" className="form-control custom-input" placeholder="Enter full name" required />
                </div>
                <div className="col-md-6">
                  <label className="custom-label">Email Address</label>
                  <input type="email" className="form-control custom-input" placeholder="Jaysmart@gmail.com" required />
                </div>
                <div className="col-md-6">
                  <label className="custom-label">Phone Number</label>
                  <input type="tel" className="form-control custom-input" placeholder="+234 704 403 2713" required />
                </div>
                <div className="col-md-6">
                  <label className="custom-label">Loan Type</label>
                  <select className="form-select custom-input" defaultValue="">
                    <option value="" disabled>Select loan type</option>
                    <option>Personal Loan</option>
                    <option>Secured Loan</option>
                    <option>Business Loan</option>
                    <option>Line of Credit</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="custom-label">Loan Amount</label>
                  <select className="form-select custom-input" defaultValue="">
                    <option value="" disabled>Select amount</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="custom-label">Loan Purpose</label>
                  <select className="form-select custom-input" defaultValue="">
                    <option value="" disabled>Select purpose</option>
                    <option>Debt Consolidation</option>
                    <option>Home Improvement</option>
                    <option>Medical Expenses</option>
                    <option>Education</option>
                    <option>Business Expenses</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="custom-label">Employment Status</label>
                  <select className="form-select custom-input" defaultValue="">
                    <option value="" disabled>Select status</option>
                    <option>Full-Time Employed</option>
                    <option>Part-Time Employed</option>
                    <option>Self-Employed</option>
                    <option>Retired</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="custom-label">Monthly Income</label>
                  <select className="form-select custom-input" defaultValue="">
                    <option value="" disabled>Select income range</option>
                    <option>Less than $2,000</option>
                    <option>$2,000 - $4,000</option>
                    <option>$4,000 - $6,000</option>
                    <option>$6,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="custom-label">Estimated Credit Score</label>
                  <select className="form-select custom-input" defaultValue="">
                    <option value="" disabled>Select credit score range</option>
                    <option>Excellent (+750)</option>
                    <option>Good (700-749)</option>
                    <option>Fair (650-699)</option>
                    <option>Poor (below 650)</option>
                    <option>I don't know</option>
                  </select>
                </div>

                <div className="col-12 mt-4">
                  <div className="p-3 bg-light rounded-3 d-flex align-items-start gap-3 border border-light">
                    <input type="checkbox" className="form-check-input flex-shrink-0 mt-1" required id="consent" />
                    <label className="small text-muted mb-0" htmlFor="consent" style={{ lineHeight: '1.4' }}>
                      I authorize FinanceHub to verify my information and check my credit report. I understand that loan approval is subject to credit review. I have read and agree to the <a href="#" className="text-primary text-decoration-none fw-semibold">Terms of Service</a>.
                    </label>
                  </div>
                </div>

                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary btn-lg w-100 py-3 fw-bold rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2">
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <style>{`
        .loan-page {
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.01em;
        }
        .hero-bg {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
        }
        .text-primary {
          color: #2563eb !important;
        }
        .bg-primary {
          background-color: #2563eb !important;
        }
        .btn-primary {
          background-color: #2563eb;
          border-color: #2563eb;
        }
        .btn-primary:hover {
          background-color: #1d4ed8;
          border-color: #1d4ed8;
        }
        .custom-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
          margin-bottom: 0.5rem;
          display: block;
        }
        .custom-input {
          font-size: 0.9rem;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background-color: #f8fafc;
          transition: all 0.2s ease;
        }
        .custom-input:focus {
          background-color: #fff;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
          border-color: #2563eb;
        }
        .product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
        }
        .tracking-wider {
          letter-spacing: 0.05em;
        }
        .transition-hover {
          transition: all 0.2s ease;
        }
        .transition-hover:hover {
          background-color: #f1f5f9 !important;
        }
        .mt-n5 {
          margin-top: -3rem !important;
        }
      `}</style>
    </div>
    <Footer />
   </>
  );
};

export default Loan;