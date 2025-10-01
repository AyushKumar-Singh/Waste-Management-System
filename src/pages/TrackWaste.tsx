import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Truck, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Navigation,
  Calendar
} from "lucide-react";

const TrackWaste = () => {
  const vehicles = [
    {
      id: "WM-001",
      driver: "John Smith",
      location: "Downtown Area",
      status: "Active",
      collectionProgress: 75,
      estimatedCompletion: "2:30 PM",
      route: "Route A",
      lastUpdate: "5 min ago",
    },
    {
      id: "WM-002",
      driver: "Maria Garcia",
      location: "Residential Zone B",
      status: "Active",
      collectionProgress: 45,
      estimatedCompletion: "4:15 PM",
      route: "Route B",
      lastUpdate: "3 min ago",
    },
    {
      id: "WM-003",
      driver: "Ahmed Hassan",
      location: "Industrial District",
      status: "Completed",
      collectionProgress: 100,
      estimatedCompletion: "Completed",
      route: "Route C",
      lastUpdate: "1 hr ago",
    },
    {
      id: "WM-004",
      driver: "Lisa Johnson",
      location: "Commercial Area",
      status: "Delayed",
      collectionProgress: 20,
      estimatedCompletion: "5:45 PM",
      route: "Route D",
      lastUpdate: "10 min ago",
    },
  ];

  const schedules = [
    { area: "Downtown", time: "8:00 AM - 12:00 PM", status: "Completed", day: "Today" },
    { area: "Residential Zone A", time: "9:00 AM - 1:00 PM", status: "Completed", day: "Today" },
    { area: "Residential Zone B", time: "1:00 PM - 5:00 PM", status: "In Progress", day: "Today" },
    { area: "Industrial District", time: "6:00 AM - 10:00 AM", status: "Completed", day: "Today" },
    { area: "Commercial Area", time: "2:00 PM - 6:00 PM", status: "Delayed", day: "Today" },
    { area: "Suburban Area", time: "8:00 AM - 12:00 PM", status: "Scheduled", day: "Tomorrow" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": 
      case "In Progress": 
        return "bg-blue-100 text-blue-800";
      case "Completed": 
        return "bg-green-100 text-green-800";
      case "Delayed": 
        return "bg-red-100 text-red-800";
      case "Scheduled": 
        return "bg-yellow-100 text-yellow-800";
      default: 
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
      case "In Progress":
        return <Truck className="h-4 w-4" />;
      case "Completed":
        return <CheckCircle className="h-4 w-4" />;
      case "Delayed":
        return <AlertCircle className="h-4 w-4" />;
      case "Scheduled":
        return <Clock className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-eco-primary mb-4">
          Track Waste Collection
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Monitor real-time waste collection vehicles, view collection schedules, 
          and track progress across all routes in your area.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Truck className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">4</div>
            <div className="text-muted-foreground">Active Vehicles</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <MapPin className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">12</div>
            <div className="text-muted-foreground">Areas Covered</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <CheckCircle className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">8</div>
            <div className="text-muted-foreground">Completed Routes</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Clock className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">3.2</div>
            <div className="text-muted-foreground">Avg. Hours/Route</div>
          </CardContent>
        </Card>
      </div>

      {/* Live Map Placeholder */}
      <Card className="mb-12 shadow-card-eco">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5" />
            Live Vehicle Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-eco-light rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-eco-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-eco-primary mb-2">
                Interactive Map Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Real-time vehicle tracking and route visualization will be available here
              </p>
              <Button className="mt-4 bg-eco-primary hover:bg-eco-dark">
                Enable Location Services
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vehicle Status */}
        <div>
          <h2 className="text-2xl font-bold text-eco-primary mb-6">Vehicle Status</h2>
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="shadow-card-eco">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{vehicle.id}</CardTitle>
                      <p className="text-muted-foreground">Driver: {vehicle.driver}</p>
                    </div>
                    <Badge className={getStatusColor(vehicle.status)}>
                      {getStatusIcon(vehicle.status)}
                      <span className="ml-1">{vehicle.status}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>{vehicle.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Route:</span>
                      <span>{vehicle.route}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Completion:</span>
                      <span>{vehicle.estimatedCompletion}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Update:</span>
                      <span>{vehicle.lastUpdate}</span>
                    </div>
                    
                    {vehicle.status === "Active" && (
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{vehicle.collectionProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-eco-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${vehicle.collectionProgress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collection Schedule */}
        <div>
          <h2 className="text-2xl font-bold text-eco-primary mb-6">Collection Schedule</h2>
          <div className="space-y-4">
            {schedules.map((schedule, index) => (
              <Card key={index} className="shadow-card-eco">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold">{schedule.area}</h3>
                      <p className="text-muted-foreground">{schedule.time}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(schedule.status)}>
                        {getStatusIcon(schedule.status)}
                        <span className="ml-1">{schedule.status}</span>
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{schedule.day}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 shadow-card-eco">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                View Full Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access complete weekly and monthly collection schedules for all areas
              </p>
              <Button variant="outline" className="w-full">
                Open Calendar View
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrackWaste;