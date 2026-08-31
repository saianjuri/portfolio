import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import dissertationCover from "@/assets/dissertation-cover.jpg";

const title =
  "From Prevalence to Prevention — PharmD Dissertation | Dr. Sai Anjuri";
const description =
  "PharmD dissertation case study: counselling strategies for healthy early pregnancy, a prospective observational study at Arundathi Institute of Medical Sciences and Hospital.";

const DISSERTATION_PDF_URL =
  "https://drive.google.com/file/d/1QghmODF0EkAFpiMazLSHisxhJLygBoxL/view?usp=sharing";

export const Route = createFileRoute("/portfolio/dissertation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DissertationCaseStudy,
});

const overview = [
  {
    label: "Project Title",
    value:
      "From Prevalence to Prevention – Ensuring Healthy Early Pregnancy Through Effective Counselling Strategies",
  },
  { label: "Project Type", value: "Doctor of Pharmacy (PharmD) Dissertation" },
  { label: "University", value: "Jawaharlal Nehru Technological University, Hyderabad" },
  { label: "Institution", value: "Marri Laxman Reddy Institute of Pharmacy" },
  { label: "Department", value: "Department of Pharmacy Practice (PharmD)" },
];

const team = ["Degatagore", "Pasam Sai Divya", "Sai Anjuri"];

const objectives = [
  "Determining the prevalence of complications in the first trimester of pregnancy",
  "Identifying associated risk factors",
  "Evaluating counselling strategies",
  "Developing a structured counselling program",
  "Developing educational materials and resources",
];

const methodology = [
  { label: "Study Design", value: "Prospective observational study" },
  {
    label: "Study Site",
    value:
      "Department of Obstetrics & Gynecology, Arundathi Institute of Medical Sciences and Hospital",
  },
  { label: "Study Period", value: "September 2024 – February 2025" },
  {
    label: "Study Population",
    value:
      "Pregnant women visiting the In-Patient and Out-Patient facilities, particularly those in their first trimester",
  },
];

const findings: { title: string; note?: string; rows: { label: string; value: number }[] }[] = [
  {
    title: "Age Distribution",
    rows: [
      { label: "18–24", value: 31 },
      { label: "25–34", value: 61 },
      { label: "35–44", value: 8 },
    ],
  },
  {
    title: "BMI",
    rows: [
      { label: "< 18.5", value: 1 },
      { label: "18.5–24.9", value: 29 },
      { label: "25–29.9", value: 30 },
      { label: "> 30", value: 40 },
    ],
  },
  {
    title: "Past Medical History",
    rows: [
      { label: "Thyroid", value: 65 },
      { label: "Hypertension", value: 23 },
      { label: "Diabetes", value: 12 },
    ],
  },
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

function DissertationCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section>
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 hero-pad">
            <Reveal>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-teal-deep"
              >
                <ArrowLeft size={14} aria-hidden="true" /> Back to Portfolio
              </Link>
            </Reveal>

            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
              <Reveal>
                <figure className="mx-auto w-full max-w-[320px] lg:mx-0">

                  <img
                    src={dissertationCover}
                    alt="Dissertation cover — From Prevalence to Prevention, PharmD project report"
                    loading="eager"
                    decoding="async"
                    className="w-full rounded-sm border border-border/70 shadow-[var(--shadow-card)]"
                  />
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-[3px] w-14 rounded-full bg-teal"
                  />
                  <figcaption className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Project report cover
                  </figcaption>
                </figure>

                <Button variant="orange" size="lg" className="mx-auto mt-7 w-full max-w-[320px] lg:mx-0" asChild>
                  <a href={DISSERTATION_PDF_URL} target="_blank" rel="noopener noreferrer">
                    View Full Dissertation <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </Button>
              </Reveal>

              <Reveal delay={100} className="min-w-0">
                <p className="eyebrow flex items-center gap-3 text-accent">
                  <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                  Academic Project
                </p>
                <h1 className="mt-6 max-w-[34ch] heading-page">
                  From Prevalence to Prevention – Ensuring Healthy Early Pregnancy Through
                  Effective Counselling Strategies
                </h1>

                <p className="mt-6 max-w-[58ch] text-[1rem] leading-[1.8] text-muted-foreground">
                  An academic dissertation focused on counselling strategies for promoting healthy
                  early pregnancy and addressing pregnancy-related complications.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Project overview */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-md">
            <Reveal>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Project Overview
              </p>
            </Reveal>
            <dl className="mt-8 divide-y divide-border/70 border-y border-border/70">
              {overview.map((item, i) => (
                <Reveal key={item.label} delay={i * 50}>
                  <div className="grid gap-1 py-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-8">
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                      {item.label}
                    </dt>
                    <dd className="max-w-[62ch] text-[1rem] leading-relaxed text-foreground/85">
                      {item.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={overview.length * 50}>
                <div className="grid gap-1 py-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-8">
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                    Project Team
                  </dt>
                  <dd className="text-[1rem] leading-relaxed text-foreground/85">
                    <ul className="flex flex-wrap gap-x-7 gap-y-1">
                      {team.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </Reveal>
            </dl>
          </div>
        </section>

        {/* Aims & objectives */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-accent">
                  <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                  Aims &amp; Objectives
                </p>
                <h2 className="mt-5 text-[1.5rem] font-extrabold tracking-[-0.015em] lg:text-[1.9rem]">
                  Aim
                </h2>
                <p className="mt-4 max-w-[42ch] text-[1rem] leading-[1.8] text-muted-foreground">
                  To develop and evaluate counselling strategies aimed at reducing early pregnancy
                  complications.
                </p>
              </Reveal>

              <Reveal delay={80} className="min-w-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Objectives
                </p>
                <ol className="mt-6 border-t border-border/70">
                  {objectives.map((o, i) => (
                    <li
                      key={o}
                      className="grid gap-2 border-b border-border/70 py-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-6"
                    >
                      <span
                        aria-hidden="true"
                        className={`text-[1.05rem] font-extrabold tracking-[-0.01em] ${
                          i % 2 === 0 ? "text-teal" : "text-accent"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="max-w-[58ch] text-[1rem] leading-relaxed text-foreground/85">
                        {o}
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-md">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Methodology
              </p>
            </Reveal>
            <div className="mt-8 grid gap-px border-t border-border/70 sm:grid-cols-2">
              {methodology.map((m, i) => (
                <Reveal key={m.label} delay={i * 60}>
                  <div className="border-b border-border/70 py-6 pr-8 sm:h-full">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                      {m.label}
                    </p>
                    <p className="mt-2.5 max-w-[52ch] text-[1rem] leading-relaxed text-foreground/85">
                      {m.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Key findings */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
            <Reveal className="max-w-xl">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Results
              </p>
              <h2 className="mt-5 heading-section">
                Key Findings
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-muted-foreground">
                Study population: <span className="font-semibold text-foreground">100 subjects</span>
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-14">
              {findings.map((group, gi) => (
                <Reveal key={group.title} delay={gi * 70}>
                  <div>
                    <p className="border-b border-border/70 pb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {group.title}
                    </p>
                    <ul className="mt-5 space-y-5">
                      {group.rows.map((row, ri) => (
                        <li key={row.label}>
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="text-[0.875rem] font-medium text-foreground/85">
                              {row.label}
                            </span>
                            <span
                              className={`text-[1.1rem] font-extrabold tracking-[-0.01em] ${
                                (gi + ri) % 2 === 0 ? "text-teal-deep" : "text-accent"
                              }`}
                            >
                              {row.value}%
                            </span>
                          </div>
                          <div className="mt-2 h-[3px] w-full bg-border/70">
                            <span
                              aria-hidden="true"
                              className={`block h-full ${
                                (gi + ri) % 2 === 0 ? "bg-teal" : "bg-accent"
                              }`}
                              style={{ width: `${row.value}%` }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Full document */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-md">
            <Reveal>
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
                <div className="min-w-0">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Document
                  </p>
                  <h2 className="mt-3 heading-card">
                    Read the full dissertation
                  </h2>
                  <p className="mt-3 max-w-[54ch] text-[1rem] leading-relaxed text-muted-foreground">
                    The complete project report opens in a new tab.
                  </p>
                </div>
                <Button variant="teal" size="xl" className="w-full sm:w-auto" asChild>
                  <a href={DISSERTATION_PDF_URL} target="_blank" rel="noopener noreferrer">
                    View Full Dissertation <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Academic guidance */}
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

        <section className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
          <Reveal>
            <div className="grid items-center gap-8 rounded-xl bg-teal px-7 py-11 text-primary-foreground sm:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 lg:py-14">
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  Academic &amp; Professional Enquiries
                </p>
                <h2 className="mt-3 heading-section">
                  Get In Touch
                </h2>
                <span aria-hidden="true" className="mt-5 block h-px w-16 bg-primary-foreground/30" />
              </div>
              <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Contact <ArrowRight aria-hidden="true" />
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
