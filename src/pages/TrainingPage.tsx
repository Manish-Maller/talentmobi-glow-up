import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Coffee, TrendingUp, Check, Clock, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aiMlImage from "@/assets/course-ai-ml.jpg";
import pythonImage from "@/assets/course-python.jpg";
import javaImage from "@/assets/course-java.jpg";
import digitalMarketingImage from "@/assets/course-digital-marketing.jpg";

const courses = [
  {
    id: 1,
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Master artificial intelligence and machine learning with comprehensive hands-on training.",
    image: aiMlImage,
    duration: "6 Months",
    level: "Advanced",
    students: "500+",
    modules: [
      "Python Programming & Data Science Fundamentals",
      "Machine Learning Algorithms & Implementation",
      "Deep Learning & Neural Networks",
      "TensorFlow & PyTorch Frameworks",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Processing",
      "Model Deployment & MLOps",
      "Capstone AI Project"
    ],
    prerequisites: "Basic programming knowledge, mathematics background",
    outcomes: [
      "Build and deploy ML models",
      "Understand deep learning architectures",
      "Work with real-world datasets",
      "Create AI-powered applications"
    ]
  },
  {
    id: 2,
    icon: Code,
    title: "Full Stack Python",
    description: "Become a versatile full-stack developer with Python, Django, React, and modern web technologies.",
    image: pythonImage,
    duration: "5 Months",
    level: "Intermediate",
    students: "800+",
    modules: [
      "Python Advanced Programming",
      "Django Framework & REST APIs",
      "Flask Microservices",
      "React.js Frontend Development",
      "PostgreSQL & Database Design",
      "Authentication & Security",
      "AWS Deployment & DevOps",
      "Full Stack Project Development"
    ],
    prerequisites: "Basic Python and HTML/CSS knowledge",
    outcomes: [
      "Build scalable web applications",
      "Master backend and frontend development",
      "Deploy production-ready apps",
      "Work with modern tech stacks"
    ]
  },
  {
    id: 3,
    icon: Coffee,
    title: "Java Full Stack",
    description: "Build enterprise-grade applications with Java, Spring Boot, and modern frontend frameworks.",
    image: javaImage,
    duration: "6 Months",
    level: "Intermediate",
    students: "1000+",
    modules: [
      "Core Java & Advanced Concepts",
      "Spring Boot & Spring Framework",
      "Hibernate ORM & JPA",
      "RESTful Web Services",
      "Angular/React Frontend",
      "Microservices Architecture",
      "Docker & Kubernetes",
      "Enterprise Project Development"
    ],
    prerequisites: "Basic programming knowledge",
    outcomes: [
      "Develop enterprise applications",
      "Master Java ecosystem",
      "Build microservices architecture",
      "Deploy scalable solutions"
    ]
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Master digital marketing strategies, SEO, social media, and analytics to grow your business.",
    image: digitalMarketingImage,
    duration: "3 Months",
    level: "Beginner",
    students: "1200+",
    modules: [
      "Digital Marketing Fundamentals",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Google Ads & PPC Campaigns",
      "Email Marketing & Automation",
      "Analytics & Data-Driven Marketing",
      "Brand Building & Growth Hacking"
    ],
    prerequisites: "No prerequisites - suitable for beginners",
    outcomes: [
      "Create effective marketing campaigns",
      "Optimize for search engines",
      "Grow social media presence",
      "Analyze and improve ROI"
    ]
  }
];

const TrainingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-accent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Professional Training Programs
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Transform your career with industry-leading courses designed by experts. 
              Hands-on learning, real-world projects, and career support.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">3,500+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Industry Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Flexible Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {courses.map((course, index) => {
              const Icon = course.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={course.id} 
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute top-6 right-6 flex gap-2">
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          {course.level}
                        </Badge>
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          {course.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{course.title}</h2>
                        <p className="text-muted-foreground">{course.students} Enrolled</p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground">{course.description}</p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Course Modules</h3>
                      <div className="grid gap-2">
                        {course.modules.map((module, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Learning Outcomes</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {course.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span className="text-sm">{outcome}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <div className="flex gap-4">
                      <Button size="lg" onClick={() => navigate('/contact')}>
                        Enroll Now
                      </Button>
                      <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                        Request Info
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default TrainingPage;
