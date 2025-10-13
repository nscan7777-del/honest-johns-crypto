import { Wrench, SearchCheck, Globe } from "lucide-react";

const steps = [
  {
    icon: Wrench,
    title: "Build",
    description: "Launch your token with confidence using our secure infrastructure",
  },
  {
    icon: SearchCheck,
    title: "Audit",
    description: "Get comprehensive security audits with transparent HON Score ratings",
  },
  {
    icon: Globe,
    title: "Website",
    description: "Create your professional project website with our easy builder",
  },
];

const BuildAuditWebsite = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Your Path to a Trusted Launch
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your token, get it audited, and create your own project website—all in one honest ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-8 bg-card border-2 border-primary/20 rounded-2xl shadow-[var(--shadow-western)] hover:border-primary/40 transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-playfair font-bold text-lg shadow-[var(--shadow-western)]">
                {index + 1}
              </div>

              <div className="mt-4 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="font-inter text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildAuditWebsite;
