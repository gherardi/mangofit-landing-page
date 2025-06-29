import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function Hero() {
  return (
    <main className="overflow-hidden">
      <div
        aria-hidden
        className="hidden isolate absolute inset-0 opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative pt-24 md:pt-36">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className="absolute inset-0 -z-20"
          >
            <Image
              src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
              alt="background"
              className="hidden absolute inset-x-0 top-56 -z-20 lg:top-32 dark:block"
              width="3276"
              height="4095"
            />
          </AnimatedGroup>
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="px-6 mx-auto max-w-7xl">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  href="#link"
                  className="flex gap-4 items-center p-1 pl-4 mx-auto rounded-full border shadow-md transition-colors duration-300 hover:bg-background dark:hover:border-t-border bg-muted group w-fit shadow-zinc-950/5 dark:border-t-white/5 dark:shadow-zinc-950"
                >
                  <span className="text-sm text-foreground">
                    La soluzione digitale per i Personal Trainer
                  </span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                  <div className="overflow-hidden rounded-full duration-500 bg-background group-hover:bg-muted size-6">
                    <div className="flex w-12 duration-500 ease-in-out -translate-x-1/2 group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedGroup>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
              >
                Il Software che semplifica il lavoro dei Personal Trainer
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-2xl text-lg text-balance"
              >
                Mangofit aiuta i personal trainer a semplificare il lavoro
                quotidiano, ottimizzare le attività e mantenere i clienti
                motivati, così da potersi concentrare sulla crescita del proprio
                business.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="flex flex-col gap-2 justify-center items-center mt-12 md:flex-row"
              >
                {/* <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="px-5 text-base"
                    >
                      <Link href="/login">
                        <span className="text-nowrap">Start Building</span>
                      </Link>
                    </Button>
                  </div> */}
                <Button asChild size="lg" className="">
                  <Link href="/login">
                    <span className="text-nowrap">Request a demo</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="overflow-hidden relative px-2 mt-8 -mr-56 sm:mr-0 sm:mt-12 md:mt-20">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="overflow-hidden relative p-4 mx-auto max-w-6xl rounded-2xl border ring-1 shadow-lg inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background shadow-zinc-950/15">
                <Image
                  className="hidden relative rounded-2xl bg-background aspect-15/8 dark:block"
                  src="/mail2.png"
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
                <Image
                  className="relative rounded-2xl border z-2 border-border/25 aspect-15/8 dark:hidden"
                  src="/mail2-light.webp"
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  );
}
