import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Gift, 
  Star, 
  ShoppingBag, 
  Percent,
  Coffee,
  Utensils,
  Car,
  Leaf,
  Trophy,
  Target
} from "lucide-react";

const Incentives = () => {
  const userPoints = 1240;
  const nextLevelPoints = 2000;
  const progressToNext = (userPoints / nextLevelPoints) * 100;

  const rewards = [
    {
      title: "Coffee Shop Discount",
      description: "15% off at EcoBean Coffee House",
      points: 200,
      category: "Food & Drink",
      icon: Coffee,
      available: true,
      popularity: "High",
      expires: "Dec 31, 2024",
    },
    {
      title: "Restaurant Voucher",
      description: "$10 voucher at Green Garden Restaurant",
      points: 500,
      category: "Food & Drink", 
      icon: Utensils,
      available: true,
      popularity: "Medium",
      expires: "Dec 31, 2024",
    },
    {
      title: "Eco-Friendly Bag",
      description: "Reusable shopping bag made from recycled materials",
      points: 300,
      category: "Products",
      icon: ShoppingBag,
      available: true,
      popularity: "High",
      expires: "Limited Stock",
    },
    {
      title: "Public Transport Credit",
      description: "$5 credit for bus and metro rides",
      points: 250,
      category: "Transport",
      icon: Car,
      available: true,
      popularity: "Medium",
      expires: "Dec 31, 2024",
    },
    {
      title: "Tree Planting Certificate",
      description: "Sponsor a tree planting in your honor",
      points: 800,
      category: "Environmental",
      icon: Leaf,
      available: true,
      popularity: "Low",
      expires: "Ongoing",
    },
    {
      title: "Premium Training Access",
      description: "Unlock advanced waste management courses",
      points: 1000,
      category: "Education",
      icon: Trophy,
      available: false,
      popularity: "High",
      expires: "Ongoing",
    },
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Earn your first 100 points",
      points: 100,
      completed: true,
      reward: "Welcome Badge",
    },
    {
      title: "Getting Started",
      description: "Reach 500 eco-points",
      points: 500,
      completed: true,
      reward: "$5 Voucher",
    },
    {
      title: "Eco Enthusiast",
      description: "Accumulate 1000 eco-points",
      points: 1000,
      completed: true,
      reward: "Special Recognition",
    },
    {
      title: "Green Champion",
      description: "Reach 2000 eco-points",
      points: 2000,
      completed: false,
      reward: "Premium Benefits",
    },
    {
      title: "Environmental Leader",
      description: "Achieve 5000 eco-points",
      points: 5000,
      completed: false,
      reward: "Leadership Program",
    },
  ];

  const recentActivity = [
    { action: "Report submitted", points: "+50", date: "Today" },
    { action: "Training completed", points: "+100", date: "Yesterday" },
    { action: "Community event", points: "+75", date: "2 days ago" },
    { action: "Waste collection", points: "+25", date: "3 days ago" },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Food & Drink": return Coffee;
      case "Products": return ShoppingBag;
      case "Transport": return Car;
      case "Environmental": return Leaf;
      case "Education": return Trophy;
      default: return Gift;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Food & Drink": return "bg-orange-100 text-orange-800";
      case "Products": return "bg-blue-100 text-blue-800";
      case "Transport": return "bg-green-100 text-green-800";
      case "Environmental": return "bg-eco-lighter text-eco-dark";
      case "Education": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-eco-primary mb-4">
          Rewards & Incentives
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Earn eco-points for your environmental actions and redeem them for exciting rewards. 
          Every action counts towards a cleaner, greener future!
        </p>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="col-span-2 shadow-card-eco">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-eco-primary" />
              Your Eco-Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-eco-primary mb-4">
              {userPoints.toLocaleString()}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress to next level</span>
                <span>{nextLevelPoints - userPoints} points needed</span>
              </div>
              <Progress value={progressToNext} className="h-3" />
            </div>
          </CardContent>
        </Card>

        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Trophy className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">8</div>
            <div className="text-muted-foreground">Rewards Earned</div>
          </CardContent>
        </Card>

        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">Level 3</div>
            <div className="text-muted-foreground">Eco Enthusiast</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Available Rewards */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-eco-primary mb-6">Available Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rewards.map((reward, index) => {
              const IconComponent = reward.icon;
              const canAfford = userPoints >= reward.points;
              
              return (
                <Card key={index} className={`shadow-card-eco ${!reward.available ? 'opacity-60' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-5 w-5 text-eco-primary" />
                        <Badge className={getCategoryColor(reward.category)}>
                          {reward.category}
                        </Badge>
                      </div>
                      <Badge className={getPopularityColor(reward.popularity)}>
                        {reward.popularity}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{reward.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{reward.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-eco-primary">
                          {reward.points} points
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {reward.expires}
                        </span>
                      </div>
                      
                      <Button 
                        className={`w-full ${canAfford && reward.available ? 'bg-eco-primary hover:bg-eco-dark' : ''}`}
                        disabled={!canAfford || !reward.available}
                        variant={canAfford && reward.available ? 'default' : 'outline'}
                      >
                        {!reward.available ? 'Coming Soon' : 
                         !canAfford ? `Need ${reward.points - userPoints} more points` : 'Redeem Now'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card className="shadow-card-eco">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${achievement.completed ? 'bg-eco-lighter/30 border-eco-primary' : 'bg-muted/50'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      {achievement.completed && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-eco-primary font-medium">
                        {achievement.points} pts
                      </span>
                      <span className="text-muted-foreground">
                        {achievement.reward}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-card-eco">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <div>
                      <div className="text-sm font-medium">{activity.action}</div>
                      <div className="text-xs text-muted-foreground">{activity.date}</div>
                    </div>
                    <Badge className="bg-eco-lighter text-eco-dark">
                      {activity.points}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card-eco">
            <CardHeader>
              <CardTitle>Earn More Points</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Percent className="h-4 w-4 mr-2" />
                Complete Training (+100)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Gift className="h-4 w-4 mr-2" />
                Submit Report (+50)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Star className="h-4 w-4 mr-2" />
                Join Event (+75)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Incentives;