import { Button } from "@/components/ui/button";
import badgeyWebsiteBuilder from "@/assets/badgey-website-builder.png";

const WebsiteBuilder = () => {
  return (
    <section className="relative py-20 px-4">
      {/* Subtle rope divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-30" style={{ background: 'var(--gradient-rope)' }}></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img 
              src={badgeyWebsiteBuilder} 
              alt="Badgey at a desk designing a website" 
              className="w-full h-auto rounded-2xl shadow-[var(--shadow-western)]"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Your Website, Your Story
            </h2>
            <p className="font-playfair text-xl md:text-2xl text-muted-foreground italic">
              Create a professional site — no code required.
            </p>
            <p className="font-inter text-lg text-foreground/80 leading-relaxed">
              Our Website Builder gives every idea a home. Generate a beautiful website for anything — small businesses, creators, communities, nonprofits, portfolios, and crypto projects — using simple or long AI prompts. Instantly brand it with your logo and colors, add social links (Telegram, X, Instagram, YouTube), and launch with a fast, mobile-first design that builds trust from day one.
            </p>
            <Button 
              variant="outline-gold" 
              size="default" 
              className="font-semibold"
              asChild
            >
              <a href="https://app.honestjohnscrypto.world/builder" target="_blank" rel="noopener noreferrer">
                Build My Website
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

export default WebsiteBuilder;
