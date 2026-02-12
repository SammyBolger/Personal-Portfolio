import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  MapPin,
  Heart,
  Target,
  Mail,
} from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";

export default function About() {
  return (
    <div>
      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 px-5 md:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border/50 bg-card/40 px-3 py-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #2b5cff, #2dd4bf)",
                  boxShadow: "0 0 0 6px rgba(124,92,255,0.15)",
                }}
              />
              <span className="text-xs text-muted-foreground">
                Getting to know me
              </span>
            </div>

            <h1
              className="mb-3 text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight"
              data-testid="text-about-page-heading"
            >
              A Little More{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(124,92,255,1), rgba(46,233,166,0.95))",
                }}
              >
                About Me
              </span>
            </h1>

            <p className="mb-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
              I'm Sammy Bolger, a Data Science major with minors in Mathematics and
              Cybersecurity Administration at Concordia College in Moorhead, MN.
              I graduate in 2026 and I'm looking for opportunities where I can
              put my skills to work on real problems.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Card
              className="overflow-hidden border-border/50"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
              data-testid="card-about-snapshot"
            >
              <div className="flex flex-wrap items-center gap-2 p-4 pb-0">
                <Badge variant="outline" className="gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> Minnesota / Moorhead / Apple Valley
                </Badge>
                <Badge variant="outline" className="gap-1.5 text-xs text-muted-foreground">
                  <GraduationCap className="h-3 w-3" /> Concordia Moorhead '26
                </Badge>
              </div>

              <div className="p-4">
                <img
                  src="/headshot.jpg"
                  alt="Sammy Bolger"
                  className="w-full rounded-[16px] border border-border/50 object-cover"
                  style={{ aspectRatio: "1/1" }}
                  data-testid="img-about-headshot"
                />
              </div>

              <div className="flex items-center gap-2.5 border-t border-border/50 p-4">
                <a href="mailto:sbolger@cord.edu" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="Email" data-testid="link-about-email">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/sambolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="LinkedIn" data-testid="link-about-linkedin">
                  <SiLinkedin className="h-4 w-4" />
                </a>
                <a href="https://github.com/SammyBolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="GitHub" data-testid="link-about-github">
                  <SiGithub className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/sammybolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="Instagram" data-testid="link-about-instagram">
                  <SiInstagram className="h-4 w-4" />
                </a>
                <a href="https://x.com/SammyBolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="X / Twitter" data-testid="link-about-x">
                  <SiX className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-5">
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
            <Reveal>
              <Card className="h-full border-border/50 bg-card/40 hover-elevate" data-testid="card-education">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/50 bg-card/60">
                      <GraduationCap className="h-4.5 w-4.5 text-foreground" />
                    </div>
                    <h3 className="text-[15px] font-bold">Education</h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    Concordia College, Moorhead. Studying Data Science with
                    minors in Math and Cybersecurity. Coursework in forecasting,
                    statistics, network security, and software development.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={80}>
              <Card className="h-full border-border/50 bg-card/40 hover-elevate" data-testid="card-goals">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/50 bg-card/60">
                      <Target className="h-4.5 w-4.5 text-foreground" />
                    </div>
                    <h3 className="text-[15px] font-bold">Goals</h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    Looking for Summer 2026 internships or entry level positions
                    in data science, data engineering, analytics, or software
                    engineering where I can grow and make an impact.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={160}>
              <Card className="h-full border-border/50 bg-card/40 hover-elevate" data-testid="card-interests">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/50 bg-card/60">
                      <Heart className="h-4.5 w-4.5 text-foreground" />
                    </div>
                    <h3 className="text-[15px] font-bold">Interests</h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    Sports analytics, data backed sports betting, building PCs,
                    video games, and spending time with family and friends. I
                    played college basketball and love using data to analyze
                    the game.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-5">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold tracking-tight" data-testid="text-experience-heading">Experience</h2>
                <p className="max-w-[62ch] text-[13px] text-muted-foreground">
                  Relevant work and leadership experience.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-5 grid grid-cols-1 gap-3.5 md:grid-cols-3">
            <Reveal delay={60}>
              <Card className="h-full border-border/50 bg-card/40 hover-elevate" data-testid="card-experience-athlete">
                <CardContent className="p-4">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-[15px] font-bold">Student Athlete</h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    Balanced a full academic workload with the demands of college
                    basketball, building discipline, teamwork, and time
                    management skills that carry into everything I do.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={120}>
              <Card className="h-full border-border/50 bg-card/40 hover-elevate" data-testid="card-experience-apple-valley">
                <CardContent className="p-4">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-[15px] font-bold">City of Apple Valley</h3>
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      4 years
                    </Badge>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    Parks maintenance crew. Mowed lawns, prepped and groomed
                    baseball fields, and made sure parks were kept up to standard.
                    Learned responsibility and work ethic through hands-on outdoor
                    work.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={180}>
              <Card className="h-full border-border/50 bg-card/40 hover-elevate" data-testid="card-experience-projects">
                <CardContent className="p-4">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-[15px] font-bold">Academic Projects</h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    Built forecasting models, designed secure network architectures,
                    developed full stack web applications, and explored machine
                    learning through coursework and independent projects.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
