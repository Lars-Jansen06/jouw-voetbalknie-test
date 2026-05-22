import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Dumbbell,
  Flame,
  Heart,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";

export const Route = createFileRoute("/")({
  component: Landing,
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary">
        <span className="absolute -left-1 top-1 text-[10px] font-black text-primary">+</span>
        <Activity className="h-4 w-4 text-foreground" strokeWidth={2.5} />
        <Heart className="absolute -right-1 bottom-1 h-2.5 w-2.5 fill-accent text-accent" />
      </div>
      <div className="leading-none">
        <div className={`text-base font-black tracking-tight ${light ? "text-background" : "text-foreground"}`}>
          Jouw <span className="block -mt-0.5">Voetbalknie</span>
        </div>
      </div>
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#hoe" className="transition-colors hover:text-foreground">Hoe het werkt</a>
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="/app-in-ontwikkeling" className="transition-colors hover:text-foreground">Download</a>
        </nav>
        <a
          href="/app-in-ontwikkeling"
          className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Start Gratis
        </a>
      </div>
    </header>
  );
}

function Tagline() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] font-bold uppercase tracking-widest">
      <span className="text-primary">Herstel.</span>
      <span className="text-accent">Train.</span>
      <span style={{ color: "var(--brand-orange)" }}>Speel weer.</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-24 top-40 h-[380px] w-[380px] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-24">
        <Reveal>
          <Tagline />
          <h1 className="mt-6 text-balance text-5xl font-black uppercase italic leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Fysio,
            <br />
            <span className="text-primary">opnieuw</span>
            <br />
            <span className="text-accent">uitgevonden</span>
            <br />
            <span style={{ color: "var(--brand-orange)" }}>als game.</span>
          </h1>
          <p className="mt-7 max-w-md text-lg font-medium text-muted-foreground">
            Herstel sneller met begeleide oefeningen, streaks en realtime
            voortgang. Wetenschappelijk onderbouwd. Motiverend van begin tot
            comeback.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/app-in-ontwikkeling"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-bold uppercase tracking-wide text-background transition-all hover:gap-3"
            >
              Start Gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#hoe"
              className="inline-flex h-12 items-center px-2 text-sm font-bold uppercase tracking-wide text-foreground hover:text-primary"
            >
              Bekijk hoe →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Gratis starten</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Geen toestel nodig</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Door fysio's ontworpen</div>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative mx-auto w-fit">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-transparent to-accent/25 blur-2xl" />
            <div className="animate-[float_6s_ease-in-out_infinite]">
              <PhoneMockup />
            </div>
            <div className="absolute -left-4 top-24 z-10 hidden items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-xl sm:flex">
              <Flame className="h-4 w-4" style={{ color: "var(--brand-orange)" }} />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">12-dagen streak</span>
            </div>
            <div className="absolute -right-6 bottom-32 z-10 hidden items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-xl sm:flex">
              <Trophy className="h-4 w-4 text-accent" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Silver card unlocked</span>
            </div>
          </div>
        </Reveal>

      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      kicker: "Intake",
      title: "Kies je herstelplan",
      desc: "Vertel ons over je klacht en doelen. Wij stellen een plan op dat past bij jouw tempo.",
      color: "var(--brand-purple)",
    },
    {
      n: "02",
      kicker: "Train",
      title: "Volg begeleide oefeningen",
      desc: "Korte, duidelijke sessies met video-coaching — ontworpen door fysiotherapeuten.",
      color: "var(--brand-green)",
    },
    {
      n: "03",
      kicker: "Comeback",
      title: "Volg voortgang & verdien rewards",
      desc: "Bouw streaks op, verdien badges en zie je herstel tot leven komen.",
      color: "var(--brand-orange)",
    },
  ];
  return (
    <section id="hoe" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Hoe het werkt</p>
          <h2 className="mt-4 text-4xl font-black uppercase italic tracking-tight md:text-5xl">
            Herstel in <span className="text-primary">drie</span> stappen.
          </h2>
          <p className="mt-4 font-medium text-muted-foreground">
            Simpel. Gestructureerd. Motiverend — elke dag.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{ background: s.color }}
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color: s.color }}>
                  {s.kicker}
                </span>
                <span className="font-mono text-3xl font-black text-muted-foreground/40">{s.n}</span>
              </div>
              <h3 className="mt-6 text-xl font-black uppercase tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Trophy, title: "Gamified workouts", desc: "Levels, badges en rewards — elke sessie een kleine overwinning.", color: "var(--brand-purple)" },
    { icon: Target, title: "Slim herstelplan", desc: "Past zich aan je voortgang, pijn en agenda aan.", color: "var(--brand-green)" },
    { icon: Flame, title: "Daily streaks", desc: "Bouw consistentie op met zachte nudges en streak-bescherming.", color: "var(--brand-orange)" },
    { icon: BarChart3, title: "Voortgang & inzicht", desc: "Zie mobiliteit, kracht en consistentie groeien.", color: "var(--brand-yellow)" },
  ];
  return (
    <section id="features" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Features</p>
            <h2 className="mt-4 text-4xl font-black uppercase italic tracking-tight md:text-5xl">
              Gebouwd om je <span className="text-accent">in beweging</span> te houden.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                  style={{ background: f.color }}
                >
                  <f.icon className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 text-base font-black uppercase tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoreBadge({ store }: { store: "ios" | "android" }) {
  return (
    <a
      href="#"
      className="inline-flex h-14 items-center gap-3 rounded-2xl bg-foreground px-5 text-background transition-transform hover:scale-[1.03]"
    >
      {store === "ios" ? (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.46 2.23-1.2 3.04-.79.87-2.07 1.54-3.13 1.46-.13-1.1.42-2.27 1.13-3.03.79-.86 2.13-1.5 3.2-1.47zM20.5 17.32c-.55 1.27-.82 1.84-1.53 2.96-1 1.56-2.41 3.5-4.16 3.52-1.55.02-1.95-1.01-4.06-1-2.1.01-2.55 1.02-4.1 1-1.75-.03-3.09-1.78-4.09-3.34-2.8-4.36-3.1-9.48-1.37-12.21 1.23-1.94 3.18-3.08 5-3.08 1.86 0 3.03 1.02 4.57 1.02 1.5 0 2.41-1.02 4.56-1.02 1.63 0 3.36.89 4.59 2.43-4.04 2.21-3.38 7.98.59 9.72z"/></svg>
      ) : (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.7c-.36.38-.57.97-.57 1.74v17.12c0 .77.21 1.36.6 1.72l.1.08L13.4 12.7v-.23L3.7 1.62l-.1.08z"/><path d="M16.6 16.04l-3.2-3.2v-.23l3.2-3.2.07.04 3.78 2.15c1.08.61 1.08 1.62 0 2.24l-3.78 2.15-.07.05z"/><path d="M16.67 15.99L13.4 12.7 3.6 22.36c.36.38.94.42 1.6.05l11.47-6.42"/><path d="M16.67 9.41L5.2 2.99c-.66-.37-1.24-.32-1.6.06l9.8 9.65 3.27-3.29z"/></svg>
      )}
      <span className="flex flex-col items-start leading-tight">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-80">
          {store === "ios" ? "Download in de" : "Download op"}
        </span>
        <span className="text-sm font-bold">
          {store === "ios" ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}



function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm md:flex-row">
        <Logo />
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Jouw Voetbalknie — Herstel. Train. Speel weer.
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
