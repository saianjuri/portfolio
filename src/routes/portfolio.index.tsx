import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, UtensilsCrossed, Camera, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import dissertationCover from "@/assets/dissertation-cover.jpg";

const title = "Portfolio — Work, Research & Creative Pursuits | Dr. Sai Anjuri";
const description =
  "A curated collection of academic research, professional interests, fitness, nutrition, and creative work by Dr. Sai Anjuri, PharmD.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

type Category = "all" | "research" | "fitness" | "nutrition" | "photography";

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "research", label: "Research" },
  { key: "fitness", label: "Fitness" },
  { key: "nutrition", label: "Nutrition" },
  { key: "photography", label: "Photography" },
];

const projectDetails = [
  { label: "Project Type", value: "PharmD Dissertation" },
  { label: "Institution", value: "Marri Laxman Reddy Institute of Pharmacy" },
  { label: "University", value: "JNTUH" },
  { label: "Domain", value: "Healthcare / Pharmacy Practice" },
];

const guides = [
  {
    role: "Hospital Guide",
    name: "Dr. Aparna Padala, MBBS, MS",
    lines: [
      "Professor, Department of Obstetrics & Gynaecology",
      "Arundath Hospital, Dundigal, Hyderabad",
    ],
    accent: "teal" as const,
  },
  {
    role: "Institutional Guide",
    name: "Dr. B. Raja Rajeshwari, Pharm D",
    lines: [
      "Assistant Professor, Department of Pharmacy Practice",
      "Marri Laxman Reddy Institute of Pharmacy",
    ],
    accent: "orange" as const,
  },
];

type Area = {
  key: Exclude<Category, "all" | "research">;
  icon: LucideIcon;
  label: string;
  heading: string;
  text: string;
  accent: "teal" | "orange";
  topics: string[];
};

const areas: Area[] = [
  {
    key: "fitness",
    icon: Dumbbell,
    label: "Fitness",
    heading: "Fitness & Bodybuilding",
    text: "Training philosophy, fitness experience and selected work.",
    accent: "orange",
    topics: ["Training", "Bodybuilding", "Fitness Progress", "Lifestyle"],
  },
  {
    key: "nutrition",
    icon: UtensilsCrossed,
    label: "Nutrition",
    heading: "Nutrition & Diet Planning",
    text: "Practical approaches to sustainable nutrition and lifestyle.",
    accent: "teal",
    topics: ["Diet Planning", "Nutrition Education", "Lifestyle", "Healthy Habits"],
  },
];

function Portfolio() {
  const [active, setActive] = useState<Category>("all");

  const showResearch = active === "all" || active === "research";
  const showPhotography = active === "all" || active === "photography";
  const visibleAreas = useMemo(
    () => areas.filter((a) => active === "all" || active === a.key),
    [active],
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ————— Hero ————— */}
        <section>
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 hero-pad">
            <Reveal className="max-w-3xl">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Selected Work
              </p>
              <h1 className="mt-6 heading-page">
                Work, Research &amp;
                <br />
                <span className="text-teal-deep">Creative Pursuits</span>
              </h1>
              <div aria-hidden="true" className="mt-7 h-px w-full max-w-md bg-border/70" />
              <p className="mt-6 max-w-[38rem] text-[1.0625rem] leading-[1.75] text-muted-foreground">
                A curated collection of academic research, professional interests, fitness,
                nutrition, and creative work.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ————— Filters ————— */}
        <section className="sticky top-[69px] z-30 border-y border-border/60 bg-background/92 backdrop-blur-[3px]">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div
              role="tablist"
              aria-label="Filter portfolio by category"
              className="flex flex-wrap items-center gap-x-7 gap-y-2 py-3.5"
            >
              {filters.map((f) => {
                const isActive = active === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(f.key)}
                    className={`relative py-1 text-[0.75rem] font-semibold uppercase tracking-[0.16em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:bg-teal after:transition-transform after:duration-300 ${
                      isActive
                        ? "text-teal-deep after:scale-x-100"
                        : "text-muted-foreground after:scale-x-0 hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ————— Featured research project ————— */}
        {showResearch ? (
          <section>
            <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
              <Reveal className="max-w-xl">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Featured — Research / Academic
                </p>
              </Reveal>

              <Reveal delay={80} className="mt-8">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
                  <figure className="mx-auto w-full max-w-[340px] lg:mx-0">
                    <div className="overflow-hidden rounded-sm border border-border/70 shadow-[var(--shadow-card)]">
                      <img
                        src={dissertationCover}
                        alt="Dissertation cover — From Prevalence to Prevention, PharmD project report"
                        loading="lazy"
                        decoding="async"
                        className="w-full transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-4 block h-[3px] w-14 rounded-full bg-teal"
                    />
                    <figcaption className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      Project report cover
                    </figcaption>
                  </figure>

                  <div className="min-w-0">
                    <p className="eyebrow flex items-center gap-3 text-accent">
                      <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                      Academic Project
                    </p>
                    <h2 className="mt-5 max-w-[36ch] heading-section">
                      From Prevalence to Prevention – Ensuring Healthy Early Pregnancy Through
                      Effective Counselling Strategies
                    </h2>

                    <dl className="mt-8 divide-y divide-border/70 border-y border-border/70">
                      {[
                        { label: "Programme", text: "Doctor of Pharmacy (PharmD) – Dissertation" },
                        {
                          label: "University",
                          text: "Jawaharlal Nehru Technological University, Hyderabad",
                        },
                        { label: "Institution", text: "Marri Laxman Reddy Institute of Pharmacy" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="grid gap-1 py-3.5 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-6"
                        >
                          <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                            {item.label}
                          </dt>
                          <dd className="text-[1rem] leading-relaxed text-foreground/85">
                            {item.text}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-7 max-w-[58ch] text-[1rem] leading-[1.8] text-muted-foreground">
                      An academic dissertation focused on counselling strategies for promoting
                      healthy early pregnancy and addressing pregnancy-related complications.
                    </p>

                    <Button variant="teal" size="lg" className="mt-9" asChild>
                      <Link to="/portfolio/dissertation">
                        View Case Study <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>

                </div>
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* ————— Research focus ————— */}
        {showResearch ? (
          <section className="border-t border-border/60 bg-card/40">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-md">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
                <Reveal>
                  <p className="eyebrow flex items-center gap-3 text-accent">
                    <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                    Research Focus
                  </p>
                </Reveal>
                <Reveal delay={70}>
                  <p className="max-w-[58ch] text-[1.0625rem] leading-[1.8] text-muted-foreground">
                    The dissertation focuses on counselling strategies relevant to early pregnancy,
                    moving from an understanding of prevalence towards preventive, patient-centred
                    guidance. The work was carried out within the Department of Pharmacy Practice
                    under both hospital and institutional academic supervision.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
        ) : null}

        {/* ————— Project details ————— */}
        {showResearch ? (
          <section className="border-t border-border/60">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-md">
              <Reveal>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Project Details
                </p>
              </Reveal>
              <div className="mt-8 grid gap-px border-t border-border/70 sm:grid-cols-2 lg:grid-cols-4">
                {projectDetails.map((d, i) => (
                  <Reveal key={d.label} delay={i * 60}>
                    <div className="border-b border-border/70 py-6 pr-6 sm:h-full">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                        {d.label}
                      </p>
                      <p className="mt-2.5 text-[1rem] leading-relaxed text-foreground/85">
                        {d.value}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ————— Academic guidance ————— */}
        {showResearch ? (
          <section className="border-t border-border/60">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-sm">
              <Reveal>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Academic Guidance
                </p>
              </Reveal>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-10">
                {guides.map((g, i) => (
                  <Reveal key={g.role} delay={i * 70}>
                    <div
                      className={`border-l-2 pl-4 ${
                        g.accent === "teal" ? "border-teal" : "border-accent"
                      }`}
                    >
                      <p
                        className={`text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ${
                          g.accent === "teal" ? "text-teal-deep" : "text-accent"
                        }`}
                      >
                        {g.role}
                      </p>
                      <p className="mt-1.5 text-[1rem] font-semibold">{g.name}</p>
                      <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted-foreground">
                        {g.lines[0]}
                        <br />
                        {g.lines[1]}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ————— Other portfolio areas: fitness & nutrition ————— */}
        {visibleAreas.length ? (
          <section className="border-t border-border/60">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
              {active === "all" ? (
                <Reveal className="max-w-xl">
                  <p className="eyebrow flex items-center gap-3 text-accent">
                    <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                    Other Areas
                  </p>
                  <h2 className="mt-5 heading-section">
                    In Progress
                  </h2>
                </Reveal>
              ) : null}

              <div className={active === "all" ? "mt-12" : ""}>
                {visibleAreas.map((area, i) => {
                  const isTeal = area.accent === "teal";
                  return (
                    <Reveal key={area.key} delay={i * 70}>
                      <article className="grid gap-6 border-t border-border/70 py-10 last:border-b lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-16 lg:py-14">
                        <div className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className={`mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border/70 bg-card ${
                              isTeal ? "text-teal" : "text-accent"
                            }`}
                          >
                            <area.icon size={18} strokeWidth={1.6} aria-hidden="true" />
                          </span>
                        </div>


                        <div className="min-w-0">
                          <p
                            className={`text-[0.6875rem] font-semibold uppercase tracking-[0.16em] ${
                              isTeal ? "text-teal-deep" : "text-accent"
                            }`}
                          >
                            {area.label}
                          </p>
                          <h3 className="mt-3 heading-card lg:text-[1.75rem]">
                            {area.heading}
                          </h3>
                          <p className="mt-4 max-w-[52ch] text-[1rem] leading-[1.8] text-muted-foreground">
                            {area.text}
                          </p>
                          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/70 pt-5">
                            {area.topics.map((t) => (
                              <li
                                key={t}
                                className="text-[0.8125rem] font-medium tracking-[0.02em] text-foreground/75"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                          <Button variant="outlineAccent" size="lg" className="mt-8" disabled>
                            Coming Soon
                          </Button>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {/* ————— Photography gallery ————— */}
        {showPhotography ? (
          <section className="border-t border-border/60 bg-card/40">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
              <Reveal className="max-w-xl">
                <p className="eyebrow flex items-center gap-3 text-accent">
                  <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                  Photography
                </p>
                <h2 className="mt-5 heading-section">
                  Creative Photography
                </h2>
                <p className="mt-4 max-w-[48ch] text-[1rem] leading-[1.8] text-muted-foreground">
                  Portraits, lifestyle and visual storytelling.
                </p>
              </Reveal>

              {/* Minimal empty state — replaced by a real gallery once images are ready. */}
              <Reveal delay={80} className="mt-10">
                <div className="flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="inline-flex items-center gap-3 text-[0.8125rem] uppercase tracking-[0.16em] text-muted-foreground">
                    <Camera size={16} strokeWidth={1.6} aria-hidden="true" className="text-accent" />
                    Selected work coming soon
                  </p>
                </div>
              </Reveal>

            </div>
          </section>
        ) : null}

        {/* ————— CTA ————— */}
        <section className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
          <Reveal>
            <div className="grid items-center gap-8 rounded-xl bg-teal px-7 py-11 text-primary-foreground sm:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 lg:py-14">
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  Consult. Train. Transform.
                </p>
                <h2 className="mt-3 heading-section">
                  Let&apos;s Work Together
                </h2>
                <span aria-hidden="true" className="mt-5 block h-px w-16 bg-primary-foreground/30" />
                <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-primary-foreground/85">
                  Interested in collaborating on research, training, nutrition or creative work?
                </p>
              </div>
              <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Book a Consultation <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
