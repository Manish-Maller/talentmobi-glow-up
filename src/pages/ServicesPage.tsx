import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, TrendingUp, Award, Target, Briefcase, GraduationCap, Code } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Strategic recruitment solutions to find and attract top talent for your organization.",
      details: [
        "Executive search and recruitment",
        "Candidate screening and assessment",
        "Employer branding strategies",
        "Recruitment process optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Comprehensive systems to measure, improve, and reward employee performance.",
      details: [
        "Performance review systems",
        "Goal setting and tracking",
        "360-degree feedback implementation",
        "Performance improvement plans"
      ]
    },
    {
      icon: Award,
      title: "Employee Engagement",
      description: "Programs designed to boost morale, retention, and overall workplace satisfaction.",
      details: [
        "Employee satisfaction surveys",
        "Recognition programs",
        "Team building initiatives",
        "Culture development strategies"
      ]
    },
    {
      icon: Target,
      title: "HR Strategy",
      description: "Tailored strategic planning to align HR initiatives with business objectives.",
      details: [
        "HR audit and assessment",
        "Workforce planning",
        "Organizational design",
        "Change management"
      ]
    },
    {
      icon: Briefcase,
      title: "Compensation & Benefits",
      description: "Competitive compensation structures and benefits packages to attract and retain talent.",
      details: [
        "Salary benchmarking",
        "Benefits program design",
        "Incentive plan development",
        "Total rewards strategy"
      ]
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Training programs to enhance skills and drive continuous professional growth.",
      details: [
        "Leadership development",
        "Skills training programs",
        "Career development planning",
        "Learning management systems"
      ]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions to digitalize and streamline your business operations.",
      details: [
        "Website development",
        "Mobile app development",
        "Custom software solutions",
        "API integration and development"
      ]
    }
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
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Comprehensive HR consulting solutions tailored to transform your business and empower your workforce.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-8 hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start text-sm text-muted-foreground">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/20 to-primary opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your HR?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your organization thrive.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-glow transition-all duration-300">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
