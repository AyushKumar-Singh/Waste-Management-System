import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Trophy, 
  Star, 
  Users, 
  TrendingUp,
  Medal,
  Crown,
  Award,
  Target
} from "lucide-react";

const GreenChampions = () => {
  const leaderboard = [
    {
      rank: 1,
      name: "Sarah Johnson",
      points: 2850,
      badges: 12,
      reportsSubmitted: 45,
      wasteCollected: "250 kg",
      level: "Eco Master",
      avatar: "SJ",
      trend: "up",
    },
    {
      rank: 2,
      name: "Michael Chen",
      points: 2640,
      badges: 10,
      reportsSubmitted: 38,
      wasteCollected: "220 kg",
      level: "Green Guardian",
      avatar: "MC",
      trend: "up",
    },
    {
      rank: 3,
      name: "Emma Rodriguez",
      points: 2420,
      badges: 9,
      reportsSubmitted: 42,
      wasteCollected: "195 kg",
      level: "Eco Warrior",
      avatar: "ER",
      trend: "same",
    },
    {
      rank: 4,
      name: "David Kim",
      points: 2180,
      badges: 8,
      reportsSubmitted: 31,
      wasteCollected: "180 kg",
      level: "Green Advocate",
      avatar: "DK",
      trend: "down",
    },
    {
      rank: 5,
      name: "Lisa Thompson",
      points: 1950,
      badges: 7,
      reportsSubmitted: 29,
      wasteCollected: "165 kg",
      level: "Eco Friend",
      avatar: "LT",
      trend: "up",
    },
  ];

  const achievements = [
    {
      title: "First Report",
      description: "Submit your first waste report",
      icon: "🏁",
      rarity: "Common",
      earned: true,
    },
    {
      title: "Waste Warrior",
      description: "Collect 100kg of waste",
      icon: "⚔️",
      rarity: "Uncommon",
      earned: true,
    },
    {
      title: "Community Leader",
      description: "Help organize 5 cleanup events",
      icon: "👑",
      rarity: "Rare",
      earned: false,
    },
    {
      title: "Eco Master",
      description: "Reach 2000 eco-points",
      icon: "🌟",
      rarity: "Epic",
      earned: true,
    },
    {
      title: "Green Guru",
      description: "Complete all training courses",
      icon: "🧙‍♂️",
      rarity: "Legendary",
      earned: false,
    },
    {
      title: "Planet Protector",
      description: "Prevent 1000kg of CO₂ emissions",
      icon: "🌍",
      rarity: "Legendary",
      earned: false,
    },
  ];

  const committees = [
    {
      name: "Downtown Clean Team",
      members: 24,
      area: "Downtown District",
      leader: "Sarah Johnson",
      nextEvent: "Jan 20, 2024",
      description: "Focused on keeping the downtown area clean and organized",
    },
    {
      name: "Residential Recyclers",
      members: 18,
      area: "Residential Zones",
      leader: "Michael Chen",
      nextEvent: "Jan 22, 2024",
      description: "Promoting recycling awareness in residential communities",
    },
    {
      name: "Industrial Waste Watchers",
      members: 12,
      area: "Industrial District",
      leader: "Emma Rodriguez",
      nextEvent: "Jan 25, 2024",
      description: "Monitoring industrial waste compliance and safety",
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Award className="h-5 w-5 text-amber-600" />;
      default: return <Trophy className="h-5 w-5 text-eco-primary" />;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-gray-100 text-gray-800";
      case "Uncommon": return "bg-green-100 text-green-800";
      case "Rare": return "bg-blue-100 text-blue-800";
      case "Epic": return "bg-purple-100 text-purple-800";
      case "Legendary": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down": return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
      default: return <div className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-eco-primary mb-4">
          Green Champions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join our community of environmental leaders! Earn points, unlock achievements, 
          and compete with others to make a positive impact on our environment.
        </p>
      </div>

      {/* Personal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Star className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">1,240</div>
            <div className="text-muted-foreground">Your Eco-Points</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Trophy className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">#8</div>
            <div className="text-muted-foreground">Your Rank</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Award className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">5</div>
            <div className="text-muted-foreground">Badges Earned</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card-eco">
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-eco-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-primary mb-2">760</div>
            <div className="text-muted-foreground">Points to Next Level</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Leaderboard */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-eco-primary mb-6">Monthly Leaderboard</h2>
          <div className="space-y-4">
            {leaderboard.map((champion) => (
              <Card key={champion.rank} className="shadow-card-eco">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {getRankIcon(champion.rank)}
                        <span className="text-2xl font-bold">#{champion.rank}</span>
                      </div>
                      
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-eco-lighter text-eco-dark">
                          {champion.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <h3 className="font-semibold">{champion.name}</h3>
                        <Badge className="bg-eco-lighter text-eco-dark">
                          {champion.level}
                        </Badge>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-eco-primary">
                          {champion.points.toLocaleString()}
                        </span>
                        {getTrendIcon(champion.trend)}
                      </div>
                      <div className="text-sm text-muted-foreground">points</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border text-center">
                    <div>
                      <div className="text-lg font-semibold">{champion.badges}</div>
                      <div className="text-sm text-muted-foreground">Badges</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{champion.reportsSubmitted}</div>
                      <div className="text-sm text-muted-foreground">Reports</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{champion.wasteCollected}</div>
                      <div className="text-sm text-muted-foreground">Collected</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold text-eco-primary mb-6">Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`shadow-card-eco ${achievement.earned ? 'border-eco-primary' : 'opacity-60'}`}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <Badge className={getRarityColor(achievement.rarity)}>
                          {achievement.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      {achievement.earned && (
                        <Badge className="mt-2 bg-green-100 text-green-800">
                          ✓ Earned
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Committees */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-eco-primary mb-6">Green Committees</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {committees.map((committee, index) => (
            <Card key={index} className="shadow-card-eco">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{committee.name}</span>
                  <Users className="h-5 w-5 text-eco-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{committee.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Leader:</span>
                    <span>{committee.leader}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Members:</span>
                    <span>{committee.members}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Area:</span>
                    <span className="text-sm">{committee.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next Event:</span>
                    <span className="text-sm">{committee.nextEvent}</span>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-eco-primary hover:bg-eco-dark">
                  Join Committee
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreenChampions;