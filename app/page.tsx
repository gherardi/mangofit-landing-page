import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
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
