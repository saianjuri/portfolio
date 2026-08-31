import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import portraitAsset from "@/assets/portrait-saianjuri.png";

const portraitUrl = portraitAsset;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 hero-pad">
        <Reveal className="min-w-0">
          <p className="eyebrow flex items-center gap-3 text-accent">
            <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
            Clinical Expertise. Fitness Passion. Creative Vision.
          </p>
          <h1 className="mt-6 heading-hero">
            <span className="text-teal-deep">Dr. Sai Anjuri</span> PharmD
            <span className="mx-2.5 font-light text-border">|</span>
            <br className="hidden sm:block" />
            Fitness Mentor &amp; Photographer
          </h1>

          <p className="mt-7 max-w-xl text-[0.875rem] font-semibold uppercase leading-relaxed tracking-[0.06em] text-foreground/70">
            PharmD <span className="text-teal">&bull;</span> 7+ Years Fitness &amp; Bodybuilding Expert{" "}
            <span className="text-teal">&bull;</span> Diet Planner <span className="text-teal">&bull;</span>{" "}
            Creative Photographer
          </p>

          <div aria-hidden="true" className="mt-7 h-px w-full max-w-md bg-border/70" />

          <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.75] text-muted-foreground">
            Integrating clinical expertise with fitness, nutrition, and visual storytelling to help
            you live healthier, stronger, and more creatively.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="teal" size="xl" asChild>
              <Link to="/contact">
                Work With Me <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outlineAccent" size="xl" asChild>
              <a href="#portfolio">
                View Portfolio <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[424px]">
            {/* soft grounding shadow — keeps the portrait placed, not floating */}
            <span
              aria-hidden="true"
              className="absolute inset-x-[12%] bottom-[-2%] h-6 rounded-[50%] bg-foreground/[0.07] blur-xl"
            />
            {/* controlled orange accent arc */}
            <span
              aria-hidden="true"
              className="absolute inset-[-5%] rounded-full border-[5px] border-transparent border-t-accent"
              style={{ transform: "rotate(42deg)" }}
            />
            {/* thin teal ring, offset from the photo edge */}
            <span
              aria-hidden="true"
              className="absolute inset-[-5%] rounded-full border border-teal/35"
            />
            <div className="absolute inset-0 overflow-hidden rounded-full border-[3px] border-teal bg-secondary">
              <img
                src={portraitUrl}
                alt="Portrait of Dr. Sai Anjuri, PharmD"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover object-[center_30%]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
