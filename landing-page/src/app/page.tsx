import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const features = [
  {
    number: "01",
    title: "Socratic by design",
    text: "Umucyo guides students with questions and hints instead of doing the thinking for them.",
  },
  {
    number: "02",
    title: "Build real understanding",
    text: "Work through problems step by step, strengthen reasoning, and turn answers into lasting knowledge.",
  },
  {
    number: "03",
    title: "Reduce AI overreliance",
    text: "The learning engine is designed to make AI a tutor—not a shortcut—so students stay in control of their learning.",
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-[#fbfbfa] text-[#101114]">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section id="home" className="relative isolate px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-10 lg:pb-28">
          <div className="absolute inset-x-0 top-0 -z-10 h-[680px] overflow-hidden">
            <div className="hero-orb hero-orb-one" />
            <div className="hero-orb hero-orb-two" />
            <div className="hero-grid" />
          </div>

          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3.5 py-2 text-xs font-semibold tracking-wide text-black/65 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#6268ee]" />
                AI for independent learning
              </div>

              <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
                Don&apos;t just get the answer.
                <span className="mt-2 block text-[#6268ee]">Learn how to find it.</span>
              </h1>

              <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                Umucyo AI helps students reduce overreliance on AI by turning everyday
                questions into guided learning, critical thinking, and problem-solving practice.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#get-started"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#101114] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#24262b]"
                >
                  Start learning free
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-black/70 transition hover:border-black/20 hover:bg-white"
                >
                  Explore Umucyo
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-black/45">
                <span className="flex items-center gap-2"><span className="text-[#6268ee]">✓</span> Guided, not spoon-fed</span>
                <span className="flex items-center gap-2"><span className="text-[#6268ee]">✓</span> Student-first learning</span>
                <span className="flex items-center gap-2"><span className="text-[#6268ee]">✓</span> Built for Rwanda</span>
              </div>
            </div>

            {/* Product preview */}
            <div className="relative mx-auto w-full max-w-[610px]">
              <div className="absolute -inset-6 -z-10 rounded-[38px] bg-[#6268ee]/10 blur-3xl" />
              <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white p-2 shadow-[0_30px_80px_rgba(16,17,20,0.14)] sm:p-3">
                <div className="overflow-hidden rounded-[21px] border border-black/10 bg-[#f5f5f4]">
                  <div className="flex h-12 items-center justify-between border-b border-black/10 bg-white px-4 sm:px-5">
                    <div className="flex items-center gap-2">
                      <img
                        src="/umucyo-icon.png"
                        alt="Umucyo AI"
                        className="h-7 w-7 rounded-lg"
                      />
                      <span className="text-sm font-bold">Umucyo AI</span>
                    </div>
                    <span className="rounded-full bg-[#6268ee]/10 px-2.5 py-1 text-[10px] font-bold text-[#6268ee]">
                      LEARNING MODE
                    </span>
                  </div>

                  <div className="grid min-h-[390px] grid-cols-[74px_1fr] sm:min-h-[430px] sm:grid-cols-[96px_1fr]">
                    <aside className="border-r border-black/10 bg-white p-2.5 sm:p-3">
                      <div className="space-y-2 pt-1">
                        <div className="rounded-xl bg-[#101114] p-2.5 text-white">
                          <div className="mb-1 text-[9px] uppercase tracking-wider text-white/50">Today</div>
                          <div className="h-1.5 w-8 rounded-full bg-white/80" />
                        </div>
                        <div className="rounded-xl p-2.5">
                          <div className="mb-1 text-[9px] uppercase tracking-wider text-black/35">Progress</div>
                          <div className="h-1.5 w-10 rounded-full bg-black/10" />
                        </div>
                      </div>
                    </aside>

                    <div className="flex flex-col justify-end p-4 sm:p-6">
                      <div className="mb-auto pt-2 sm:pt-5">
                        <div className="mb-4 max-w-[88%] rounded-2xl rounded-tl-md border border-black/10 bg-white p-4 shadow-sm">
                          <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#6268ee]">Umucyo</div>
                          <p className="text-xs leading-5 text-black/65 sm:text-sm sm:leading-6">
                            Instead of giving you the result, let&apos;s break the problem into a smaller step. What information do you already know?
                          </p>
                        </div>
                        <div className="ml-auto max-w-[74%] rounded-2xl rounded-tr-md bg-[#101114] p-4 text-white shadow-sm">
                          <p className="text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                            I know the starting value and the rate of change.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-9 flex-1 rounded-xl bg-[#f5f5f4] px-3.5 py-2.5 text-[11px] text-black/35">
                            Think through your next step...
                          </div>
                          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#6268ee] text-white">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m5 12 14-7-4 14-3-6-7-1Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-xl sm:-left-7">
                <div className="text-[9px] font-bold uppercase tracking-wider text-black/40">Learning progress</div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1.5 w-20 overflow-hidden rounded-full bg-black/10">
                    <div className="h-full w-[72%] rounded-full bg-[#6268ee]" />
                  </div>
                  <span className="text-xs font-bold">72%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6268ee]">Why Umucyo</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                  AI should strengthen your mind, not replace it.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-6 text-black/55 sm:text-base">
                  Umucyo is built around a simple idea: the best answer is the one you understand well enough to reach yourself.
                </p>
              </div>

              <div className="divide-y divide-black/10 border-y border-black/10">
                {features.map((feature) => (
                  <article key={feature.number} className="grid gap-4 py-7 sm:grid-cols-[72px_1fr] sm:gap-8 sm:py-9">
                    <span className="text-xs font-bold tracking-widest text-black/30">{feature.number}</span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.02em]">{feature.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-black/55 sm:text-base">{feature.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6268ee]">Simple by design</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">A better way to use AI for school.</h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 md:grid-cols-3">
              {[
                ["01", "Ask", "Bring your real question, homework problem, or concept you want to understand."],
                ["02", "Think", "Umucyo adapts the conversation with prompts, hints, questions, and explanations."],
                ["03", "Master", "Reach the solution yourself and leave with a stronger understanding—not just a copied answer."],
              ].map(([num, title, text]) => (
                <div key={num} className="bg-white p-7 sm:p-9">
                  <span className="text-xs font-bold text-[#6268ee]">{num}</span>
                  <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="get-started" className="scroll-mt-24 px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#101114] px-6 py-14 text-center text-white sm:px-10 sm:py-20">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9ca1ff]">Your thinking matters</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Make AI your tutor, not your shortcut.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                Start building stronger learning habits with Umucyo AI.
              </p>
              <Link
                href="#home"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#101114] transition hover:-translate-y-0.5 hover:bg-[#f0f0ef]"
              >
                Start learning free
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#fbfbfa] px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <img src="/umucyo-icon.png" alt="" className="h-6 w-6 rounded-md" />
            <span className="font-semibold text-black/70">Umucyo AI</span>
          </div>
          <span>Learn independently. Think critically. Use AI wisely.</span>
        </div>
      </footer>
    </div>
  );
}
