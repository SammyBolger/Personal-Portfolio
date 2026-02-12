import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";

export default function Resume() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1120px] px-5">
        <Reveal>
          <div className="mb-5">
            <h1 className="text-lg font-bold tracking-tight" data-testid="text-resume-heading">Resume</h1>
            <p className="text-[13px] text-muted-foreground">Coming soon.</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Card className="border-border/50 bg-card/40" data-testid="card-resume-placeholder">
            <CardContent className="p-4">
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                I'm finishing up my resume and will add it here shortly.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
