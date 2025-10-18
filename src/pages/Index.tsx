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
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <main className="min-h-screen" style={{ background: 'var(--gradient-parchment)' }}>
      <Hero />
      <WhyChoose />
      <BuildAuditWebsite />
      <MeetBadgey />
      <AuditFeature />
      <AuditSection />
<div style={{ display: "flex", justifyContent: "center", margin: "1.25rem 0" }}>
  <a
    href="/token-maker"
    className="bg-[#c39b63] hover:bg-[#a98450] text-white font-bold py-3 px-6 rounded"
  >
    Build My Token
  </a>
</div>
      <WebsiteBuilder />
      <FutureUtilities />
      <SecurityStatement />
      <Footer />
    </main>
  );
};

export default Index;
