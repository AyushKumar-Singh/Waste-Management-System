import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award,
  Globe,
  Recycle,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Environmental Stewardship",
      description: "We believe in protecting our planet for future generations through responsible waste management practices.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building stronger communities through collaborative environmental action and citizen participation.",
    },
    {
      icon: Award,
      title: "Excellence & Innovation",
      description: "Continuously improving our services through technology and best practices in waste management.",
    },
    {
      icon: Heart,
      title: "Transparency & Trust",
      description: "Maintaining open communication and accountability in all our environmental initiatives.",
    },
  ];

  const partners = [
    {
      name: "City Environmental Department",
      type: "Government Partner",
      description: "Primary governmental collaboration for waste management policies and implementation.",
    },
    {
      name: "GreenTech Solutions",
      type: "Technology Partner", 
      description: "Providing innovative IoT solutions for smart waste collection and monitoring systems.",
    },
    {
      name: "EcoEducation Institute",
      type: "Education Partner",
      description: "Developing comprehensive training programs for citizens and waste management workers.",
    },
    {
      name: "Community Action Network",
      type: "Community Partner",
      description: "Grassroots organization helping mobilize local environmental action committees.",
    },
    {
      name: "Sustainable Business Alliance",
      type: "Business Partner",
      description: "Connecting with local businesses to promote sustainable waste management practices.",
    },
    {
      name: "Regional Recycling Cooperative",
      type: "Industry Partner",
      description: "Collaborative partnership for advanced recycling and circular economy initiatives.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Environmental Director",
      description: "Leading sustainable waste management initiatives with 15 years of experience in environmental policy.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Technology Lead",
      description: "Developing innovative digital solutions for efficient waste tracking and citizen engagement.",
    },
    {
      name: "Emily Johnson",
      role: "Community Outreach Manager",
      description: "Building partnerships and educating communities about environmental responsibility.",
    },
    {
      name: "David Kim",
      role: "Training Coordinator",
      description: "Designing comprehensive education programs for citizens and waste management professionals.",
    },
  ];

  const impact = [
    { metric: "2,340 tons", label: "Waste Collected" },
    { metric: "12,450", label: "Citizens Engaged" },
    { metric: "850 kg", label: "CO₂ Reduced" },
    { metric: "245", label: "Green Champions" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-eco text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About WasteWise
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Empowering communities to create sustainable waste management solutions 
            through education, technology, and collaborative action.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-card-eco">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Target className="h-8 w-8 text-eco-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize waste management through innovative technology, comprehensive education, 
                  and community engagement. We strive to create cleaner, healthier environments while 
                  fostering environmental consciousness and sustainable practices at every level of society.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card-eco">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Eye className="h-8 w-8 text-eco-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where waste is minimized, resources are maximized, and every community 
                  has the tools and knowledge to manage their environmental impact responsibly. 
                  We envision a future where sustainable waste management is accessible, efficient, and integral to daily life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-eco-lighter/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do in our mission to create sustainable communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center shadow-card-eco">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-eco-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-primary mb-4">
              Our Impact So Far
            </h2>
            <p className="text-xl text-muted-foreground">
              Real numbers that demonstrate our community's environmental progress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impact.map((stat, index) => (
              <Card key={index} className="text-center shadow-card-eco">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-eco-primary mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-eco-lighter/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-primary mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate professionals dedicated to environmental sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-card-eco">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-eco rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-eco-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-primary mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-muted-foreground">
              Collaborating with organizations that share our environmental vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="shadow-card-eco">
                <CardHeader>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <p className="text-eco-primary font-medium">{partner.type}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-eco text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Recycle className="h-12 w-12" />
            <Leaf className="h-12 w-12" />
            <Globe className="h-12 w-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Environmental Movement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Together, we can create lasting change. Start your journey toward environmental 
            stewardship and become part of our growing community of Green Champions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/training">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-eco-primary text-lg px-8" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;