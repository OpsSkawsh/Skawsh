import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold text-gray-800">404</h1>
        <p className="mb-6 text-lg md:text-xl text-gray-600">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-skawsh-blue text-white px-6 py-3 rounded-lg hover:bg-skawsh-blue/90 transition-colors font-medium"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
