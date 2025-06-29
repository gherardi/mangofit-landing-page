import { Header } from "@/components/header-originui";
import { Hero } from "@/components/hero-old";
import { SocialProof } from "@/components/social-proof";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <Testimonials />
      <Faq />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
