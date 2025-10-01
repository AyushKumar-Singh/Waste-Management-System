import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  MapPin, 
  Upload, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye
} from "lucide-react";
import { useState } from "react";

const ReportWaste = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const recentReports = [
    {
      id: "RP-001",
      type: "Illegal Dumping",
      location: "Main Street & 5th Ave",
      status: "Under Investigation",
      date: "2024-01-15",
      priority: "High",
    },
    {
      id: "RP-002", 
      type: "Overflowing Bin",
      location: "Central Park Entrance",
      status: "Resolved",
      date: "2024-01-14",
      priority: "Medium",
    },
    {
      id: "RP-003",
      type: "Hazardous Material",
      location: "Industrial Zone B",
      status: "In Progress",
      date: "2024-01-13",
      priority: "Critical",
    },
    {
      id: "RP-004",
      type: "Missed Collection",
      location: "Residential Area C",
      status: "Resolved",
      date: "2024-01-12",
      priority: "Low",
    },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedImages(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Under Investigation": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved": return <CheckCircle className="h-4 w-4" />;
      case "In Progress": return <Clock className="h-4 w-4" />;
      case "Under Investigation": return <Eye className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-eco-primary mb-4">
          Report Waste Issues
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Help keep our community clean by reporting waste management issues. 
          Upload photos with location data to help us respond quickly and effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Report Form */}
        <div>
          <Card className="shadow-card-eco">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Submit New Report
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="issue-type">Issue Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="illegal-dumping">Illegal Dumping</SelectItem>
                    <SelectItem value="overflowing-bin">Overflowing Bin</SelectItem>
                    <SelectItem value="missed-collection">Missed Collection</SelectItem>
                    <SelectItem value="hazardous-material">Hazardous Material</SelectItem>
                    <SelectItem value="damaged-bin">Damaged Bin</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="flex gap-2">
                  <Input 
                    id="location" 
                    placeholder="Enter address or landmark"
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Or click the map icon to use your current location
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Provide detailed description of the issue..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Minor issue</SelectItem>
                    <SelectItem value="medium">Medium - Moderate concern</SelectItem>
                    <SelectItem value="high">High - Significant problem</SelectItem>
                    <SelectItem value="critical">Critical - Immediate attention needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Upload Photos</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Click to upload photos or drag and drop
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      PNG, JPG up to 10MB each
                    </p>
                  </label>
                </div>

                {selectedImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {selectedImages.map((file, index) => (
                      <div key={index} className="relative">
                        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                          <Camera className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-1 right-1"
                          onClick={() => removeImage(index)}
                        >
                          ×
                        </Button>
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                          {file.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Information (Optional)</Label>
                <Input 
                  id="contact" 
                  placeholder="Email or phone number for updates"
                />
              </div>

              <Button className="w-full bg-eco-primary hover:bg-eco-dark">
                Submit Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <div>
          <h2 className="text-2xl font-bold text-eco-primary mb-6">Recent Reports</h2>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <Card key={report.id} className="shadow-card-eco">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{report.id}</CardTitle>
                      <p className="text-muted-foreground">{report.type}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getStatusColor(report.status)}>
                        {getStatusIcon(report.status)}
                        <span className="ml-1">{report.status}</span>
                      </Badge>
                      <Badge className={getPriorityColor(report.priority)}>
                        {report.priority}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-sm">{report.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reported:</span>
                      <span className="text-sm">{report.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <Card className="mt-6 shadow-card-eco">
            <CardHeader>
              <CardTitle>Your Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-eco-primary">12</div>
                  <div className="text-sm text-muted-foreground">Reports Submitted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-eco-primary">9</div>
                  <div className="text-sm text-muted-foreground">Issues Resolved</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Thank you for helping keep our community clean! 
                  Your reports make a real difference.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportWaste;