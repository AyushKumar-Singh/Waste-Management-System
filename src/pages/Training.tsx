import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award,
  Play,
  CheckCircle,
  Download
} from "lucide-react";

const Training = () => {
  const courses = [
    {
      title: "Waste Segregation Basics",
      description: "Learn the fundamentals of proper waste segregation and sorting",
      duration: "45 min",
      level: "Beginner",
      type: "Citizens",
      progress: 100,
      completed: true,
      participants: 1250,
    },
    {
      title: "Community Composting",
      description: "Master the art of community-level composting and organic waste management",
      duration: "1.5 hrs",
      level: "Intermediate",
      type: "Citizens",
      progress: 60,
      completed: false,
      participants: 890,
    },
    {
      title: "Safety Protocols for Workers",
      description: "Essential safety guidelines and protocols for waste collection workers",
      duration: "2 hrs",
      level: "Professional",
      type: "Workers",
      progress: 0,
      completed: false,
      participants: 340,
    },
    {
      title: "Advanced Recycling Techniques",
      description: "Learn advanced recycling methods and waste processing techniques",
      duration: "3 hrs",
      level: "Advanced",
      type: "Workers",
      progress: 25,
      completed: false,
      participants: 156,
    },
    {
      title: "Environmental Impact Assessment",
      description: "Understanding the environmental impact of waste management practices",
      duration: "1 hr",
      level: "Intermediate",
      type: "Citizens",
      progress: 0,
      completed: false,
      participants: 678,
    },
    {
      title: "Emergency Response Procedures",
      description: "Handle waste-related emergencies and hazardous material incidents",
      duration: "2.5 hrs",
      level: "Professional",
      type: "Workers",
      progress: 80,
      completed: false,
      participants: 234,
    },
  ];

  const certificates = [
    {
      name: "Waste Management Fundamentals",
      issueDate: "2024-01-15",
      validUntil: "2025-01-15",
    },
    {
      name: "Community Composting Specialist",
      issueDate: "2024-02-20",
      validUntil: "2025-02-20",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Professional": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    return type === "Citizens" 
      ? "bg-eco-lighter text-eco-dark" 
      : "bg-blue-100 text-blue-800";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-eco-primary mb-4">
          Training Center
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Enhance your skills with our comprehensive waste management training programs. 
          Courses designed for both citizens and waste management workers.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <BookOpen className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">12</div>
            <div className="text-muted-foreground">Available Courses</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">3,548</div>
            <div className="text-muted-foreground">Active Learners</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Award className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">1,239</div>
            <div className="text-muted-foreground">Certificates Issued</div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-eco-primary mb-6">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-eco transition-all duration-300 shadow-card-eco">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge className={getTypeColor(course.type)}>
                      {course.type}
                    </Badge>
                  </div>
                  {course.completed && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.participants}
                  </div>
                </div>

                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}

                <Button 
                  className={`w-full ${course.completed ? 'bg-eco-primary hover:bg-eco-dark' : ''}`}
                  variant={course.completed ? 'default' : 'outline'}
                >
                  {course.completed ? (
                    <>
                      <Award className="h-4 w-4 mr-2" />
                      View Certificate
                    </>
                  ) : course.progress > 0 ? (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start Course
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div>
        <h2 className="text-2xl font-bold text-eco-primary mb-6">Your Certificates</h2>
        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="shadow-card-eco">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{cert.name}</span>
                    <Award className="h-5 w-5 text-eco-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issued:</span>
                      <span>{cert.issueDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Valid Until:</span>
                      <span>{cert.validUntil}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12 shadow-card-eco">
            <CardContent>
              <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Certificates Yet</h3>
              <p className="text-muted-foreground mb-4">
                Complete courses to earn certificates and showcase your expertise
              </p>
              <Button className="bg-eco-primary hover:bg-eco-dark">
                Start Your First Course
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Training;