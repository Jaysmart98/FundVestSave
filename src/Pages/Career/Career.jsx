import React, { useEffect } from 'react';
import { 
  Users, 
  MapPin, 
  Clock, 
  Banknote, 
  HeartPulse, 
  TrendingUp, 
  Coffee,
  ChevronRight,
  Code2,
  Scale,
  ShieldCheck,
  UserCheck,
  Award,
  DollarSign
} from 'lucide-react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

const Career = () => {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontLink);

    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);

    return () => {
      if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
      if (document.head.contains(bootstrapLink)) document.head.removeChild(bootstrapLink);
    };
  }, []);

  const benefits = [
    { title: "Competitive Salary", desc: "Above market compensation with performance bonuses.", icon: <DollarSign size={32} /> },
    { title: "Health Benefits", desc: "Comprehensive medical, dental, and vision coverage.", icon: <HeartPulse size={32} /> },
    { title: "Career Growth", desc: "Personal development and advancement opportunities.", icon: <TrendingUp size={32} /> },
    { title: "Great Culture", desc: "Collaborative environment with work-life balance.", icon: <Users size={32} /> }
  ];

  const positions = [
    {
      title: "Financial Advisor",
      dept: "Investment",
      location: "New York, NY",
      type: "Full-Time",
      icon: <Award size={32} />,
      desc: "Provide personalized investment advice and portfolio management services to clients.",
      requirements: ["Series 7 & 63 licenses", "3+ years experience", "Strong communication skills"]
    },
    {
      title: "Fund Recovery Specialist",
      dept: "Recovery Services",
      location: "Remote",
      type: "Full-Time",
      icon: <ShieldCheck size={32} />,
      desc: "Investigate fraud cases and work with authorities to recover client funds.",
      requirements: ["Law enforcement or investment background", "Excellent analytical skills", "Attention to detail"]
    },
    {
      title: "Loan Officer",
      dept: "Lending",
      location: "Chicago, IL",
      type: "Full-Time",
      icon: <Banknote size={32} />,
      desc: "Evaluate loan applications, assess creditworthiness, and manage client relationships.",
      requirements: ["NMLS license preferred", "2+ years in lending", "Strong financial analysis skills"]
    },
    {
      title: "Compliance Officer",
      dept: "Legal & Compliance",
      location: "New York, NY",
      type: "Full-Time",
      icon: <Scale size={32} />,
      desc: "Ensure regulatory compliance and policies to meet industry standards.",
      requirements: ["JD or relevant certification", "Knowledge of financial regulations", "5+ years experience"]
    },
    {
      title: "Customer Success Manager",
      dept: "Client Services",
      location: "Remote",
      type: "Full-Time",
      icon: <UserCheck size={32} />,
      desc: "Build strong client relationships and ensure exceptional service delivery.",
      requirements: ["3+ years customer service", "Financial services experience", "Excellent communication"]
    },
    {
      title: "Senior Software Engineer",
      dept: "Technology",
      location: "San Francisco, CA",
      type: "Full-Time",
      icon: <Code2 size={32} />,
      desc: "Build and maintain our trading platform and financial technology infrastructure.",
      requirements: ["5+ years software development experience", "Experience with React/Node.js", "FinTech experience preferred"]
    }
  ];

  return (
    <>
    <Navbar />
        <div className="career-page pb-5 bg-light min-vh-100">
      <section className="bg-primary text-white py-5 mb-5 position-relative overflow-hidden text-center">
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-2">Careers at FundVestSave</h1>
          <h4 className="fw-light opacity-75">Join our team of financial experts and help shape the future of financial services</h4>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-4 text-center">
          <div className="mb-5">
            <h1 className="fw-bold mb-2">Why Work With Us?</h1>
            <h4 className="fw-light text-muted fs-5">We invest in our people and provide an environment where talent thrives</h4>
          </div>
          
          <div className="row g-4 justify-content-center">
            {benefits.map((benefit, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="p-4 rounded-4 h-100 benefit-card">
                  <div className="text-primary mb-3 d-flex justify-content-center">
                    {benefit.icon}
                  </div>
                  <h2 className="h5 fw-bold mb-2">{benefit.title}</h2>
                  <p className="text-muted small mb-0">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h1 className="fw-bold mb-2">Open Positions</h1>
            <h4 className="fw-light text-muted fs-5 mb-0">Find your next career opportunity</h4>
          </div>

          <div className="mx-auto" style={{ maxWidth: '1000px' }}>
            <div className="d-flex flex-column gap-4">
              {positions.map((job, idx) => (
                <div key={idx} className="card border-0 shadow-sm rounded-4 overflow-hidden job-card position-relative">
                  <div className="card-body p-4 p-md-5">
                    {/* Top Right Button */}
                    <div className="position-absolute top-0 end-0 p-4 p-md-5">
                        <button className="btn btn-primary px-4 py-2 fw-semibold rounded-pill">Apply Now</button>
                    </div>

                    <div className="d-flex flex-column align-items-start mb-4">
                      {/* Icon and H1 Inline */}
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="text-primary">
                          {job.icon}
                        </div>
                        <h1 className="h3 fw-bold mb-0">{job.title}</h1>
                      </div>
                      
                      <div className="d-flex flex-wrap gap-4 text-muted small">
                        <div className="d-flex align-items-center gap-2">
                          <Users size={16} className="text-primary" />
                          <p className="mb-0">{job.dept}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <MapPin size={16} className="text-primary" />
                          <p className="mb-0">{job.location}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          <p className="mb-0">{job.type}</p>
                        </div>
                      </div>
                    </div>

                    <h4 className="fs-6 fw-normal text-secondary mb-4 lh-base" style={{ maxWidth: '80%' }}>{job.desc}</h4>
                    
                    <div className="mb-0">
                      <h2 className="h6 fw-bold text-dark mb-3">Requirements:</h2>
                      <ul className="list-unstyled mb-0">
                        {job.requirements.map((req, ridx) => (
                          <li key={ridx} className="d-flex align-items-center gap-2 text-muted small mb-2">
                            <ChevronRight size={14} className="text-primary" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Application */}
            <div className="mt-5 p-5 bg-white rounded-4 border border-dashed text-center shadow-sm">
              <h1 className="h3 fw-bold mb-3">Don't See Your Role?</h1>
              <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '500px' }}>
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold">Submit General Application</button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-5 bg-white border-top">
        <div className="container py-4 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold h1 mb-2">Apply for a Position</h2>
            <p className="text-muted fs-5">Start your journey with FundVestSave today.</p>
          </div>

          <form className="p-4 p-md-5 rounded-4 shadow-sm border bg-white">
            <div className="row g-4">
              <div className="col-md-6">
                <label className="custom-label">Full Name</label>
                <input type="text" className="form-control form-control-lg custom-input" required />
              </div>
              <div className="col-md-6">
                <label className="custom-label">Email Address</label>
                <input type="email" className="form-control form-control-lg custom-input" required />
              </div>
              <div className="col-md-6">
                <label className="custom-label">Phone Number</label>
                <input type="number" className="form-control form-control-lg custom-input" required />
              </div>
              <div className="col-md-6">
                <label className="custom-label">Position Applying For</label>
                <select className="form-select form-select-lg custom-input" defaultValue="">
                  <option value="" disabled className="d-none"></option>
                  <option>Financial Advisor</option>
                  <option>Fund Recovery Specialist</option>
                  <option>Loan Officer</option>
                  <option>Compliance Officer</option>
                  <option>Customer Success Manager</option>
                  <option>Senior Software Engineer</option>
                  <option>General Application</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="custom-label">Years of Experience</label>
                <select className="form-select form-select-lg custom-input" defaultValue="">
                  <option value="" disabled className="d-none"></option>
                  <option>0-2 years</option>
                  <option>2-5 years</option>
                  <option>5-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="custom-label">Highest Education</label>
                <select className="form-select form-select-lg custom-input" defaultValue="">
                  <option value="" disabled className="d-none"></option>
                  <option>High School</option>
                  <option>Associate Degree</option>
                  <option>Bachelor's Degree</option>
                  <option>Masters</option>
                  <option>PhD/Doctorate</option>
                </select>
              </div>

              <div className="col-12">
                <label className="custom-label">Resume/CV (Link or Text)</label>
                <textarea 
                  className="form-control custom-input" 
                  rows="4" 
                  placeholder="Paste a link to your resume or provide a brief summary of your experience and qualifications..."
                ></textarea>
              </div>
              
              <div className="col-12">
                <label className="custom-label">Cover Letter / Why you want to join</label>
                <textarea 
                  className="form-control custom-input" 
                  rows="4" 
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                ></textarea>
              </div>

              <div className="col-12">
                <div className="d-flex align-items-center p-3 rounded bg-light border">
                  <input type="checkbox" className="form-check-input flex-shrink-0" required id="consent" />
                  <label className="form-check-label small text-muted ms-3 mb-0" htmlFor="consent">
                    I authorize FundVestSave to review my application and contact me regarding employment opportunities. I certify that the information provided is accurate and complete.
                  </label>
                </div>
              </div>

              <div className="col-md-5">
                <button type="submit" className="btn btn-primary btn-lg w-100 py-3 fw-bold rounded-pill shadow-sm">
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />

      <style>{`
        .career-page {
          font-family: 'Inter', sans-serif;
          color: #1e293b;
        }
        .text-primary { color: #2563eb !important; }
        .btn-primary { 
          background-color: #2563eb; 
          border-color: #2563eb; 
          transition: all 0.2s ease;
        }
        .btn-primary:hover { 
          background-color: #1d4ed8; 
          border-color: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -5px rgba(37, 99, 235, 0.4) !important;
        }
        .job-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid #e2e8f0 !important;
        }
        .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
        }
        .benefit-card {
          transition: background-color 0.2s ease;
        }
        .benefit-card:hover {
          background-color: #f8fafc;
        }
        .custom-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
          margin-bottom: 0.5rem;
          display: block;
        }
        .custom-input {
          font-size: 1rem;
          border: 2px solid #f1f5f9;
          border-radius: 12px;
          background-color: #f8fafc;
          padding: 0.75rem 1rem;
        }
        .custom-input:focus {
          border-color: #2563eb;
          background-color: #fff;
          box-shadow: none;
        }
        .border-dashed {
          border: 2px dashed #e2e8f0 !important;
        }
        @media (max-width: 768px) {
          .position-absolute {
            position: relative !important;
            padding: 1.5rem !important;
            top: auto !important;
            end: auto !important;
          }
          .card-body { padding: 1.5rem !important; }
        }
      `}</style>
    </div>
    </>
  );
};

export default Career;