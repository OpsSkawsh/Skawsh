import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const DriverPrivacyPolicy = () => {
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
          <h1>Privacy Policy for Skawsh Driver Application</h1>
          <p className="text-gray-500 text-sm">Last updated: 28 January 2026</p>

          <p>
            Skawsh ("we", "our", "us") operates the Skawsh Driver Application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the App. By accessing or using the App, you agree to the terms of this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Personal Information</h3>
          <p>We collect personal information required to create and manage a driver account, including:</p>
          <ul>
            <li>Full name</li>
            <li>Mobile phone number</li>
            <li>Email address</li>
            <li>Profile photo</li>
          </ul>

          <p><strong>Identity Verification (Mandatory / Optional):</strong></p>
          <ul>
            <li>Aadhaar number (mandatory) for driver verification</li>
            <li>PAN card details (optional)</li>
            <li>Driving license details (optional)</li>
            <li>Vehicle details (optional)</li>
          </ul>

          <h3>1.2 Location Information</h3>
          <p>We collect real-time location data while the App is running in the background to:</p>
          <ul>
            <li>Assign delivery jobs</li>
            <li>Enable navigation using Google Maps</li>
          </ul>

          <h3>1.3 Usage and Device Information</h3>
          <p>We may automatically collect certain information, including:</p>
          <ul>
            <li>Device type, OS version, and App version</li>
            <li>IP address</li>
            <li>Log data, crash reports, and diagnostic data collected via Firebase Analytics</li>
          </ul>

          <h3>1.4 Payment Information</h3>
          <p>We do not store sensitive payment information such as bank account or card details.</p>
          <p>Payments and settlements are processed through third-party payment partners.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Create and manage driver accounts</li>
            <li>Verify driver identity and eligibility</li>
            <li>Assign and manage delivery orders</li>
            <li>Provide navigation and delivery tracking</li>
            <li>Process payments and incentives</li>
            <li>Communicate important updates, alerts, and support messages</li>
            <li>Improve App performance, safety, and user experience</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>We may share your information only in the following cases:</p>
          <ul>
            <li><strong>With Customers and Vendors:</strong> Limited details such as name, profile photo, and live delivery status</li>
            <li><strong>With Service Providers:</strong> Technology, analytics, mapping, and payment service providers who support App operations</li>
            <li><strong>For Legal Reasons:</strong> If required by law, regulation, or legal process</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
          </ul>
          <p>We do not sell or rent your personal data to third parties.</p>

          <h2>4. Data Retention</h2>
          <p>We retain personal information only for as long as necessary to:</p>
          <ul>
            <li>Fulfill the purposes described in this Privacy Policy</li>
            <li>Comply with legal, tax, or regulatory obligations</li>
          </ul>
          <p>When data is no longer required, it is securely deleted or anonymized.</p>

          <h2>5. Data Security</h2>
          <p>We implement reasonable administrative, technical, and physical security measures to protect your information from unauthorized access, loss, misuse, or alteration.</p>
          <p>We encrypt all data in transit using TLS/SSL.</p>
          <p>However, no method of transmission over the internet or electronic storage is 100% secure.</p>

          <h2>6. Permissions Used by the App</h2>
          <p>The Skawsh Driver App may request the following permissions:</p>
          <ul>
            <li><strong>Location (Foreground & Background):</strong> For delivery assignment, live tracking, and navigation</li>
            <li><strong>Camera:</strong> For Aadhaar upload, document verification, and proof of delivery</li>
            <li><strong>Storage:</strong> For storing delivery-related images or documents</li>
            <li><strong>Notifications:</strong> To send order updates, alerts, and important service messages</li>
          </ul>
          <p>You may revoke permissions through your device settings. However, disabling critical permissions such as location may prevent the App from functioning properly.</p>

          <h2>7. Your Rights</h2>
          <p>Depending on applicable laws, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your account and personal data</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p>To exercise these rights, contact us using the details below.</p>

          <h2>8. Children's Privacy</h2>
          <p>The Skawsh Driver App is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.</p>

          <h2>9. Third-Party Links and Services</h2>
          <p>The App may contain links to third-party services (e.g., maps or payment gateways). We are not responsible for the privacy practices of these third parties.</p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted within the App and updated on the Play Store listing. Continued use of the App means you accept the updated policy.</p>

          <h2>11. Contact Us</h2>
          <p>If you have any questions, concerns, or requests related to data access or deletion, you can contact us at:</p>
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

export default DriverPrivacyPolicy;
