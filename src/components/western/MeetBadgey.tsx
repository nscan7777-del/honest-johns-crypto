import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import badgeyMascot from "@/assets/badgey-mascot.png";

const MeetBadgey = () => {
  return (
    <section className="py-20 px-4 bg-[hsl(var(--background-secondary))]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Meet Badgey — Your AI Assistant
            </h2>

            <p className="font-playfair text-2xl text-primary italic">
              Need a hand? Badgey's got your back.
            </p>

            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Our AI-powered cowboy assistant is ready to help you build, audit, and design your project website. 
              Ask anything — Badgey's here 24/7 with honest answers and friendly advice.
            </p>

            <Button 
              variant="gold" 
              size="lg" 
              className="text-lg px-8 py-6 font-bold mt-4"
              asChild
            >
              <a href="https://app.honestjohnscrypto.world/chat" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat with Badgey
              </a>
            </Button>
          </div>

          {/* Right: Badgey Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-80 h-80">
              <img 
                src={badgeyMascot} 
                alt="Badgey - Your AI Assistant" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              {/* Speech bubble decoration */}
              <div className="absolute -top-4 -right-4 bg-primary/10 border-2 border-primary/20 rounded-full p-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBadgey;
