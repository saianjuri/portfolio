import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ArticleImage } from "@/components/site/ArticleImage";
import { getPost, getRelated } from "@/lib/blog-data";
import portraitAsset from "@/assets/portrait-saianjuri.png";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article Unavailable | Dr. Sai Anjuri" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.post.title} | The Journal — Dr. Sai Anjuri`;
    const d = loaderData.post.excerpt;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${loaderData.post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.post.title,
            description: d,
            author: { "@type": "Person", name: "Dr. Sai Anjuri" },
            datePublished: loaderData.post.date,
            articleSection: loaderData.post.categoryLabel,
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticleDetail,
});

function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-[760px] px-6 py-24 lg:px-8">
        <h1 className="text-[2rem] font-extrabold tracking-[-0.02em]">Article not found</h1>
        <p className="mt-4 text-[1rem] leading-[1.8] text-muted-foreground">
          This article isn&apos;t available yet.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-teal-deep transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} aria-hidden="true" /> Back to Journal
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function ArticleDetail() {
  const { post } = Route.useLoaderData();
  const related = getRelated(post.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ————— Article header ————— */}
        <article>
          <div className="mx-auto max-w-[760px] px-6 pb-10 pt-12 lg:px-8 lg:pt-16">
            <Reveal>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-teal-deep"
              >
                <ArrowLeft size={14} aria-hidden="true" /> Back to Journal
              </Link>

              <p className="eyebrow mt-8 text-teal-deep">{post.categoryLabel}</p>
              <h1 className="mt-4 heading-page">
                {post.title}
              </h1>

              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-border/70 py-3.5 text-[0.75rem] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="font-semibold text-foreground/80">Dr. Sai Anjuri</span>
                <span aria-hidden="true" className="h-3 w-px bg-border" />
                <span>{post.date}</span>
                <span aria-hidden="true" className="h-3 w-px bg-border" />
                <span>{post.readingTime}</span>
              </div>
            </Reveal>
          </div>

          {/* ————— Hero image ————— */}
          <div className="mx-auto max-w-[1000px] px-6 lg:px-8">
            <Reveal delay={60}>
              <ArticleImage
                src={post.image}
                alt={post.title}
                category={post.category}
                ratio="aspect-[16/9]"
              />
            </Reveal>
          </div>

          {/* ————— Body ————— */}
          <div className="mx-auto max-w-[720px] px-6 lg:px-8 section-lg">
            <Reveal className="text-[1.0625rem] leading-[1.8] text-foreground/85">
              <p className="text-[1.15rem] leading-[1.7] text-muted-foreground">{post.intro}</p>

              <span aria-hidden="true" className="my-10 block h-px w-full bg-border/70" />

              {post.sections.map((section) => (
                <section key={section.heading} className="mt-10 first:mt-0">
                  <h2 className="heading-card">{section.heading}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="mt-5">
                      {p}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-6 space-y-2.5 pl-5">
                      {section.bullets.map((b) => (
                        <li key={b} className="list-disc marker:text-teal">
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <div className="mt-14 border-l-2 border-accent bg-secondary/50 py-7 pl-6 pr-6">
                <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Practical Takeaways
                </h2>
                <ul className="mt-5 space-y-3">
                  {post.takeaways.map((t) => (
                    <li key={t} className="flex gap-3 text-[1rem] leading-[1.7]">
                      <span aria-hidden="true" className="mt-[0.6em] h-px w-4 shrink-0 bg-teal" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-14 heading-card">Closing thoughts</h2>
              {post.conclusion.map((p) => (
                <p key={p.slice(0, 40)} className="mt-5">
                  {p}
                </p>
              ))}

              {post.disclaimer ? (
                <p className="mt-10 border-t border-border/70 pt-6 text-[0.875rem] italic leading-[1.7] text-muted-foreground">
                  {post.disclaimer}
                </p>
              ) : null}
            </Reveal>


            {/* ————— Author ————— */}
            <Reveal delay={70}>
              <div className="mt-14 flex items-center gap-5 border-t border-border/70 pt-8">
                <img
                  src={portraitAsset}
                  alt="Dr. Sai Anjuri"
                  loading="lazy"
                  decoding="async"
                  className="h-16 w-16 shrink-0 rounded-full border-2 border-teal object-cover object-[center_25%]"
                />
                <div className="min-w-0">
                  <p className="text-[1rem] font-bold tracking-[-0.01em]">Dr. Sai Anjuri</p>
                  <p className="mt-1 text-[0.8125rem] text-muted-foreground">
                    PharmD • Fitness • Nutrition • Creative Photography
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </article>

        {/* ————— Related ————— */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-md">
            <Reveal>
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Continue Reading
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 70}>
                  <article className="border-t border-border/70 pt-6">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                      {item.categoryLabel}
                    </p>
                    <h3 className="mt-3 text-[1.0625rem] font-bold leading-[1.35] tracking-[-0.01em]">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: item.slug }}
                        className="transition-colors hover:text-teal-deep"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {item.readingTime}
                    </p>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: item.slug }}
                      className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-teal-deep transition-colors hover:text-accent"
                    >
                      Read Article <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
