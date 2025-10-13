import { Shield, TrendingUp, Users, BookOpen, Zap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Transparent Analysis",
    description: "No hidden agendas. Just honest, data-driven crypto insights backed by research.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Real-time market analysis and trends to keep you ahead of the curve.",
  },
  {
    icon: BookOpen,
    title: "Education First",
    description: "Learn crypto fundamentals with easy-to-understand guides and resources.",
  },
  {
    icon: Users,
    title: "Thriving Community",
    description: "Join thousands of crypto enthusiasts sharing knowledge and experiences.",
  },
  {
    icon: Zap,
    title: "Fast Updates",
    description: "Get instant alerts on major market movements and breaking crypto news.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Years of accurate predictions and trusted insights in the crypto space.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Honest John's
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Your trusted partner in navigating the complex world of cryptocurrency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
