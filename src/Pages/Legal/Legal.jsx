import React from 'react'

const Legal = () => {
  return (
    <div>
      <section>
        <h1>Legal & Risk Disclosure</h1>
        <h4>Important information about our services, terms, and risk disclosures.</h4>
      </section>

      <section>
        <div className='flex-col'>
            <div className='col-4'>
                icon
                <h2>Risk Disclosure</h2>
            </div>
            <div className='col-4'>
                icon
                <h2>Terms of Service</h2>
            </div>
            <div className='col-4'>
                icon
                <h2>Privacy Policy</h2>
            </div>
            <div className='col-4'>
                icon
                <h2>Compliance</h2>
            </div>
        </div>

        <div className='card'>
            icon <h1>Risk Disclosure</h1>
            <h2>Investment Risks</h2>
            <p> 
                <h4>All investments involve risk and may result in partial or complete loss of capital.</h4>
                Past performance is not indicative of future results. The value of investments and the income from them can go down as well as up.
             </p>

             <ul>
                <li> <h4>Market Risk:</h4> Investment values fluctuate based on market conditions, economic factors, and geopolitical events</li>
                <li> <h4>Volatility Risk:</h4> Cryptocurrency and forex markets are particularly volatile and can experience significant price swings.</li>
                <li> <h4>Liquidity Risk:</h4> Some investments may be difficult to sell quickly without impacting price.</li>
                <li> <h4>Currency Risk:</h4> Foreign exchange fluctuations can affect international investments.</li>
                <li> <h4>Credit Risk:</h4> Issuers of securities may default on their obligations</li>
             </ul>

             <h2>Recovery Service Disclaimer</h2>
             <p>
                While FinanceHub employs expert strategies and maintains relationships with legal and financial authorities,
                <h4>we cannot guarantee successful fund recovery in all cases.</h4>
              </p>
               <ul>
                <li>Recovery success depends on case-specific factors including fraud type, available evidence, and jurisdictional issues.</li>
                <li>Recovery processes can be lengthy and may involve legal proceedings.</li>
                <li>Some cases may be unrecoverable due to legal or practical limitations.</li>
                <li>Fees may apply regardless of recovery outcome, depending on the service agreement.</li>
             </ul>

             <h2>Loan Risks</h2>
             <h4>Failure to repay loans as agreed can result in serious consequences:</h4>
                <li>Damage to your credit score and credit history.</li>
                <li>Late payment fees and increased interest rates.</li>
                <li>Legal action and potential asset seizure for secured loans.</li>
                <li>Collection agency involvement.</li>
                <li>Only borrow what you can afford to repay.</li>
        </div>

        <div>
            icon <h1>Terms of Service</h1>
            <p><h3>Last Updated:</h3> date</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using FinanceHub's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.</p>

            <h2>2. Services Description</h2>
            <p>FinanceHub provides financial services including investment advisory, fund recovery assistance, loan products, and employment services. Specific terms for each service are provided in separate service agreements.</p>

            <h2>3. User Responsibilities</h2>
            <ul>
                <li>Provide accurate and complete information.</li>
                <li>Maintain confidentiality of account credentials.</li>
                <li>Comply with all applicable laws and regulations.</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
            </ul>

            <h2>4. Prohibited Activities</h2>
            <p>You may not:</p>
            <ul>
                <li>Use our services for illegal purposes or money laundering.</li>
                <li>Provide false or misleading information.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
                <li>Manipulate markets or engage in fraudulent trading activities.</li>
            </ul>

            <h2>5. Limitation of Liability</h2>
            <p>FinanceHub shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our liability is limited to the amount of fees paid by you for the specific service.</p>

            <h2>6. Modifications</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our services after changes indicates acceptance of the new terms.</p>
        </div>

        <div>
           icon <h1>Privacy Policy</h1>
           <p><h3>Last Updated:</h3> today's date</p>
           <h2>Information We Collect</h2>
           <ul>
            <li> <h4>Personal Information: </h4>Name, address, email, phone number, date of birth.</li>
            <li> <h4>Financial Information: </h4>Income, employment, credit history, investment experience.</li>
            <li> <h4>Transaction Data: </h4>Account activity, trading history, payment information.</li>
            <li> <h4>Technical Data: </h4>IP address, browser type, device information, usage data.</li>
           </ul>

           <h2>How We Use Your Information</h2>
           <ul>
            <li>To provide and improve our services.</li>
            <li>To comply with regulatory and legal requirements.</li>
            <li>To prevent fraud and ensure security.</li>
            <li>To communicate with you about your account and services.</li>
            <li>To analyze usage patterns and improve user experience.</li>
           </ul>

           <h1>Data Protection</h1>
           <p>We implement industry-standard security measures to protect your data including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure.</p>

           <h2>Your Rights</h2>
           <p>You have the right to:</p>
           <ul>
            <li>Access your personal information.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data (subject to legal requirements).</li>
            <li>Opt-out of marketing communications.</li>
           </ul>
        </div>

        <div>
            icon <h1>Regulatory Compliance</h1>
            <h2>Licensing & Registration</h2>
            <p>FundVestSave is licensed and regulated by relevant financial authorities in jurisdictions where we operate. We maintain all necessary registrations and comply with applicable securities laws, anti-money laundering (AML) regulations, and know-your-customer (KYC) requirements.</p>

            <h2>Anti-Money Laundering (AML)</h2>
            <p>We have comprehensive AML policies and procedures in place. We may request additional information or documentation to verify your identity and source of funds. Suspicious activities are reported to appropriate authorities.</p>

            <h2>Investor Protection</h2>
            <p>Client funds are held in segregated accounts with reputable financial institutions. We maintain professional indemnity insurance and participate in applicable investor compensation schemes where required.</p>

            <h2>Conflicts of Interest</h2>
            <p>We maintain policies to identify and manage conflicts of interest. Our advisors are required to act in the best interests of clients and disclose any material conflicts.</p>
        </div>

        <div>
            <h2>Questions About Legal Terms?</h2>
            <p>If you have questions about our legal terms, privacy policy, or compliance procedures, please contact our legal department.</p>
            <button>Contact Legal Department</button>
        </div>
      </section>
    </div>
  )
}

export default Legal
