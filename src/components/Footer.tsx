import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-skawsh-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-skawsh-blue mb-4">Skawsh</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Making laundry simple, reliable, and essential for everyday life.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="inline-block bg-black rounded-lg px-3 py-2 border border-gray-600 hover:border-gray-400 transition-colors text-center"
              >
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </a>
              <a 
                href="#" 
                className="inline-block bg-black rounded-lg px-3 py-2 border border-gray-600 hover:border-gray-400 transition-colors text-center"
              >
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917993631199" className="text-gray-300 hover:text-white transition-colors">
                  📞 +917993631199
                </a>
              </li>
              <li>
                <a href="mailto:contact@skawsh.com" className="text-gray-300 hover:text-white transition-colors">
                  ✉️ contact@skawsh.com
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Skawsh. All rights reserved. Laundry isn't luxury, it's life.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;