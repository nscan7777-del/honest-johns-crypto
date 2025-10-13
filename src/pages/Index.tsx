import Hero from "@/components/western/Hero";
import WhyChoose from "@/components/western/WhyChoose";
import BuildAuditWebsite from "@/components/western/BuildAuditWebsite";
import MeetBadgey from "@/components/western/MeetBadgey";
import AuditSection from "@/components/western/AuditSection";
import FutureUtilities from "@/components/western/FutureUtilities";
import Footer from "@/components/western/Footer";

const Index = () => {
  return (
    <main className="min-h-screen" style={{ background: 'var(--gradient-parchment)' }}>
      <Hero />
      <WhyChoose />
      <BuildAuditWebsite />
      <MeetBadgey />
      <AuditSection />
      <FutureUtilities />
      <Footer />
    </main>
  );
};

export default Index;
