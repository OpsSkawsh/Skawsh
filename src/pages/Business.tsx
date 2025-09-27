import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Shield, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Business = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-foreground hover:text-foreground/80"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-skawsh-blue">
              Ready to grow your laundry business?
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              Download the Skawsh app on the App Store or Play Store and submit 
              your studio registration request directly from the app.
            </p>
            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-4xl mx-auto">
              Connect with local customers, boost your orders, and become part of a 
              trusted network of laundry providers.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                asChild
                size="lg"
                variant="default"
                className="bg-black text-white hover:bg-black/90 h-16 px-8 rounded-lg"
              >
                <a href="#" className="flex items-center gap-3">
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="default"
                className="bg-black text-white hover:bg-black/90 h-16 px-8 rounded-lg"
              >
                <a href="#" className="flex items-center gap-3">
                  <div className="text-left">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Boost Orders */}
            <div className="text-center">
              <div className="w-16 h-16 bg-skawsh-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Boost Orders</h3>
              <p className="text-muted-foreground">
                Connect with more customers in your area and increase your daily orders.
              </p>
            </div>

            {/* Trusted Network */}
            <div className="text-center">
              <div className="w-16 h-16 bg-skawsh-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Trusted Network</h3>
              <p className="text-muted-foreground">
                Join a vetted community of professional laundry service providers.
              </p>
            </div>

            {/* Grow Revenue */}
            <div className="text-center">
              <div className="w-16 h-16 bg-skawsh-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Grow Revenue</h3>
              <p className="text-muted-foreground">
                Expand your business reach and maximize your earning potential.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Button
            onClick={() => navigate('/')}
            className="bg-skawsh-blue text-white hover:bg-skawsh-blue/90 px-8 py-3 text-lg font-medium"
          >
            Back to Home
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Business;