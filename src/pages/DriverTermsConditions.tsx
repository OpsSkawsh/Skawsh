import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const DriverTermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-skawsh-dark text-white py-6 px-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/drivers" className="hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <Link to="/" className="text-2xl font-bold text-skawsh-blue hover:opacity-80 transition-opacity">
            Skawsh
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8 md:py-12 px-4">
        <article className="max-w-4xl mx-auto prose prose-gray prose-headings:text-skawsh-dark prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-xl md:prose-h2:text-2xl prose-p:text-gray-700 prose-li:text-gray-700 max-w-none">
          <h1>Terms & Conditions for Skawsh Driver Application</h1>
          <p className="text-gray-500 text-sm">Last updated: 28 January 2026</p>

          <p>
            These Terms & Conditions ("Terms") govern your access to and use of the Skawsh Driver Application (the "App"), operated by Cswishlink Pvt Ltd. By registering, accessing, or using the App, you agree to be bound by these Terms. If you do not agree, you must not use the App.
          </p>

          <h2>1. Eligibility</h2>
          <p>You must be at least 18 years old to register as a driver.</p>
          <p>You must provide accurate and complete information during registration and verification.</p>
          <p>Aadhaar verification is mandatory to access the App.</p>

          <h2>2. Driver Responsibilities</h2>
          <p>As a Skawsh driver, you agree to:</p>
          <ul>
            <li>Accept and complete delivery tasks in a professional and timely manner</li>
            <li>Maintain accurate status updates for assigned orders</li>
            <li>Handle customer items with care and responsibility</li>
            <li>Follow all applicable local laws, traffic rules, and safety regulations</li>
          </ul>
          <p>Skawsh reserves the right to suspend or terminate accounts for misconduct, fraud, or repeated service issues.</p>

          <h2>3. Account & Verification</h2>
          <p>Drivers are responsible for maintaining the confidentiality of their login credentials.</p>
          <p>You are solely responsible for all activities conducted through your account.</p>
          <p>Skawsh may re-verify your identity or documents at any time for compliance or safety reasons.</p>

          <h2>4. Location Tracking</h2>
          <p>The App uses foreground and background location access only during active delivery operations.</p>
          <p>Location tracking is required to assign jobs, enable navigation, and track delivery progress.</p>

          <h2>5. Payments & Earnings</h2>
          <p>Earnings, incentives, and settlements are calculated based on completed deliveries.</p>
          <p>Payments are processed through third-party payment partners.</p>
          <p>Skawsh is not responsible for delays caused by banking systems or third-party providers.</p>

          <h2>6. Service Availability</h2>
          <p>Skawsh does not guarantee continuous or uninterrupted access to the App.</p>
          <p>Features may be modified, suspended, or discontinued without prior notice.</p>

          <h2>7. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for unlawful, fraudulent, or abusive purposes</li>
            <li>Share false information or impersonate another individual</li>
            <li>Manipulate order status, location data, or payment systems</li>
            <li>Attempt to reverse engineer or misuse the App</li>
          </ul>

          <h2>8. Termination</h2>
          <p>Skawsh may suspend or terminate your account at any time if:</p>
          <ul>
            <li>You violate these Terms</li>
            <li>You provide false or misleading information</li>
          </ul>

          <h2>9. Limitation of Liability</h2>
          <p>Skawsh shall not be liable for:</p>
          <ul>
            <li>Loss of income, profits, or data</li>
            <li>Damages arising from delivery disputes between drivers, customers, or vendors</li>
            <li>Issues caused by third-party services or force majeure events</li>
          </ul>

          <h2>10. Governing Law</h2>
          <p>These Terms shall be governed by and interpreted in accordance with the laws of India, with jurisdiction in Telangana.</p>

          <h2>11. Contact Information</h2>
          <p>For questions related to these Terms & Conditions, contact:</p>
          <p>
            <strong>Company Name:</strong> Cswishlink Pvt Ltd (Skawsh)<br />
            <strong>Email:</strong> <a href="mailto:support@skawsh.com">support@skawsh.com</a><br />
            <strong>Address:</strong> 5-497, NEAR HITEC CITY, IZZATHNAGAR, KONDAPUR, Kondapur, K.V.Rangareddy, Serilingampally, Telangana, India, 500084
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default DriverTermsConditions;
