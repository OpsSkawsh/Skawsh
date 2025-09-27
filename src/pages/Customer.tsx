import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Check if user came from within the app
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-foreground hover:text-foreground/80"
          onClick={handleBackClick}
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Previous Page
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Skawsh in Your Pocket
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
            We're available on Android & iOS. Download now and make laundry effortless.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg sm:max-w-none mx-auto">
            <Button
              asChild
              size="lg"
              variant="default"
              className="bg-black text-white hover:bg-black/90 h-14 sm:h-16 px-6 sm:px-8 rounded-lg w-full sm:w-auto"
            >
              <a href="#" className="flex items-center gap-3">
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-base sm:text-lg font-semibold">App Store</div>
                </div>
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="default"
              className="bg-black text-white hover:bg-black/90 h-14 sm:h-16 px-6 sm:px-8 rounded-lg w-full sm:w-auto"
            >
              <a href="#" className="flex items-center gap-3">
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-base sm:text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customer;