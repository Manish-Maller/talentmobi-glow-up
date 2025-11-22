import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Eye, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery and client relationships."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in building long-term partnerships based on trust and mutual success."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously innovate our approaches to stay ahead of industry trends and challenges."
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "HR Experts" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            About <span className="text-gradient">TalentMobi</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Your trusted partner in HR consulting excellence, dedicated to transforming businesses through people-focused solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-10 hover-lift animate-fade-in">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with innovative HR solutions that drive growth, enhance employee engagement, 
                and create sustainable competitive advantages through strategic human capital management.
              </p>
            </div>
            <div className="glass-card p-10 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative HR consulting partner globally, recognized for transforming 
                workplaces into thriving ecosystems where both businesses and people excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-8 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="glass-card p-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to revolutionize HR consulting, TalentMobi has grown from a small team of 
                passionate HR professionals to a leading consultancy serving organizations across industries.
              </p>
              <p>
                Our journey began with a simple belief: that every organization deserves access to world-class 
                HR expertise. Over the years, we've helped hundreds of companies transform their HR functions, 
                improve employee engagement, and achieve sustainable growth.
              </p>
              <p>
                Today, we continue to innovate and adapt, bringing the latest HR trends and best practices to 
                our clients while maintaining the personalized, partnership-driven approach that has been our 
                hallmark since day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/20 to-primary opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your HR strategy? Get in touch with our team today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-glow transition-all duration-300">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
