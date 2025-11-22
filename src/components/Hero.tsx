import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/30 opacity-95"></div>
      
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Professional team collaboration" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Let's create{" "}
            <span className="relative inline-block">
              <span className="text-accent">your success.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 5 250 5 298 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-accent"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            HR consulting expertise that helps your business thrive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={() => navigate("/contact")}
              className="group bg-accent hover:bg-accent/90 text-white shadow-2xl hover:shadow-glow transition-all duration-500 text-lg px-8 py-6 hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/about")}
              className="glass-card border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
