import { Button } from "@/components/ui/button";
import { Copy, Wallet } from "lucide-react";
import badgeyMascot from "@/assets/badgey-mascot.png";
import { toast } from "sonner";

const Hero = () => {
  const contractAddress = "0x1234...5678";

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied!");
  };

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Subtle rope divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-30" style={{ background: 'var(--gradient-rope)' }}></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badgey Mascot */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <img 
              src={badgeyMascot} 
              alt="Badgey - Honest John's Crypto World Mascot" 
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              HONEST JOHN'S<br />CRYPTO WORLD
            </h1>
            <p className="font-playfair text-2xl md:text-3xl text-muted-foreground italic">
              Taming the Wild West of Crypto
            </p>
          </div>

          {/* Sub-headline */}
          <p className="font-inter text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Security-First Architecture for the Next Generation of Honest Projects
          </p>

          {/* Contract Address */}
          <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-3 shadow-[var(--shadow-western)]">
            <code className="font-mono text-sm md:text-base text-foreground">{contractAddress}</code>
            <button
              onClick={copyAddress}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Copy contract address"
            >
              <Copy className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* CTA Button */}
          <Button variant="gold" size="lg" className="text-lg px-8 py-6 mt-4">
            <Wallet className="w-5 h-5" />
            Connect Wallet
          </Button>
        </div>
      </div>

      {/* Subtle rope divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-30" style={{ background: 'var(--gradient-rope)' }}></div>
    </section>
  );
};

export default Hero;
