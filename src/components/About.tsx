import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-accent/10 backdrop-blur-sm">
                More About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-gradient">Talent Mobi</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                At TalentMobi, our story is one rooted in a deep passion for matching talent with opportunity. We are driven by the belief that the right placement can transform lives and empower businesses to thrive.
              </p>
              <p className="text-lg">
                Founded with a vision of making meaningful connections, our journey has been one of unwavering commitment, integrity, and excellence.
              </p>
              <p className="text-lg">
                Consulting Talent Mobi has extensive experience across all industries. We help our clients set new standards of excellence.
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg animate-pulse">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us anytime</p>
                  <a
                    href="tel:+918904988715"
                    className="text-xl font-bold text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    +91 890 498 8715
                  </a>
                </div>
              </div>
              <Button 
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-glow transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Image Side with Glass Effect */}
          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-500 hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">✓</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1000+</p>
                  <p className="text-sm text-muted-foreground">Successful Placements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
