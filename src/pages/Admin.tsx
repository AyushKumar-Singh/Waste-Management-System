import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Users, 
  FileText, 
  AlertTriangle,
  TrendingUp,
  Download,
  Filter,
  Calendar,
  DollarSign,
  MapPin,
  Book
} from "lucide-react";

const Admin = () => {
  const dashboardStats = [
    {
      title: "Total Collections",
      value: "2,340",
      unit: "tons",
      change: "+12%",
      trend: "up",
      icon: BarChart3,
    },
    {
      title: "Active Citizens",
      value: "12,450",
      unit: "users",
      change: "+8%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Reports Filed",
      value: "1,890",
      unit: "reports",
      change: "+15%",
      trend: "up",
      icon: FileText,
    },
    {
      title: "Penalties Issued",
      value: "156",
      unit: "cases",
      change: "-5%",
      trend: "down",
      icon: AlertTriangle,
    },
  ];

  const recentReports = [
    {
      id: "RP-001",
      type: "Illegal Dumping",
      location: "Main Street & 5th Ave",
      status: "Under Investigation",
      priority: "High",
      assignedTo: "Inspector John",
      date: "2024-01-15",
    },
    {
      id: "RP-002",
      type: "Overflowing Bin",
      location: "Central Park",
      status: "Resolved",
      priority: "Medium",
      assignedTo: "Team Alpha",
      date: "2024-01-14",
    },
    {
      id: "RP-003",
      type: "Hazardous Material",
      location: "Industrial Zone B",
      status: "In Progress",
      priority: "Critical",
      assignedTo: "Hazmat Team",
      date: "2024-01-13",
    },
  ];

  const trainingRecords = [
    {
      course: "Waste Segregation Basics",
      completions: 1250,
      avgScore: 87,
      passingRate: 94,
      category: "Citizens",
    },
    {
      course: "Safety Protocols",
      completions: 340,
      avgScore: 92,
      passingRate: 98,
      category: "Workers", 
    },
    {
      course: "Community Composting",
      completions: 890,
      avgScore: 85,
      passingRate: 91,
      category: "Citizens",
    },
  ];

  const penalties = [
    {
      id: "PEN-001",
      violationType: "Illegal Dumping",
      location: "Downtown Area",
      amount: "$500",
      status: "Paid",
      issueDate: "2024-01-10",
      dueDate: "2024-02-10",
    },
    {
      id: "PEN-002",
      violationType: "Improper Segregation",
      location: "Residential Zone C",
      amount: "$100",
      status: "Pending",
      issueDate: "2024-01-12",
      dueDate: "2024-02-12",
    },
    {
      id: "PEN-003",
      violationType: "Container Violation",
      location: "Commercial District",
      amount: "$250",
      status: "Overdue",
      issueDate: "2024-01-05",
      dueDate: "2024-02-05",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved": 
      case "Paid": 
        return "bg-green-100 text-green-800";
      case "In Progress": 
      case "Under Investigation": 
      case "Pending": 
        return "bg-yellow-100 text-yellow-800";
      case "Overdue": 
        return "bg-red-100 text-red-800";
      default: 
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-eco-primary mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Comprehensive waste management system administration
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-eco-primary hover:bg-eco-dark">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-card-eco">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.title}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-eco-primary">
                        {stat.value}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {stat.unit}
                      </span>
                    </div>
                    <div className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last month
                    </div>
                  </div>
                  <Icon className="h-8 w-8 text-eco-primary" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs Content */}
      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="penalties">Penalties</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card className="shadow-card-eco">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Waste Reports Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{report.id} - {report.type}</h3>
                        <p className="text-muted-foreground text-sm">{report.location}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getPriorityColor(report.priority)}>
                          {report.priority}
                        </Badge>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Assigned to:</span>
                        <span className="ml-2">{report.assignedTo}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Date:</span>
                        <span className="ml-2">{report.date}</span>
                      </div>
                      <div className="text-right">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Training Tab */}
        <TabsContent value="training">
          <Card className="shadow-card-eco">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Training Records & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainingRecords.map((record, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{record.course}</h3>
                        <Badge className={record.category === 'Citizens' ? 'bg-eco-lighter text-eco-dark' : 'bg-blue-100 text-blue-800'}>
                          {record.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-eco-primary">{record.completions}</div>
                        <div className="text-muted-foreground">Completions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-eco-primary">{record.avgScore}%</div>
                        <div className="text-muted-foreground">Avg Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-eco-primary">{record.passingRate}%</div>
                        <div className="text-muted-foreground">Pass Rate</div>
                      </div>
                      <div className="text-right">
                        <Button variant="outline" size="sm">
                          View Analytics
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Penalties Tab */}
        <TabsContent value="penalties">
          <Card className="shadow-card-eco">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Penalties & Violations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {penalties.map((penalty) => (
                  <div key={penalty.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{penalty.id} - {penalty.violationType}</h3>
                        <p className="text-muted-foreground text-sm">{penalty.location}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="text-xl font-bold text-eco-primary">{penalty.amount}</span>
                        <Badge className={getStatusColor(penalty.status)}>
                          {penalty.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Issue Date:</span>
                        <span className="ml-2">{penalty.issueDate}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Due Date:</span>
                        <span className="ml-2">{penalty.dueDate}</span>
                      </div>
                      <div className="text-right">
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card-eco">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Collection Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-eco-light rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-eco-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive charts and analytics will be displayed here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-eco">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Geographic Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-eco-light rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-eco-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Map visualization of waste data will be shown here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 shadow-card-eco">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Performance Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-eco-light rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-eco-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Comprehensive performance trends and KPI tracking
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;