import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import badgeyAudit from "@/assets/badgey-audit.png";

const AuditFeature = () => {
  const features = [
    "Automated + expert review",
    "Ownership & permissions verification",
    "Risk categories with fixes",
    "Shareable PDF report"
  ];

  return (
    <section className="relative py-20 px-4">
      {/* Subtle rope divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-30" style={{ background: 'var(--gradient-rope)' }}></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img 
              src={badgeyAudit} 
              alt="Badgey examining a contract with magnifying glass" 
              className="w-full h-auto rounded-2xl shadow-[var(--shadow-western)]"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Audit Your Contract with HON Score
            </h2>
            <p className="font-playfair text-xl md:text-2xl text-muted-foreground italic">
              Clear, actionable security — from scan to report.
            </p>
            <p className="font-inter text-lg text-foreground/80 leading-relaxed">
              Our audit pipeline analyzes smart contracts for critical risks, verifies ownership and permissions, 
              and summarizes findings into a transparent HON Score. Get an actionable report you can share with your community.
            </p>
            
            {/* Feature bullets */}
            <ul className="space-y-3 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-lg text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant="outline-gold" 
              size="default" 
              className="font-semibold"
              asChild
            >
              <a href="https://app.honestjohnscrypto.world/audit" target="_blank" rel="noopener noreferrer">
                Get My Audit
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle rope divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-30" style={{ background: 'var(--gradient-rope)' }}></div>
    </section>
  );
};

export default AuditFeature;
