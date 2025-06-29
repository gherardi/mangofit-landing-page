import Image from "next/image";

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
    <section className="">
      <div className="px-6 mx-auto max-w-5xl lg:px-8">
        <div className="py-24 sm:py-32">
          Si affidano a noi i personal trainer delle migliori palestre
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {companies.map((company, index) => (
              <div key={index} className="p-8 bg-muted/50 sm:p-10">
                <Image
                  className="object-cover w-full rounded-md"
                  src={company.src}
                  alt={company.alt}
                  width={100}
                  height={70}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
