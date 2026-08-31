import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const title = "Contact & Consultation — Dr. Sai Anjuri";
const description =
  "Get in touch with Dr. Sai Anjuri, PharmD for consultations, fitness and nutrition guidance, creative collaboration, or general enquiries.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: "saianjuri7676@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8688613715" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India" },
];

const REASONS = [
  "Consultation",
  "Fitness",
  "Nutrition",
  "Photography",
  "Academic / Research",
  "General Enquiry",
];

const inputClasses =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-[1rem] text-foreground shadow-[0_1px_2px_oklch(0.21_0.006_250/0.04)] transition-colors placeholder:text-muted-foreground/70 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal/40";

const labelClasses =
  "mb-2 block text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-foreground/70";

type Status = "idle" | "sending" | "sent" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, real users never see this one.
    if (data.get("company")) return;

    setStatus("sending");

    const { error } = await supabase.from("contact_enquiries").insert({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim() || null,
      reason: String(data.get("reason") ?? ""),
      message: String(data.get("message") ?? "").trim(),
    });

    if (error) {
      console.error("Contact enquiry insert failed", error);
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("sent");
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page header */}
        <section className="mx-auto max-w-[1200px] px-6 lg:px-8 hero-pad">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-accent">
              <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
              Contact &amp; Consultation
            </p>
            <h1 className="mt-6 max-w-2xl heading-page text-teal-deep">
              Let&apos;s Start a Conversation
            </h1>
            <span aria-hidden="true" className="mt-7 block h-px w-16 bg-accent/60" />
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.75] text-muted-foreground">
              Whether you&apos;re looking to connect for a consultation, fitness and nutrition
              guidance, creative collaboration, or simply want to get in touch, feel free to reach
              out.
            </p>
          </Reveal>
        </section>

        {/* Two-column contact layout */}
        <section className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Left — contact information */}
            <Reveal className="min-w-0">
              <h2 className="heading-card text-teal-deep">
                Get In Touch
              </h2>
              <span aria-hidden="true" className="mt-4 block h-px w-10 bg-teal/50" />

              <ul className="mt-8 space-y-6">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border/70 bg-card text-teal shadow-[var(--shadow-card)]">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-[1rem] font-medium text-foreground/90">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div aria-hidden="true" className="mt-10 h-px w-full bg-border/70" />

              <div className="mt-8">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Social
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/dr_saianjuri"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card px-4 py-2.5 text-[0.8125rem] font-medium text-foreground/80 shadow-[var(--shadow-card)] transition-colors hover:border-teal/50 hover:text-teal-deep"
                  >
                    <Instagram size={15} aria-hidden="true" className="text-accent" /> Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dr-sai-anjuri-36802a405"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card px-4 py-2.5 text-[0.8125rem] font-medium text-foreground/80 shadow-[var(--shadow-card)] transition-colors hover:border-teal/50 hover:text-teal-deep"
                  >
                    <Linkedin size={15} aria-hidden="true" className="text-teal" /> LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right — enquiry form */}
            <Reveal delay={120} className="min-w-0">
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border/70 bg-card p-7 shadow-[var(--shadow-card)] sm:p-9"
              >
                <h2 className="heading-card text-teal-deep">
                  Consultation Enquiry
                </h2>
                <span aria-hidden="true" className="mt-3 block h-px w-10 bg-accent/60" />

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="full-name" className={labelClasses}>
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="reason" className={labelClasses}>
                      Reason for Contact
                    </label>
                    <select id="reason" name="reason" required defaultValue="" className={inputClasses}>
                      <option value="" disabled>
                        Select a reason
                      </option>
                      {REASONS.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClasses}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me a little about what you're looking for…"
                      className={`${inputClasses} resize-y`}
                    />
                  </div>
                </div>

                {/* Honeypot — visually hidden, ignored by users, filled by bots. */}
                <div aria-hidden="true" className="hidden">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <Button
                  variant="orange"
                  size="xl"
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-7 w-full sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : "Send Enquiry"}
                  <ArrowRight aria-hidden="true" />
                </Button>

                {status === "sent" ? (
                  <p className="mt-4 text-[0.875rem] font-medium text-teal-deep">
                    Thank you — your enquiry has been received.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="mt-4 text-[0.875rem] font-medium text-accent">
                    Something went wrong. Please try again, or email{" "}
                    <a href="mailto:saianjuri7676@gmail.com" className="underline">
                      saianjuri7676@gmail.com
                    </a>{" "}
                    directly.
                  </p>
                ) : null}

                <p className="mt-4 border-t border-border/60 pt-4 text-[0.8125rem] leading-relaxed text-muted-foreground">
                  Your enquiry will be reviewed and responded to as soon as possible.
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
