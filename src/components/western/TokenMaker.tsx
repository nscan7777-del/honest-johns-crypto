import { Button } from "@/components/ui/button";
import badgeyTokenMaker from "@/assets/badgey-token-maker.png";

const TokenMaker = () => {
  return (
    <section className="relative py-20 px-4">
      {/* Subtle rope divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-30" style={{ background: 'var(--gradient-rope)' }}></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img 
              src={badgeyTokenMaker} 
              alt="Badgey holding a blueprint and crypto coin" 
              className="w-full h-auto rounded-2xl shadow-[var(--shadow-western)]"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              The Token Maker That Builds Trust
            </h2>
            <p className="font-playfair text-xl md:text-2xl text-muted-foreground italic">
              Launch your token in minutes — safely and transparently.
            </p>
            <p className="font-inter text-lg text-foreground/80 leading-relaxed">
              Honest John's Token Maker lets anyone create a custom token with built-in security and audit readiness. 
              Every token includes optional safety features like revoke, freeze, mint, and update — so you launch with confidence in the Wild West of crypto.
            </p>
            <Button 
              variant="outline-gold" 
              size="default" 
              className="font-semibold"
              asChild
            >
              <a href="https://app.honestjohnscrypto.world/token" target="_blank" rel="noopener noreferrer">
                Build My Token
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

export default TokenMaker;
