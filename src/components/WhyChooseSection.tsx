import { Button } from "@/components/ui/button";
import { Zap, Shield, DollarSign, Heart, Smartphone, Clock, Truck, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    icon: Zap,
    title: "Convenience",
    description: "Easy ordering & real-time tracking",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "Reliability", 
    description: "Trusted partner studios",
    color: "text-green-500"
  },
  {
    icon: DollarSign,
    title: "Affordability",
    description: "Everyday service, not luxury",
    color: "text-orange-500"
  },
  {
    icon: Heart,
    title: "Stress-Free",
    description: "Focus on life, not laundry",
    color: "text-purple-500"
  }
];

const customerFeatures = [
  {
    icon: Smartphone,
    title: "Seamless Ordering",
    description: "Quick and easy booking through our app or website"
  },
  {
    icon: Clock,
    title: "Live Tracking",
    description: "Track your order in real-time from pickup to delivery"
  },
  {
    icon: Truck,
    title: "Quick Delivery",
    description: "Fast turnaround times to fit your schedule"
  }
];

const studioFeatures = [
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Expand your customer base with our platform"
  },
  {
    icon: CheckCircle,
    title: "Trusted Partnership",
    description: "Join our network of verified laundry providers"
  },
  {
    icon: Users,
    title: "More Customers",
    description: "Get steady stream of orders from local customers"
  }
];

const WhyChooseSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
          Why Choose Skawsh?
        </h2>
        <p className="text-base md:text-lg text-skawsh-gray mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
          We make laundry stress-free so you can focus on what matters most
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center">
              <div className={`mb-3 md:mb-4 ${benefit.color}`}>
                <benefit.icon className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-skawsh-gray text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* For Customers */}
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">For Customers</h3>
            <div className="space-y-4 md:space-y-6">
              {customerFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-skawsh-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{feature.title}</h4>
                    <p className="text-skawsh-gray text-sm md:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              className="mt-6 md:mt-8 bg-skawsh-blue hover:bg-skawsh-blue/90 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base w-full sm:w-auto"
              onClick={() => navigate('/customer')}
            >
              Get Started as Customer
            </Button>
          </div>

          {/* For Laundry Studios */}
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">For Laundry Studios</h3>
            <div className="space-y-4 md:space-y-6">
              {studioFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-skawsh-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{feature.title}</h4>
                    <p className="text-skawsh-gray text-sm md:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              className="mt-6 md:mt-8 bg-skawsh-blue hover:bg-skawsh-blue/90 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base w-full sm:w-auto"
              onClick={() => navigate('/business')}
            >
              Join the Skawsh Network!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;