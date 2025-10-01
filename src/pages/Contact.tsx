import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Users,
  HelpCircle,
  Building
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      details: [
        "123 Green Street",
        "Environmental District",
        "Eco City, EC 12345"
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "General: (555) 123-4567",
        "Emergency: (555) 911-WASTE",
        "Support: (555) 123-HELP"
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@wastewise.eco",
        "support@wastewise.eco",
        "training@wastewise.eco"
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Emergency only"
      ],
    },
  ];

  const departments = [
    {
      name: "General Support",
      description: "Questions about our services, account issues, or general information",
      icon: HelpCircle,
      contact: "support@wastewise.eco",
    },
    {
      name: "Training & Education",
      description: "Course enrollment, certification questions, or training materials",
      icon: Users,
      contact: "training@wastewise.eco",
    },
    {
      name: "Waste Collection",
      description: "Collection schedules, missed pickups, or service requests",
      icon: Building,
      contact: "collections@wastewise.eco",
    },
    {
      name: "Emergency Response",
      description: "Urgent waste issues, hazardous materials, or immediate assistance",
      icon: Phone,
      contact: "(555) 911-WASTE",
    },
  ];

  const faqs = [
    {
      question: "How do I report a waste collection issue?",
      answer: "You can report issues through our Report Waste page, call our support line, or email us with location details and photos.",
    },
    {
      question: "How long do training courses take to complete?",
      answer: "Course duration varies from 45 minutes to 3 hours depending on the complexity. You can complete them at your own pace.",
    },
    {
      question: "How do I earn eco-points and redeem rewards?",
      answer: "Earn points by completing training, submitting reports, participating in events, and proper waste management. Redeem them in our Incentives section.",
    },
    {
      question: "What should I do if I see illegal dumping?",
      answer: "Report it immediately through our Report Waste feature with photos and location details. For hazardous materials, call our emergency line.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-eco text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help with all your waste management needs 
            and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center shadow-card-eco">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-eco-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-eco-lighter/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card-eco">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select relevant department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Support</SelectItem>
                      <SelectItem value="training">Training & Education</SelectItem>
                      <SelectItem value="collection">Waste Collection</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing & Accounts</SelectItem>
                      <SelectItem value="partnership">Partnerships</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your inquiry" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Please provide details about your inquiry or question..."
                    rows={6}
                  />
                </div>

                <Button className="w-full bg-eco-primary hover:bg-eco-dark">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>

            {/* Map and Quick Actions */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="shadow-card-eco">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Find Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-eco-light rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-eco-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Interactive map will be displayed here
                      </p>
                      <Button variant="outline" className="mt-4">
                        Open in Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-card-eco border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <Phone className="h-5 w-5" />
                    Emergency Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For urgent waste issues, hazardous materials, or immediate assistance:
                  </p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">
                      (555) 911-WASTE
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-primary mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-muted-foreground">
              Reach out to the right team for faster assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card key={index} className="shadow-card-eco">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-eco-primary mb-2" />
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{dept.description}</p>
                    <div className="text-sm font-medium text-eco-primary">
                      {dept.contact}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-eco-lighter/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-card-eco">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <Button variant="outline" className="mr-4">
              View All FAQs
            </Button>
            <Button className="bg-eco-primary hover:bg-eco-dark">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;