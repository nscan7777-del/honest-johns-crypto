import { Sparkles, Rocket, Wallet2 } from "lucide-react";

const utilities = [
  {
    icon: Rocket,
    title: "Launchpad",
    description: "Fair-launch platform with built-in safety features.",
    status: "In Development",
  },
  {
    icon: Wallet2,
    title: "Honest Wallet",
    description: "Your secure gateway to the Honest ecosystem.",
    status: "In Development",
  },
];

const FutureUtilities = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            New Utilities on the Horizon
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            We're continually rolling out new tools to help your project grow — next up: our Launchpad and the Honest Wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {utilities.map((utility, index) => (
            <div 
              key={index}
              className="relative p-8 bg-card border border-border rounded-2xl shadow-[var(--shadow-western)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 overflow-hidden group"
            >
              {/* Status badge */}
              {utility.status && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="font-inter text-xs font-semibold text-primary">{utility.status}</span>
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <utility.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                {utility.title}
              </h3>
              <p className="font-inter text-base text-muted-foreground leading-relaxed">
                {utility.description}
              </p>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
            </div>
          ))}
        </div>

        <p className="font-inter text-base md:text-lg text-[#3b2b1b] italic font-medium text-center max-w-4xl mx-auto mt-12">
          …and that's just the beginning. As Honest John's Crypto World grows, new utilities and features will continue to be added — each designed to make launching and managing projects safer, smarter, and more powerful.
        </p>
      </div>
    </section>
  );
};

export default FutureUtilities;
