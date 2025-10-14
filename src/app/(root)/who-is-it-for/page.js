import EnterPrise from "@/components/molecules/resources/Enterprise";
import Industries from "@/components/molecules/resources/Industries";
import LandingPage from "@/components/molecules/resources/LandingPage";
import Platform from "@/components/molecules/resources/Platform";
import Brands from "@/components/molecules/home/Brands";
import TrustedSection from "@/components/molecules/resources/TrustedSection";
// import Header from "../../components/molecules/Header";
// import Footer from "../../components/molecules/Footer";
import ClarioUse from "@/components/molecules/home/ClarioUse";
import Testimonials from "@/components/molecules/home/Testimonials";
import Connect from "@/components/atoms/Connect";
import Pricing from "@/components/atoms/Pricing";
import CTASection from "@/components/atoms/CTASection";
import FAQ from "@/components/atoms/FAQ";
function ResourcePage() {
  return (
    <>
      {/* <Header /> */}
      <LandingPage />
      <EnterPrise />
      <Industries />
      <Platform />
      <Brands className="mt-4 mb-4" />
      <TrustedSection />
      <ClarioUse />
      <Testimonials />
      <Connect />
      <Pricing />
      <CTASection />
      <FAQ />
      {/* <Footer /> */}
    </>
  );
}

export default ResourcePage;
