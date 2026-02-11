import React, { useEffect } from 'react';
import { 
  HelpCircle, 
  Search, 
  Mail, 
  ChevronRight, 
  Shield, 
  TrendingUp, 
  LifeBuoy, 
  Briefcase, 
  DollarSign 
} from 'lucide-react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

const FAQ = () => {
  useEffect(() => {
    const bootstrapCss = document.createElement('link');
    bootstrapCss.rel = 'stylesheet';
    bootstrapCss.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCss);

    const bootstrapJs = document.createElement('script');
    bootstrapJs.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    document.head.appendChild(bootstrapJs);

    return () => {
      if (document.head.contains(bootstrapCss)) document.head.removeChild(bootstrapCss);
      if (document.head.contains(bootstrapJs)) document.head.removeChild(bootstrapJs);
    };
  }, []);

  const faqData = [
    {
      category: "General",
      icon: <HelpCircle className="text-primary" size={20} />,
      items: [
        { q: "What services does FundVestSave offer?", a: "FinanceHub provides comprehensive financial services including investment opportunities (stocks, crypto, forex), scam and fund recovery assistance, various loan products, and career opportunities within the financial sector." },
        { q: "Is FundVestSave Regulated?", a: "Yes, FundVestSave is licensed and regulated by relevant financial authorities in the jurisdictions where we operate. We maintain full compliance with all applicable securities laws and financial regulations." },
        { q: "How do I get started?", a: "You can get started by contacting us through our Contact page or by applying directly for the service you're interested in. Our team will guide you through the onboarding process." }
      ]
    },
    {
      category: "Investments",
      icon: <TrendingUp className="text-success" size={20} />,
      items: [
        { q: "What investment options are available?", a: "We offer access to stocks, cryptocurrencies, and forex trading. Each investment option comes with professional guidance and analytical tools to help you make informed decisions." },
        { q: "What are the risks involved in investing?", a: "All investments carry risk, including the potential loss of principal. Market values can fluctuate, and past performance does not guarantee future results. We recommend reviewing our Risk Disclosure document and consulting with our advisors before investing." },
        { q: "What is the minimum investment amount?", a: "Minimum investment amounts vary by product type. Please contact our investment team for specific details about minimums for each investment option." },
        { q: "Can I withdraw my funds at any time?", a: "Withdrawal terms depend on the specific investment product. Some investments have lock-in periods or early withdrawal penalties. Your advisor will explain all terms before you invest." }
      ]
    },
    {
      category: "Scam Recovery",
      icon: <Shield className="text-danger" size={20} />,
      items: [
        { q: "How does the fund recovery process work?", a: "Our expert team investigates your case, gathers evidence, and works with legal and financial authorities to attempt recovery of your funds. The process timeline varies depending on case complexity." },
        { q: "Can you guarantee fund recovery?", a: "No, we cannot guarantee recovery in all cases. Success depends on multiple factors including the nature of the scam, available evidence, and jurisdiction. However, we employ proven strategies and have a successful track record." },
        { q: "What information do I need to provide?", a: "You'll need to provide transaction records, communication history with the fraudulent party, payment proofs, and any other relevant documentation related to your case." },
        { q: "How much does the recovery service cost?", a: "Our fees vary based on case complexity. We typically work on a contingency basis or charge an initial consultation fee. Contact us for a free case evaluation." }
      ]
    },
    {
      category: "Loans",
      icon: <DollarSign className="text-warning" size={20} />,
      items: [
        { q: "What types of loans do you offer?", a: "We offer personal loans, business loans, secured loans, and lines of credit with flexible terms tailored to your needs." },
        { q: "What are the eligibility criteria for a loan?", a: "Eligibility depends on factors including credit score, income verification, employment status, and debt-to-income ratio. Each application is evaluated individually." },
        { q: "How long does the approval process take?", a: "Application review typically takes 1-3 business days. Once approved, funds can be disbursed within 5-7 business days depending on the loan type." },
        { q: "Can I repay my loan early?", a: "Yes, most of our loan products allow early repayment. Some loans may have prepayment penalties - your loan agreement will specify all terms." }
      ]
    },
    {
      category: "Careers",
      icon: <Briefcase className="text-info" size={20} />,
      items: [
        { q: "What career opportunities are available?", a: "We regularly hire for roles in financial advisory, client services, operations, technology, compliance, and management. Check our Careers page for current openings." },
        { q: "What qualifications do I need?", a: "Requirements vary by position. Financial advisory roles typically require relevant certifications (Series 7, CFP, etc.), while other roles may require specific degrees or experience." },
        { q: "Do you offer training and development?", a: "Yes, we provide comprehensive training programs, professional development opportunities, and support for industry certifications for all team members." }
      ]
    }
  ];

  return (
    <>
    <Navbar />
    <div className="bg-light min-vh-100 pb-5">
      <div className="bg-primary text-white py-5 mb-5 shadow-sm">
        <div className="container py-4 text-center">
          <h1 className="display-4 fw-bold mb-3">Frequently Asked Questions</h1>
          <p className="lead opacity-30 mx-auto" style={{ maxWidth: '600px' }}>
            Everything you need to know about our services. Can't find the answer you're looking for? Reach out to our support team.
          </p>
          
          <div className="mt-4 position-relative mx-auto" style={{ maxWidth: '500px' }}>
            
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {/* Sidebar Navigation */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="sticky-top" style={{ top: '2rem' }}>
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <h6 className="text-uppercase text-muted fw-bold xsmall mb-4">Categories</h6>
                  <div className="nav flex-column nav-pills">
                    {faqData.map((cat, i) => (
                      <a key={i} href={`#cat-${i}`} className="nav-link d-flex align-items-center gap-3 py-3 text-dark border-bottom border-light">
                        {cat.icon}
                        <span className="fw-medium">{cat.category}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordions */}
          <div className="col-lg-9">
            {faqData.map((section, sectionIdx) => (
              <div key={sectionIdx} id={`cat-${sectionIdx}`} className="mb-5">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="p-2 rounded bg-white shadow-sm">
                    {section.icon}
                  </div>
                  <h2 className="h4 fw-bold mb-0">{section.category}</h2>
                </div>

                <div className="accordion accordion-flush shadow-sm rounded-4 overflow-hidden border-0 bg-white" id={`accordion-${sectionIdx}`}>
                  {section.items.map((item, itemIdx) => (
                    <div className="accordion-item border-bottom border-light" key={itemIdx}>
                      <h3 className="accordion-header">
                        <button 
                          className="accordion-button collapsed py-4 px-4 fw-semibold text-dark fs-5" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#collapse-${sectionIdx}-${itemIdx}`}
                        >
                          {item.q}
                        </button>
                      </h3>
                      <div 
                        id={`collapse-${sectionIdx}-${itemIdx}`} 
                        className="accordion-collapse collapse" 
                        data-bs-parent={`#accordion-${sectionIdx}`}
                      >
                        <div className="accordion-body px-4 pb-4 pt-0 text-secondary lh-lg">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Support Call to Action */}
            <div className="card border-0 shadow-lg rounded-4 bg-primary text-white overflow-hidden mt-5">
              <div className="card-body p-5 position-relative">
                <div className="col">
                  <div className="col-md-12 position-relative z-1">
                    <h2 className="fw-bold mb-3">Still Have Questions?</h2>
                    <p className="opacity-40 fs-5 mb-0">
                      If you couldn't find the answer you're looking for, our support team is available 24/7 to help you with any inquiries.
                    </p>
                  </div>
                  <br />
                  <div className="col-md-4 text-md-end mt-4 mt-md-0 position-relative z-1">
                    <button className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill text-primary d-inline-flex align-items-center gap-2">
                      <Mail size={20} />
                      Contact Support
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> <br />
      <Footer />

      <style>{`
        body {
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
        .accordion-button:not(.collapsed) {
          background-color: transparent;
          color: #0d6efd;
          box-shadow: none;
        }
        .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(0,0,0,.125);
        }
        .accordion-button::after {
          background-size: 1rem;
        }
        .xsmall {
          font-size: 0.7rem;
          letter-spacing: 1.5px;
        }
        .nav-link {
            transition: all 0.2s ease;
        }
        .nav-link:hover {
            background-color: #f8fafc;
            transform: translateX(5px);
        }
        .card {
            border: 1px solid rgba(0,0,0,.05);
        }
        @media (max-width: 991px) {
            .display-4 {
                font-size: 2.5rem;
            }
        }
      `}</style>
    </div>
    </>
  );
};

export default FAQ;