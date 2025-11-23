import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, Coffee, TrendingUp, ArrowRight } from "lucide-react";
import aiMlImage from "@/assets/course-ai-ml.jpg";
import pythonImage from "@/assets/course-python.jpg";
import javaImage from "@/assets/course-java.jpg";
import digitalMarketingImage from "@/assets/course-digital-marketing.jpg";

const courses = [
  {
    id: 1,
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Master artificial intelligence and machine learning with hands-on projects. Learn Python, TensorFlow, neural networks, and deep learning algorithms.",
    image: aiMlImage,
    duration: "6 Months",
    level: "Advanced"
  },
  {
    id: 2,
    icon: Code,
    title: "Full Stack Python",
    description: "Become a versatile Python developer. Master Django, Flask, React, PostgreSQL, and deploy scalable web applications with modern DevOps practices.",
    image: pythonImage,
    duration: "5 Months",
    level: "Intermediate"
  },
  {
    id: 3,
    icon: Coffee,
    title: "Java Full Stack",
    description: "Build enterprise-grade applications with Java, Spring Boot, Hibernate, Angular/React, and microservices architecture. Industry-ready training.",
    image: javaImage,
    duration: "6 Months",
    level: "Intermediate"
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Master SEO, social media marketing, content strategy, Google Ads, analytics, and email marketing. Grow your brand and drive real business results.",
    image: digitalMarketingImage,
    duration: "3 Months",
    level: "Beginner"
  }
];

export const Training = () => {
  const navigate = useNavigate();

  return (
    <section id="training" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Professional Training Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upskill your team with industry-leading training programs designed to drive innovation and growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card 
                key={course.id} 
                className="glass-card hover-lift group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90" />
                  <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {course.level}
                  </div>
                </div>
                
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    Duration: {course.duration}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            onClick={() => navigate('/training')}
            className="group"
          >
            View All Courses
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
