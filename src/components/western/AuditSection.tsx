import { Shield } from "lucide-react";
import honScoreBadge from "@/assets/hon-score-badge.png";

const AuditSection = () => {
  return (
    <section className="py-20 px-4 bg-[hsl(var(--background-secondary))]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Badge Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <img 
                src={honScoreBadge} 
                alt="HON Score Badge" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-inter font-semibold text-primary">Audit Protection</span>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground leading-tight">
              The Badge You Can Trust
            </h2>

            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              More than just a score—this is your shield in the Wild West of crypto. Our comprehensive audits analyze smart contract security, ownership verification, and liquidity safeguards.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <p className="font-inter text-foreground">Transparent security scoring</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <p className="font-inter text-foreground">Real-time contract analysis</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <p className="font-inter text-foreground">Verified by industry experts</p>
              </div>
            </div>

            <p className="font-inter text-base text-muted-foreground leading-relaxed italic mt-6 pt-6 border-t border-border/30">
              The HON Score automatically reflects your project's trust level — from liquidity safety to contract security and verified ownership. 
              Projects with strong safety measures and verified audits earn the highest trust tier, displaying the full Honest John's Gold Badge of Approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
