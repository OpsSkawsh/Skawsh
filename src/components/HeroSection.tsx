import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-skawsh-blue text-white min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="whitespace-nowrap">Laundry Isn't an Extra. It's Essential</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 font-medium opacity-90">
          Because Fresh Clothes Shouldn't Be a Luxury.
        </h2>
        <p className="text-lg md:text-xl mb-12 opacity-80 max-w-3xl mx-auto">
          Turn laundry from a burden into freedom. Skawsh makes your clothes fresh, clean, and ready — while you focus on what really matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg sm:max-w-none mx-auto">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-skawsh-blue hover:bg-white/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-md w-full sm:w-auto"
            onClick={() => navigate('/customer')}
          >
            Get Started as Customer
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-skawsh-blue hover:bg-white/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-md w-full sm:w-auto"
            onClick={() => navigate('/business')}
          >
            Join the Skawsh Network!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;