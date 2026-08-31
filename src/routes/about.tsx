import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import portraitAsset from "@/assets/portrait-saianjuri.png";
import dissertationCover from "@/assets/dissertation-cover.jpg";

const title = "About — Dr. Sai Anjuri, PharmD";
const description =
  "About Dr. Sai Anjuri, PharmD: a multidisciplinary professional combining clinical pharmacy, fitness, nutrition, and creative photography.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dr. Sai Anjuri",
          jobTitle: "Doctor of Pharmacy (PharmD)",
          description,
          knowsAbout: ["Pharmacy", "Fitness", "Nutrition", "Photography"],
          alumniOf: [
            {
              "@type": "EducationalOrganization",
              name: "J. Sikile School, Narsapur Roypeta",
            },
            {
              "@type": "EducationalOrganization",
              name: "Chaitanya Junior College, Palakollu",
            },
            {
              "@type": "CollegeOrUniversity",
              name: "Jawaharlal Nehru Technological University, Hyderabad",
            },
          ],
          url: "/about",
        }),
      },
    ],
  }),
  component: About,
});

const disciplines = [
  {
    index: "01",
    label: "PharmD",
    accent: "teal" as const,
    text: "Doctor of Pharmacy background with an evidence-based approach to pharmaceutical care and health.",
  },
  {
    index: "02",
    label: "Fitness",
    accent: "orange" as const,
    text: "7+ years of fitness and bodybuilding experience, with an interest in strength, performance and physical development.",
  },
  {
    index: "03",
    label: "Nutrition",
    accent: "teal" as const,
    text: "Nutrition and diet planning focused on practical, sustainable lifestyle habits.",
  },
  {
    index: "04",
    label: "Photography",
    accent: "orange" as const,
    text: "Creative photography across portraits, brands and lifestyle storytelling.",
  },
];

const principles = [
  {
    title: "Evidence First",
    text: "A pharmaceutical education forms the foundation for an evidence-oriented approach to health information.",
  },
  {
    title: "Consistency",
    text: "Fitness and nutrition are presented through practical, sustainable habits rather than extreme approaches.",
  },
  {
    title: "Creativity",
    text: "Photography provides another way to communicate people, progress and stories visually.",
  },
];

const education = [
  {
    level: "Schooling",
    title: "Secondary Education (CBSE)",
    details: [
      { label: "School", value: "J. Sikile School, Narsapur Roypeta" },
      { label: "Board", value: "CBSE" },
    ],
  },
  {
    level: "Intermediate",
    title: "Intermediate Education",
    details: [
      { label: "College", value: "Chaitanya Junior College, Palakollu" },
    ],
  },
  {
    level: "Undergraduate",
    title: "Doctor of Pharmacy (PharmD)",
    details: [
      { label: "University", value: "Jawaharlal Nehru Technological University, Hyderabad" },
      { label: "Institution", value: "Marri Laxman Reddy Institute of Pharmacy" },
    ],
  },
];

function About() {
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
                About Dr. Sai Anjuri
              </p>
              <h1 className="mt-6 heading-page">
                Healthcare, Fitness &amp;
                <br />
                <span className="text-teal-deep">Creative Expression</span>
              </h1>

              <div aria-hidden="true" className="mt-7 h-px w-full max-w-md bg-border/70" />

              <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.75] text-muted-foreground">
                Dr. Sai Anjuri is a Doctor of Pharmacy professional Passionate About Patient Care And Research Skilled
                In Clinical Practice, Evidence-Based Medication Management, fitness, nutrition, and creative
                photography.
              </p>
              <p className="mt-4 max-w-[34rem] text-[1.0625rem] leading-[1.75] text-muted-foreground">
                His PharmD background provides an evidence-based foundation for his approach to health and wellbeing,
                while his experience in fitness, nutrition, and photography allows him to explore health and personal
                development from different perspectives.
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

        {/* ————— Professional identity ————— */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <Reveal className="max-w-xl">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Professional Identity
              </p>
              <h2 className="mt-5 heading-section">
                More Than One Discipline
              </h2>
            </Reveal>

            <Reveal delay={90} className="mt-10">
              <ol className="divide-y divide-border/70 border-y border-border/70">
                {disciplines.map((d) => (
                  <li
                    key={d.index}
                    className="group grid gap-2 py-6 transition-colors sm:grid-cols-[90px_180px_minmax(0,1fr)] sm:items-baseline sm:gap-8 lg:py-7"
                  >
                    <span
                      aria-hidden="true"
                      className={`text-[0.8125rem] font-bold tracking-[0.1em] ${
                        d.accent === "teal" ? "text-teal" : "text-accent"
                      }`}
                    >
                      {d.index}
                    </span>
                    <h3 className="text-[1.05rem] font-extrabold uppercase tracking-[0.06em] text-foreground">
                      {d.label}
                    </h3>
                    <p className="max-w-[52ch] text-[1rem] leading-relaxed text-muted-foreground">{d.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ————— Education ————— */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-accent">
                  <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                  Education
                </p>
                <h2 className="mt-5 heading-section">
                  Academic Background
                </h2>
              </Reveal>

              <Reveal delay={90}>
                <ol className="flex flex-col gap-8 border-l-2 border-teal pl-6">
                  {education.map((edu) => (
                    <li key={edu.level} className="flex gap-5">
                      <span
                        aria-hidden="true"
                        className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-teal/40 bg-ivory text-teal-deep"
                      >
                        <GraduationCap size={20} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {edu.level}
                        </p>
                        <h3 className="mt-1 text-[1.125rem] font-extrabold tracking-[-0.01em]">{edu.title}</h3>
                        <dl className="mt-3 divide-y divide-border/70 border-y border-border/70">
                          {edu.details.map((item) => (
                            <div key={item.label} className="grid gap-1 py-3 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-6">
                              <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                {item.label}
                              </dt>
                              <dd className="text-[1rem] leading-relaxed text-foreground/85">{item.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ————— Academic work ————— */}
        <section className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
          <Reveal className="max-w-xl">
            <p className="eyebrow flex items-center gap-3 text-accent">
              <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
              Academic Work
            </p>
          </Reveal>

          <Reveal delay={90} className="mt-9">
            <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
              <figure className="mx-auto w-full max-w-[280px] lg:mx-0">
                <img
                  src={dissertationCover}
                  alt="Dissertation cover — From Prevalence to Prevention, PharmD project report"
                  loading="lazy"
                  className="w-full rounded-sm border border-border/70 shadow-[var(--shadow-card)]"
                />
                <figcaption className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Project report cover
                </figcaption>
              </figure>

              <div className="min-w-0">
                <h2 className="max-w-[38ch] heading-section">
                  From Prevalence to Prevention – Ensuring Healthy Early Pregnancy Through Effective Counselling
                  Strategies
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
                    <div key={item.label} className="grid gap-1 py-3.5 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-6">
                      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {item.label}
                      </dt>
                      <dd className="text-[1rem] leading-relaxed text-foreground/85">{item.text}</dd>
                    </div>
                  ))}
                </dl>

                <Button variant="teal" size="lg" className="mt-9" asChild>
                  <Link to="/" hash="portfolio">
                    View Project <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ————— My approach ————— */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <Reveal className="max-w-xl">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                My Approach
              </p>
              <h2 className="mt-5 heading-section">
                Three Guiding Principles
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="border-t-2 border-teal pt-5">
                    <h3 className="text-[1.05rem] font-extrabold tracking-[-0.01em]">{p.title}</h3>
                    <p className="mt-3 text-[1rem] leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Personal brand statement ————— */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span aria-hidden="true" className="mx-auto block h-[3px] w-14 rounded-full bg-accent" />
              <p className="mt-8 text-[1.55rem] font-bold leading-[1.4] tracking-[-0.015em] text-foreground sm:text-[1.9rem] lg:text-[2.25rem]">
                Health is not limited to one discipline.
                <br />
                <span className="text-teal-deep">
                  It is shaped by knowledge, consistency, discipline and creativity.
                </span>
              </p>
              <p className="mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Dr. Sai Anjuri — PharmD
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
                  Consult. Train. Transform.
                </p>
                <h2 className="mt-3 heading-section">
                  Let&apos;s Work Together
                </h2>
                <span aria-hidden="true" className="mt-5 block h-px w-16 bg-primary-foreground/30" />
                <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-primary-foreground/85">
                  Explore consultation, fitness, nutrition and creative collaboration.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
                  <Link to="/contact">
                    Book a Consultation <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  variant="outlineAccent"
                  size="xl"
                  className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                  asChild
                >
                  <Link to="/" hash="portfolio">
                    View Portfolio <ArrowRight aria-hidden="true" />
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
