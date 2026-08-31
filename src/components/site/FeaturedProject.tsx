import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import dissertationCover from "@/assets/dissertation-cover.jpg";

const meta = [
  { label: "Programme", text: "Doctor of Pharmacy (PharmD) – Dissertation" },
  { label: "University", text: "Jawaharlal Nehru Technological University, Hyderabad" },
  { label: "Institution", text: "Marri Laxman Reddy Institute of Pharmacy" },
];

export function FeaturedProject() {
  return (
    <section id="portfolio" className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
      <Reveal className="max-w-xl">
        <p className="eyebrow flex items-center gap-3 text-accent">
          <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
          Featured Project
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
              From Prevalence to Prevention – Ensuring Healthy Early Pregnancy Through Effective
              Counselling Strategies
            </h2>

            <dl className="mt-8 divide-y divide-border/70 border-y border-border/70">
              {meta.map((item) => (
                <div key={item.label} className="grid gap-1 py-3.5 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-6">
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-[1rem] leading-relaxed text-foreground/85">{item.text}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-teal pl-4">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-teal-deep">
                  Hospital Guide
                </p>
                <p className="mt-1.5 text-[1rem] font-semibold">Dr. Aparna Padala, MBBS, MS</p>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted-foreground">
                  Professor, Department of Obstetrics and Gynaecology
                  <br />
                  Arundath Hospital, Dundigal, Hyderabad
                </p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
                  Institutional Guide
                </p>
                <p className="mt-1.5 text-[1rem] font-semibold">Dr. B. Raja Rajeshwari, Pharm D</p>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted-foreground">
                  Assistant Professor, Department of Pharmacy Practice
                  <br />
                  Marri Laxman Reddy Institute of Pharmacy
                </p>
              </div>
            </div>

            <Button variant="teal" size="lg" className="mt-9" asChild>
              <Link to="/portfolio/dissertation">
                View Case Study <ArrowRight aria-hidden="true" />
              </Link>

            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
