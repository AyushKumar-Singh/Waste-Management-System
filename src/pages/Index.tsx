import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Recycle, 
  Users, 
  TrendingUp, 
  Award,
  MapPin,
  BookOpen,
  AlertTriangle,
  Gift
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const stats = [
    { label: "Active Citizens", value: "12,450", icon: Users },
    { label: "Waste Collected", value: "2,340 tons", icon: Recycle },
    { label: "CO₂ Reduced", value: "850 kg", icon: TrendingUp },
    { label: "Green Champions", value: "245", icon: Award },
  ];

  const quickActions = [
    {
      title: "Track Waste Collection",
      description: "Monitor real-time waste collection vehicles",
      icon: MapPin,
      href: "/track",
      variant: "default" as const,
    },
    {
      title: "Start Training",
      description: "Learn about proper waste management",
      icon: BookOpen,
      href: "/training",
      variant: "secondary" as const,
    },
    {
      title: "Report Issue",
      description: "Report illegal dumping or issues",
      icon: AlertTriangle,
      href: "/report",
      variant: "outline" as const,
    },
    {
      title: "View Rewards",
      description: "Check your eco-points and rewards",
      icon: Gift,
      href: "/incentives",
      variant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building a <span className="text-eco-light">Cleaner Future</span> Together
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Join thousands of citizens in creating sustainable waste management practices for our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-eco-primary hover:bg-eco-dark text-lg px-8" asChild>
              <Link to="/training">Get Certified</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-eco-primary text-lg px-8" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-eco-lighter/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center shadow-card-eco">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 text-eco-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-eco-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-primary mb-4">
              Take Action Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose how you want to contribute to our waste management mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card key={index} className="group hover:shadow-eco transition-all duration-300 cursor-pointer shadow-card-eco">
                  <CardHeader className="text-center">
                    <Icon className="h-12 w-12 text-eco-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{action.description}</p>
                    <Button 
                      variant={action.variant} 
                      className={action.variant === 'default' ? 'bg-eco-primary hover:bg-eco-dark' : ''} 
                      asChild
                    >
                      <Link to={action.href}>Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-eco text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our training program to become a certified waste management ambassador in your community
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link to="/training">Start Training Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;