import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const companies = [
  {
    src: "/fitactive.png",
    alt: "Fitactive Logo",
  },
  {
    src: "/mcfit.png",
    alt: "McFit",
  },
  {
    src: "/virgin-active.png",
    alt: "Virgin Active",
  },
  {
    src: "/fit-up.png",
    alt: "Fit Up",
  },
  {
    src: "/fit-express.png",
    alt: "Fit Express",
  },
  {
    src: "/get-fit-be-strong.png",
    alt: "Get Fit Be Strong",
  },
];

export function SocialProof() {
  return (
    <section className="px-4 py-16 md:px-6">
      <div className="py-8 pt-12 text-lg text-center text-muted-foreground">
        Utilizzato dai personal trainer delle migliori palestre
      </div>
      <div className="relative py-6 w-full">
        <InfiniteSlider speedOnHover={24} speed={64} gap={64}>
          {companies.map((company, index) => (
            <div key={index} className="flex">
              <Image
                className="mx-auto w-36 rounded-md aspect-video"
                src={company.src}
                alt={company.alt}
                width={100}
                height={100}
              />
            </div>
          ))}
        </InfiniteSlider>

        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"></div>
        <ProgressiveBlur
          className="absolute top-0 left-0 w-20 h-full pointer-events-none"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="absolute top-0 right-0 w-20 h-full pointer-events-none"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </section>
  );
}
