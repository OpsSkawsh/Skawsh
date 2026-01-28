import { Link } from "react-router-dom";
import { FileText, Shield } from "lucide-react";
import Footer from "@/components/Footer";

const Drivers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-skawsh-dark text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-skawsh-blue hover:opacity-80 transition-opacity">
            Skawsh
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-skawsh-dark mb-4 text-center">
            Skawsh Driver Portal
          </h1>
          <p className="text-gray-600 text-center mb-10 md:mb-12 max-w-2xl mx-auto">
            Access important legal documents and policies for Skawsh drivers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Privacy Policy Card */}
            <Link
              to="/drivers/privacy-policy"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-skawsh-blue/30"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-skawsh-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-skawsh-blue/20 transition-colors">
                  <Shield className="w-8 h-8 text-skawsh-blue" />
                </div>
                <h2 className="text-xl font-semibold text-skawsh-dark mb-2">Privacy Policy</h2>
                <p className="text-gray-500 text-sm">
                  Learn how we collect, use, and protect your personal information.
                </p>
              </div>
            </Link>

            {/* Terms & Conditions Card */}
            <Link
              to="/drivers/terms-conditions"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-skawsh-blue/30"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-skawsh-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-skawsh-blue/20 transition-colors">
                  <FileText className="w-8 h-8 text-skawsh-blue" />
                </div>
                <h2 className="text-xl font-semibold text-skawsh-dark mb-2">Terms & Conditions</h2>
                <p className="text-gray-500 text-sm">
                  Review the terms governing your use of the Skawsh Driver App.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Drivers;
