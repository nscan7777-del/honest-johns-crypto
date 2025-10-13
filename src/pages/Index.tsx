import Hero from "@/components/western/Hero";
import WhyChoose from "@/components/western/WhyChoose";
import BuildAuditWebsite from "@/components/western/BuildAuditWebsite";
import MeetBadgey from "@/components/western/MeetBadgey";
import AuditFeature from "@/components/western/AuditFeature";
import AuditSection from "@/components/western/AuditSection";
import TokenMaker from "@/components/western/TokenMaker";
import WebsiteBuilder from "@/components/western/WebsiteBuilder";
import FutureUtilities from "@/components/western/FutureUtilities";
import SecurityStatement from "@/components/western/SecurityStatement";
import Footer from "@/components/western/Footer";

const Index = () => {
  return (
    <main className="min-h-screen" style={{ background: 'var(--gradient-parchment)' }}>
      <Hero />
      <WhyChoose />
      <BuildAuditWebsite />
      <MeetBadgey />
      <AuditFeature />
      <AuditSection />
      <TokenMaker />
      <WebsiteBuilder />
      <FutureUtilities />
      <SecurityStatement />
      <Footer />
    </main>
  );
};

export default Index;
