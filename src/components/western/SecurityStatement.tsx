import { Shield } from "lucide-react";

const SecurityStatement = () => {
  return (
    <section className="py-16 px-4 bg-[#fefaf3]">
      <div className="container mx-auto max-w-4xl">
        {/* Divider line */}
        <div className="w-full h-px bg-primary/30 mb-12"></div>
        
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#3b2b1b]">
              Security You Can Count On
            </h2>
          </div>
          
          <p className="font-inter text-lg text-[#2a2a2a] leading-relaxed max-w-3xl mx-auto">
            Honest John's Crypto World is built on a security-first foundation.  
            We continuously upgrade our infrastructure to use the newest and most advanced safety protocols available —  
            protecting your projects, your data, and your peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityStatement;
