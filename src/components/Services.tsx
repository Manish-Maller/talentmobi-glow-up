import { Users, Target, Trophy, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Users,
    title: "Expertise",
    description:
      "Our team is comprised of seasoned professionals who bring years of experience in the recruitment industry. We understand the intricacies of various sectors and are well-equipped to guide you to the right solution.",
  },
  {
    icon: Target,
    title: "Personalized Approach",
    description:
      "We believe that one size does not fit all. Every job seeker and employer is unique. We take the time to understand your goals, preferences, and needs to provide a tailored solution.",
  },
  {
    icon: Trophy,
    title: "Dedication to Success",
    description:
      "Your success is our success. We take pride in the achievements of the talented individuals we've placed in their dream jobs and the businesses we've helped grow by matching them with the right talent.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "In a rapidly evolving job market, we stay at the forefront of industry trends and technologies. We are committed to adapting our services to meet the changing needs of our clients.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-accent/10 backdrop-blur-sm">
              Business Progress
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Together we can envision{" "}
            <span className="text-gradient">your business</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group glass-card p-8 hover-lift cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-500"></div>

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
