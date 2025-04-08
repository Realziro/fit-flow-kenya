
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-20 md:py-32 lg:py-40 max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Transform Your Body, <span className="text-kenya-green-light">Transform Your Life</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              Join Kenya's premier fitness center and start your journey to a healthier, 
              stronger you with our world-class facilities and expert trainers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-kenya-green hover:bg-kenya-green-light text-white px-8 font-semibold">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Membership Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" className="fill-white">
          <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,140L1360,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
