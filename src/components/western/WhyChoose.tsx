import { Shield, Lock, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "TRUST",
    description: "Transparent audits",
  },
  {
    icon: Lock,
    title: "SAFETY",
    description: "Smart contract protection and secure launches",
  },
  {
    icon: Lightbulb,
    title: "SIMPLICITY",
    description: "Verified ownership",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 px-4 bg-[hsl(var(--background-secondary))]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Why Choose Honest John's
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-8 bg-card border border-border/50 rounded-2xl shadow-[var(--shadow-western)] hover:shadow-[var(--shadow-gold)] transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-primary/10 rounded-full">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="font-inter text-lg text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
