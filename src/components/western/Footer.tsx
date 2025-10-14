import { Send, Twitter, FileText, Shield, BookOpen, UserCheck, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { icon: Send, label: "Telegram", href: "#" },
    { icon: Twitter, label: "X (Twitter)", href: "#" },
    { icon: FileText, label: "Terms", href: "#" },
    { icon: Shield, label: "Privacy", href: "#" },
    { icon: BookOpen, label: "Docs", href: "#" },
    { icon: UserCheck, label: "KYC", href: "#" },
    { icon: Mail, label: "Contact", href: "#" },
  ];

  return (
    <footer className="relative py-12 px-4 bg-secondary text-secondary-foreground">
      {/* Rope divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-30" style={{ background: 'var(--gradient-rope)' }}></div>

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-bold">HONEST JOHN'S CRYPTO WORLD</h3>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-2 font-inter text-sm hover:text-primary transition-colors"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Tip */}
          <div className="text-center border-t border-secondary-foreground/20 pt-6">
            <p className="font-inter text-sm text-secondary-foreground/70 mb-4">
              <strong>Tip:</strong> Use your browser's menu to 'Add to Home Screen' for quick access.
            </p>
            <p className="font-inter text-sm text-secondary-foreground/70 mb-4">
              Built with security-first architecture and a touch of cowboy honesty 🤠
            </p>
            <p className="font-inter text-sm text-secondary-foreground/50">
              © 2025 Honest John's Crypto World. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
