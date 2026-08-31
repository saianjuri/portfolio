import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plus, Dumbbell, UtensilsCrossed, Camera, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import portraitAsset from "@/assets/portrait-saianjuri.png";

const title = "Expertise — Dr. Sai Anjuri, PharmD";
const description =
  "The expertise of Dr. Sai Anjuri, PharmD: pharmaceutical knowledge, fitness and bodybuilding, nutrition and diet planning, and creative photography.";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Expertise,
});

type Area = {
  index: string;
  icon: LucideIcon;
  label: string;
  heading: string;
  description: string;
  focus: string[];
  accent: "teal" | "orange";
};

const areas: Area[] = [
  {
    index: "01",
    icon: Plus,
    label: "PharmD",
    heading: "Pharmaceutical Knowledge",
    description:
      "Built on a Doctor of Pharmacy foundation, with an evidence-oriented understanding of medicines, healthcare, and patient-focused pharmaceutical care.",
    focus: [
      "PharmD foundation",
      "Medication knowledge",
      "Patient counselling",
      "Expert in clinical practise",
      "Evidence-based healthcare information",
    ],
    accent: "teal",
  },
  {
    index: "02",
    icon: Dumbbell,
    label: "7+ Years",
    heading: "Fitness & Bodybuilding",
    description:
      "With 7+ years of experience in fitness and bodybuilding, the focus is on structured training, consistency, strength, and long-term physical development.",
    focus: ["Strength training", "Bodybuilding", "Fitness development", "Performance", "Consistency & discipline"],
    accent: "orange",
  },
  {
    index: "03",
    icon: UtensilsCrossed,
    label: "Nutrition",
    heading: "Nutrition & Diet Planning",
    description:
      "A practical approach to nutrition focused on sustainable habits, balanced eating, and goal-oriented diet planning.",
    focus: [
      "Personalized diet planning",
      "Nutrition habits",
      "Lifestyle balance",
      " Mental health awareness",
      "Goal-oriented nutrition",
    ],
    accent: "teal",
  },
  {
    index: "04",
    icon: Camera,
    label: "Creative",
    heading: "Creative Photography",
    description:
      "Photography as a form of visual storytelling, with a focus on portraits, lifestyle and personal or brand-oriented creative work.",
    focus: ["Portrait photography", "Lifestyle photography", "Brand photography", "Visual storytelling"],
    accent: "orange",
  },
];

const connections = [
  {
    title: "Health",
    text: "Knowledge creates a stronger foundation for informed health decisions.",
  },
  {
    title: "Performance",
    text: "Fitness and consistency turn knowledge into practical action.",
  },
  {
    title: "Story",
    text: "Photography communicates progress, identity and personal journeys visually.",
  },
];

function Expertise() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ————— Editorial hero ————— */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 hero-pad">
            <Reveal className="min-w-0">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Expertise
              </p>
              <h1 className="mt-6 heading-page">
                Knowledge That Connects
                <br />
                <span className="text-teal-deep">Health, Performance &amp; Creativity</span>
              </h1>

              <div aria-hidden="true" className="mt-7 h-px w-full max-w-md bg-border/70" />

              <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.75] text-muted-foreground">
                An interdisciplinary approach shaped by pharmaceutical education, fitness experience, nutrition, and
                creative visual storytelling.
              </p>
            </Reveal>

            <Reveal delay={120} className="min-w-0">
              <figure className="relative mx-auto w-full max-w-[320px] lg:max-w-[400px]">
                {/* soft grounding shadow */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[10%] bottom-[-3%] h-6 rounded-[50%] bg-foreground/[0.07] blur-xl"
                />
                {/* small orange accent mark */}
                <span aria-hidden="true" className="absolute -right-2 top-8 h-14 w-[5px] rounded-full bg-accent" />
                <div className="relative overflow-hidden rounded-[1.25rem] border border-border/70 shadow-[var(--shadow-card)]">
                  <img
                    src={portraitAsset}
                    alt="Professional portrait of Dr. Sai Anjuri in a white coat"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-[center_20%]"
                  />
                </div>
                {/* teal base line */}
                <span aria-hidden="true" className="mt-4 block h-[3px] w-16 rounded-full bg-teal" />
                <figcaption className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Dr. Sai Anjuri — PharmD
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ————— Expertise overview: four editorial sections ————— */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <Reveal className="max-w-xl">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Areas of Expertise
              </p>
              <h2 className="mt-5 heading-section">
                Four Disciplines, One Perspective
              </h2>
            </Reveal>

            <div className="mt-12 lg:mt-14">
              {areas.map((area, i) => {
                const isTeal = area.accent === "teal";
                return (
                  <Reveal key={area.index} delay={i * 60}>
                    <article className="grid gap-6 border-t border-border/70 py-10 last:border-b lg:grid-cols-[120px_minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14 lg:py-14">
                      {/* large number + label */}
                      <div>
                        <span
                          aria-hidden="true"
                          className={`block text-[2.4rem] font-extrabold leading-none tracking-[-0.02em] lg:text-[3rem] ${
                            isTeal ? "text-teal" : "text-accent"
                          }`}
                        >
                          {area.index}
                        </span>
                        <span
                          className={`mt-4 inline-block rounded-full border px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] ${
                            isTeal ? "border-teal/40 text-teal-deep" : "border-accent/40 text-accent"
                          }`}
                        >
                          {area.label}
                        </span>
                      </div>

                      {/* heading + description */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-4">
                          <span
                            aria-hidden="true"
                            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${
                              isTeal
                                ? "border-teal/40 bg-ivory text-teal-deep"
                                : "border-accent/40 bg-ivory text-accent"
                            }`}
                          >
                            <area.icon size={20} strokeWidth={1.8} aria-hidden="true" />
                          </span>
                          <h3 className="heading-card lg:text-[1.6rem]">
                            {area.heading}
                          </h3>
                        </div>
                        <p className="mt-5 max-w-[52ch] text-[1rem] leading-[1.8] text-muted-foreground">
                          {area.description}
                        </p>
                      </div>

                      {/* focus areas */}
                      <div className="min-w-0">
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Focus Areas
                        </p>
                        <ul className="mt-4 space-y-2.5">
                          {area.focus.map((item) => (
                            <li
                              key={item}
                              className="flex items-baseline gap-3 text-[0.9rem] leading-relaxed text-foreground/85"
                            >
                              <span
                                aria-hidden="true"
                                className={`h-1 w-1 shrink-0 translate-y-[-2px] rounded-full ${
                                  isTeal ? "bg-teal" : "bg-accent"
                                }`}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ————— Expertise matrix ————— */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <Reveal className="mx-auto max-w-xl text-center">
              <p className="eyebrow flex items-center justify-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                The Connection
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
              </p>
              <h2 className="mt-5 heading-section">
                One Identity, Four Disciplines
              </h2>
            </Reveal>

            <Reveal delay={90} className="mt-14">
              <div className="relative mx-auto max-w-[640px]">
                {/* connecting cross lines */}
                <span aria-hidden="true" className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
                <span aria-hidden="true" className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border" />

                <div className="relative grid grid-cols-2 gap-px">
                  {[
                    { label: "PharmD", accent: "teal" as const },
                    { label: "Fitness", accent: "orange" as const },
                    { label: "Nutrition", accent: "teal" as const },
                    { label: "Photography", accent: "orange" as const },
                  ].map((node) => (
                    <div
                      key={node.label}
                      className="flex items-center justify-center bg-background px-4 py-10 sm:py-12"
                    >
                      <span
                        className={`text-[0.75rem] font-bold uppercase tracking-[0.2em] sm:text-[0.8125rem] ${
                          node.accent === "teal" ? "text-teal-deep" : "text-accent"
                        }`}
                      >
                        {node.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* center identity node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="grid h-32 w-32 place-items-center rounded-full border-[3px] border-teal bg-ivory shadow-[var(--shadow-card)] sm:h-36 sm:w-36">
                    <span aria-hidden="true" className="absolute inset-[-6px] rounded-full border border-accent/50" />
                    <p className="px-3 text-center text-[0.6875rem] font-extrabold uppercase leading-snug tracking-[0.14em] text-teal-deep sm:text-[0.75rem]">
                      Dr. Sai
                      <br />
                      Anjuri
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ————— Where these disciplines meet ————— */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <Reveal className="max-w-xl">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Intersection
              </p>
              <h2 className="mt-5 heading-section">
                Where These Disciplines Meet
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
              {connections.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className={`border-t-2 pt-5 ${i === 1 ? "border-accent" : "border-teal"}`}>
                    <h3 className="text-[0.8125rem] font-extrabold uppercase tracking-[0.18em] text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[1rem] leading-relaxed text-muted-foreground">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Professional philosophy ————— */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span aria-hidden="true" className="mx-auto block h-[3px] w-14 rounded-full bg-accent" />
              <p className="mt-8 text-[1.55rem] font-bold leading-[1.4] tracking-[-0.015em] text-foreground sm:text-[1.9rem] lg:text-[2.25rem]">
                Evidence. Discipline. <span className="text-teal-deep">Creativity.</span>
              </p>
              <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-[1.75] text-muted-foreground">
                Three ideas that shape the way I approach healthcare knowledge, physical development, nutrition, and
                visual storytelling.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ————— CTA ————— */}
        <section className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
          <Reveal>
            <div className="grid items-center gap-8 rounded-xl bg-teal px-7 py-11 text-primary-foreground sm:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 lg:py-14">
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  From Knowledge to Practice
                </p>
                <h2 className="mt-3 heading-section">
                  Explore the Work
                </h2>
                <span aria-hidden="true" className="mt-5 block h-px w-16 bg-primary-foreground/30" />
                <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-primary-foreground/85">
                  Discover academic projects, creative work and professional interests.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
                  <Link to="/" hash="portfolio">
                    View Portfolio <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  variant="outlineAccent"
                  size="xl"
                  className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                  asChild
                >
                  <Link to="/contact">
                    Get In Touch <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
