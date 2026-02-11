import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Zap, 
  Eye, 
  Target, 
  Lock,
  Globe,
  Compass,
  CheckCircle2
} from 'lucide-react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const About = () => {
  return (
        <>
        <Navbar />
         <div className="bg-white pb-5">
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                />

                <section className="bg-primary text-white py-5 mb-5 position-relative overflow-hidden">
                    <div className="container py-5 text-center position-relative" style={{ zIndex: 2 }}>
                    <h1 className="display-3 fw-bold mb-3 mt-4">About 
                      <span className="text-dark"> FundVest</span>
                        <span className="text-white">Save</span>
                    </h1>
                    <h4 className="lead fs-3 fw-bold text-white-50 mx-auto mb-4" style={{ maxWidth: '800px' }}>
                        Your trusted partner in achieving financial success through innovative solutions and personalized service.
                    </h4>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="container mb-5 pb-5">
                    <div className="row g-5">
                    <div className="col-lg-12">
                        <h2 className="display-5 fw-bold mb-4 text-dark text-center border-0">Our Story</h2>
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                        <p className="text-muted fs-5 leading-relaxed">
                            Founded in 2010, FinanceHub has grown from a small investment advisory firm to a comprehensive financial services platform serving over 50,000 clients worldwide.
                        </p>
                        <p className="text-muted fs-5">
                            We believe in transparency, efficiency, and growth. Our journey has been defined by our commitment to excellence and the success of our global community.
                        </p>
                        </div>

                        {/* Mission & Vision nested under Story */}
                        <div className="row g-4 mt-2">
                        <div className="col-md-6">
                            <div className="card h-100 border border-light-subtle shadow-sm custom-card">
                            <div className="card-body p-4 p-xl-5">
                                <div className="d-flex align-items-center mb-4">
                                <div className="icon-container bg-primary-subtle text-primary rounded-3 p-3 me-3">
                                    <Target size={32} />
                                </div>
                                <h3 className="h3 mb-0 fw-bold">Our Mission</h3>
                                </div>
                                <p className="card-text text-secondary lh-lg">
                                To empower individuals and businesses with accessible, professional financial services that drive sustainable growth and protect their financial well-being. We are committed to providing ethical, transparent, and client-focused solutions.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100 border border-light-subtle shadow-sm custom-card">
                            <div className="card-body p-4 p-xl-5">
                                <div className="d-flex align-items-center mb-4">
                                <div className="icon-container bg-success-subtle text-success rounded-3 p-3 me-3">
                                    <Compass size={32} />
                                </div>
                                <h3 className="h3 mb-0 fw-bold">Our Vision</h3>
                                </div>
                                <p className="card-text text-secondary lh-lg">
                                To become the most trusted and innovative financial services platform globally, setting industry standards for integrity, performance, and customer satisfaction. We envision a future where financial tools are accessible to everyone.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="bg-light py-5">
                    <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold">Our Core Values</h2>
                        <p className="text-muted fs-5">The principles that guide everything we do</p>
                    </div>
                    <div className="row g-4">
                        {[
                        { 
                            title: "Integrity", 
                            desc: "We uphold our highest ethical standards in all our dealings.", 
                            icon: <ShieldCheck size={36} />,
                            color: "primary"
                        },
                        { 
                            title: "Client-Centric", 
                            desc: "Your financial success is our top priority at every step.", 
                            icon: <Users size={36} />,
                            color: "info"
                        },
                        { 
                            title: "Excellence", 
                            desc: "We strive for excellence in every service we provide.", 
                            icon: <Zap size={36} />,
                            color: "warning"
                        },
                        { 
                            title: "Transparency", 
                            desc: "Clear communication and honest advice, always.", 
                            icon: <Eye size={36} />,
                            color: "success"
                        }
                        ].map((value, idx) => (
                        <div key={idx} className="col-md-6 col-lg-3">
                            <div className="card h-100 border border-light-subtle shadow-sm custom-card text-center p-4">
                            <div className={`text-${value.color} mb-3 d-flex justify-content-center`}>
                                {value.icon}
                            </div>
                            <h4 className="fw-bold mb-3">{value.title}</h4>
                            <p className="text-muted small mb-0 lh-base">{value.desc}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </section>

                <section className="container py-5 my-5">
                    <div className="card border-0 shadow-lg overflow-hidden rounded-4">
                    <div className="row g-0">
                        <div className="col-md-1 bg-primary d-none d-md-block"></div>
                        <div className="col-md-11">
                        <div className="card-body p-4 p-md-5">
                            <div className="d-flex align-items-center mb-4">
                            <Lock className="text-primary me-3" size={40} />
                            <h2 className="h1 fw-bold mb-0">Regulated & Compliant</h2>
                            </div>
                            <p className="text-secondary fs-5 mb-5">
                            FinanceHub operates in full compliance with financial regulations and industry standards. We are committed to maintaining the highest levels of security and transparency.
                            </p>
                            <div className="bg-light border rounded-3 p-4">
                            <div className="d-flex gap-2 align-items-start">
                                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                                <div>
                                <h5 className="fw-bold text-dark small text-uppercase tracking-wider">Regulatory Disclaimer</h5>
                                <p className="text-muted small mb-0">
                                    FinanceHub is licensed and regulated by relevant financial authorities. All investment services are provided in accordance with applicable laws. Please consult our Legal & Risk Disclosure page for complete details.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <Footer />

                <style>{`
                    .custom-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: #ffffff;
                    border-width: 1px;
                    }
                    .custom-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.12) !important;
                    border-color: #0d6efd !important;
                    }
                    .icon-container {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    }
                    .bg-primary-subtle { background-color: #e7f1ff; }
                    .bg-success-subtle { background-color: #e1f7ec; }
                `}</style>
            </div>
        </>
  );
};

export default About;
