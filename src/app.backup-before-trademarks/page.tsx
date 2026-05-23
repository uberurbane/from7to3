import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/marketing/hero";
import Problem from "@/components/marketing/problem";
import TLCSystem from "@/components/marketing/tlc-system";
import TemplatesPreview from "@/components/marketing/templates-preview";
import OrgPaths from "@/components/marketing/org-paths";
import Insights from "@/components/marketing/insights";
import LeadCaptureSection from "@/components/marketing/lead-capture-section";
import BookSection from "@/components/marketing/book-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <TLCSystem />
        <TemplatesPreview />
        <OrgPaths />
        <Insights />
        <LeadCaptureSection />
        <BookSection />
      </main>
      <Footer />
    </>
  );
}
