import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Search, 
  Star,
  Truck,
  Shield,
  Recycle
} from "lucide-react";
import { useState } from "react";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "All Products", count: 24 },
    { name: "Waste Bins", count: 8 },
    { name: "Compost Kits", count: 6 },
    { name: "PPE & Safety", count: 7 },
    { name: "Recycling Tools", count: 3 },
  ];

  const products = [
    {
      id: 1,
      name: "Smart Waste Bin - 50L",
      description: "IoT-enabled waste bin with fill-level sensors and automatic notifications",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.8,
      reviews: 234,
      category: "Waste Bins",
      badge: "Smart Tech",
      inStock: true,
      image: "🗑️",
    },
    {
      id: 2,
      name: "Home Composting Kit",
      description: "Complete composting solution for organic waste management at home",
      price: 89.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 156,
      category: "Compost Kits",
      badge: "Eco-Friendly",
      inStock: true,
      image: "🌱",
    },
    {
      id: 3,
      name: "Professional Safety Gloves",
      description: "Heavy-duty gloves for waste collection workers with cut resistance",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.9,
      reviews: 342,
      category: "PPE & Safety",
      badge: "Professional",
      inStock: true,
      image: "🧤",
    },
    {
      id: 4,
      name: "Recycling Sorting Bins Set",
      description: "Color-coded bin set for easy waste segregation (3-bin system)",
      price: 199.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 89,
      category: "Waste Bins",
      badge: "Best Seller",
      inStock: true,
      image: "♻️",
    },
    {
      id: 5,
      name: "Organic Waste Composter",
      description: "Electric composter that reduces organic waste by up to 80%",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.5,
      reviews: 67,
      category: "Compost Kits",
      badge: "Electric",
      inStock: false,
      image: "⚡",
    },
    {
      id: 6,
      name: "Reflective Safety Vest",
      description: "High-visibility safety vest for waste collection workers",
      price: 19.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 278,
      category: "PPE & Safety",
      badge: "Safety First",
      inStock: true,
      image: "🦺",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Smart Tech": return "bg-blue-100 text-blue-800";
      case "Eco-Friendly": return "bg-green-100 text-green-800";
      case "Professional": return "bg-purple-100 text-purple-800";
      case "Best Seller": return "bg-yellow-100 text-yellow-800";
      case "Electric": return "bg-orange-100 text-orange-800";
      case "Safety First": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-eco-primary mb-4">
          Marketplace
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Shop for sustainable waste management products. From smart bins to safety equipment, 
          find everything you need for effective waste management.
        </p>
      </div>

      {/* Search and Features */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="text-center shadow-card-eco">
            <CardContent className="pt-6">
              <Truck className="h-6 w-6 text-eco-primary mx-auto mb-2" />
              <div className="font-semibold">Free Delivery</div>
              <div className="text-sm text-muted-foreground">On orders over $100</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card-eco">
            <CardContent className="pt-6">
              <Shield className="h-6 w-6 text-eco-primary mx-auto mb-2" />
              <div className="font-semibold">Quality Guaranteed</div>
              <div className="text-sm text-muted-foreground">Certified products only</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card-eco">
            <CardContent className="pt-6">
              <Recycle className="h-6 w-6 text-eco-primary mx-auto mb-2" />
              <div className="font-semibold">Eco-Friendly</div>
              <div className="text-sm text-muted-foreground">Sustainable materials</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Categories Sidebar */}
        <div className="lg:w-1/4">
          <Card className="shadow-card-eco">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? "bg-eco-primary text-white"
                        : "hover:bg-eco-lighter/30"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className={`text-sm ${
                        selectedCategory === category.name ? "text-white" : "text-muted-foreground"
                      }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-eco-primary">
              {selectedCategory}
            </h2>
            <div className="text-muted-foreground">
              {filteredProducts.length} products found
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-eco transition-all duration-300 shadow-card-eco">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getBadgeColor(product.badge)}>
                      {product.badge}
                    </Badge>
                    {!product.inStock && (
                      <Badge variant="outline" className="text-red-600 border-red-600">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                  <div className="text-4xl text-center mb-4">{product.image}</div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-eco-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${product.inStock ? 'bg-eco-primary hover:bg-eco-dark' : ''}`}
                    disabled={!product.inStock}
                    variant={product.inStock ? 'default' : 'outline'}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <Card className="text-center py-12 shadow-card-eco">
              <CardContent>
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Products Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or browse different categories
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;