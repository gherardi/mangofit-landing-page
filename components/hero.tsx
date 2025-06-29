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
    <main className="px-4 md:px-6">
      <div className="relative pt-20">
        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
          <AnimatedGroup variants={transitionVariants}>
            <Link
              href="#link"
              className="flex gap-4 items-center p-1 pl-4 mx-auto rounded-full border shadow-md transition-colors duration-300 hover:bg-background dark:hover:border-t-border bg-muted group w-fit shadow-zinc-950/5 dark:border-t-white/5 dark:shadow-zinc-950"
            >
              <span className="text-sm text-foreground">
                La soluzione digitale per i Personal Trainer
              </span>
              <span className="dark:border-background block h-4 w-0.5 border-l bg-background"></span>

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
            className="mt-6 text-5xl text-balance md:text-7xl lg:mt-12"
          >
            Il Software che semplifica il lavoro dei Personal Trainer
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.5}
            as="p"
            className="mx-auto mt-8 text-lg text-balance"
          >
            Mangofit aiuta i personal trainer a semplificare il lavoro
            quotidiano, ottimizzare le attività e mantenere i clienti motivati,
            così da potersi concentrare sulla crescita del proprio business.
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
            <Button asChild size="lg" className="bg-brand hover:bg-brand/90">
              <Link href="#">
                <span className="text-nowrap">Scopri come funziona</span>
              </Link>
            </Button>
          </AnimatedGroup>
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
          <div className="overflow-hidden relative px-2 mt-12 sm:mr-0 sm:mt-12 md:mt-20">
            <div
              aria-hidden
              className="bg-linear-to-b to-gray-50 absolute inset-0 z-10 from-transparent from-35%"
            />
            <div className="overflow-hidden relative p-4 mx-auto rounded-2xl border ring-1 shadow-lg inset-shadow-2xs ring-background bg-background shadow-zinc-950/15">
              <Image
                className="relative rounded-2xl border z-2 border-border/25 aspect-15/8 w-full"
                src="/overview.webp"
                alt="app overview"
                width="2700"
                height="1440"
              />
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </main>
  );
}
