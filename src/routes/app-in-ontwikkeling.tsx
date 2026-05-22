import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/app-in-ontwikkeling")({
  component: AppInOntwikkeling,
});

function AppInOntwikkeling() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-bold text-primary uppercase tracking-wide mb-4">
          Jouw VoetbalKnie
        </p>

        <h1 className="text-4xl md:text-6xl font-black text-foreground uppercase mb-6">
          De app is nog in ontwikkeling
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Bedankt voor je interesse in Jouw VoetbalKnie. We zijn hard bezig om de app zo snel mogelijk online te krijgen.
        </p>

        <p className="text-muted-foreground mb-10">
          Zodra de app beschikbaar is, willen we voetballers met een knieblessure helpen met duidelijke stappen, veilige oefeningen en meer vertrouwen tijdens hun herstel.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-bold hover:opacity-90 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
