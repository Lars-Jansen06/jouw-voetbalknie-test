import { Zap, CheckCircle2, Shield, Activity, Calendar, BarChart3 } from "lucide-react";

function Stat({
  label,
  value,
  percent,
  color,
}: {
  label: string;
  value: string;
  percent: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-foreground">
        <span>{label}</span>
        <span className="text-foreground/80">{value}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full"
          style={{ width: `${percent}%`, background: color }}
        />
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] md:w-[340px]">
      {/* Phone shell */}
      <div className="relative rounded-[3rem] border-[10px] border-foreground bg-foreground p-2 shadow-[0_40px_80px_-20px_rgba(2,6,23,0.45)]">
        <div className="relative overflow-hidden rounded-[2.3rem] bg-background">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-semibold text-foreground">
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-white">17:40</span>
            <span className="font-mono tracking-tighter">●●● 5G ▮</span>
          </div>

          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />

          {/* Screen content */}
          <div className="px-5 pb-5 pt-3">
            <div className="text-foreground/60">‹</div>

            {/* Stat tiles */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-card p-3 text-center shadow-sm">
                <Zap className="mx-auto h-4 w-4" style={{ color: "var(--brand-orange)" }} fill="currentColor" />
                <div className="mt-1 text-2xl font-black text-foreground">3</div>
                <div className="font-mono text-[8px] font-bold tracking-widest text-muted-foreground">DAGEN STREAK</div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-3 text-center shadow-sm">
                <CheckCircle2 className="mx-auto h-4 w-4 text-accent" />
                <div className="mt-1 text-2xl font-black text-foreground">3</div>
                <div className="font-mono text-[8px] font-bold tracking-widest text-muted-foreground">SESSIES KLAAR</div>
              </div>
            </div>

            {/* Attributen card */}
            <div className="mt-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="font-mono text-[9px] font-bold tracking-widest text-muted-foreground">
                ATTRIBUTEN GROEI
              </div>
              <div className="mt-3 space-y-2.5">
                <Stat label="REHABILITATIE (REH)" value="35%" percent={35} color="var(--brand-purple)" />
                <Stat label="FYSIEK (PHY)" value="33%" percent={33} color="var(--brand-purple)" />
                <Stat label="KRACHT (STR)" value="43%" percent={43} color="var(--brand-green)" />
                <Stat label="PACE (PAC)" value="45%" percent={45} color="var(--brand-orange)" />
              </div>
            </div>

            {/* Herstel status */}
            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-black italic tracking-tight text-foreground">
                  HERSTEL STATUS
                </div>
                <div className="font-mono text-[9px] font-bold tracking-widest text-primary">
                  OP KOERS VOOR SILVER
                </div>
              </div>
            </div>

            {/* Tab bar */}
            <div className="mt-4 flex items-center justify-around border-t border-border pt-3">
              {[
                { icon: Activity, label: "GYM", active: false },
                { icon: Calendar, label: "AGENDA", active: false },
                { icon: BarChart3, label: "STATS", active: true },
              ].map(({ icon: Icon, label, active }) => (
                <div key={label} className="flex flex-col items-center gap-0.5">
                  <Icon className={`h-4 w-4 ${active ? "text-primary" : "text-muted-foreground"}`} strokeWidth={2.5} />
                  <span
                    className={`font-mono text-[8px] font-bold tracking-widest ${
                      active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
