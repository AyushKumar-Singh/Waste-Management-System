import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  BookOpen, 
  ShoppingCart, 
  MapPin, 
  AlertTriangle, 
  Users, 
  Gift, 
  Settings,
  Info,
  Phone,
  Menu,
  X,
  UserPlus
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Training", href: "/training", icon: BookOpen },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
    { name: "Track Waste", href: "/track", icon: MapPin },
    { name: "Report Waste", href: "/report", icon: AlertTriangle },
    { name: "Green Champions", href: "/champions", icon: Users },
    { name: "Incentives", href: "/incentives", icon: Gift },
    { name: "Admin", href: "/admin", icon: Settings },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-eco rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WM</span>
            </div>
            <span className="text-xl font-bold text-eco-primary">WasteWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <nav className="flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="sm"
                    asChild
                    className={isActive(item.href) ? "bg-eco-primary hover:bg-eco-dark" : "hover:bg-eco-lighter/50"}
                  >
                    <Link to={item.href} className="flex items-center space-x-2">
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                );
              })}
            </nav>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-eco-primary text-eco-primary hover:bg-eco-primary hover:text-white"
            >
              <a href="/signup.html" className="flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="grid grid-cols-2 gap-2 mb-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="sm"
                    asChild
                    className={`justify-start ${isActive(item.href) ? "bg-eco-primary hover:bg-eco-dark" : "hover:bg-eco-lighter/50"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to={item.href} className="flex items-center space-x-2">
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                );
              })}
            </nav>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full border-eco-primary text-eco-primary hover:bg-eco-primary hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="/signup.html" className="flex items-center justify-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;