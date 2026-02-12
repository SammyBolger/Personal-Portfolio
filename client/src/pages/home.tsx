import { Link } from "wouter";
import { Reveal } from "@/components/reveal";
import { useTypewriter } from "@/hooks/use-typewriter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { SiGithub, SiLinkedin, SiX, SiInstagram, SiF1, SiNba } from "react-icons/si";

const roles = [
  "Data Science Major",
  "Math Minor",
  "Cybersecurity Minor",
  "Student",
  "Programmer",
  "Learner",
];

const skills = [
  { img: "/images/python.png", name: "Python", sub: "Data + scripting" },
  { img: "/images/JS.png", name: "JavaScript", sub: "Web + logic" },
  { img: "/images/html.png", name: "HTML & CSS", sub: "Structure + styling" },
  { img: "/images/sql.svg", name: "SQL", sub: "Databases + queries" },
];

const projects = [
  {
    id: "splitspace",
    title: "SplitSpace",
    desc: "A web app for splitting expenses between groups. Built with a clean UI and real-time calculations to make group payments easy.",
    logo: "/images/splitspace-bw.png",
    logoType: "img" as const,
    link: "/projects",
  },
  {
    id: "nba-analytics",
    title: "NBA Analytics",
    desc: "Data-driven analysis of NBA team performance and attendance trends using time-series forecasting and statistical modeling.",
    logoType: "nba" as const,
    link: "/projects",
  },
  {
    id: "f1-race-analysis",
    title: "F1 Race Analysis",
    desc: "Performance analysis of Formula 1 race data exploring lap times, pit strategies, and driver comparisons through visualizations.",
    logoType: "f1" as const,
    link: "/projects",
  },
];

export default function Home() {
  const typedText = useTypewriter(roles);

  return (
    <div>
      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 px-5 md:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border/50 bg-card/40 px-3 py-2" data-testid="status-availability">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #2b5cff, #2dd4bf)",
                  boxShadow: "0 0 0 6px rgba(124,92,255,0.15)",
                }}
              />
              <span className="text-xs text-muted-foreground">
                Open to Summer 2026 internships and entry level roles
              </span>
            </div>

            <p
              className="mb-3 text-[clamp(2.2rem,3.5vw,2.8rem)] font-extrabold leading-tight tracking-tight"
              data-testid="text-greeting"
            >
              Hey I'm{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(124,92,255,1), rgba(46,233,166,0.95))",
                }}
              >
                Sammy
              </span>
            </p>

            <h1
              className="mb-5 text-[clamp(2.2rem,3.5vw,2.8rem)] font-extrabold leading-tight tracking-tight"
              data-testid="text-typewriter"
            >
              <span>I'm a </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(124,92,255,1), rgba(46,233,166,0.95))",
                }}
              >
                {typedText}
              </span>
              <span
                className="ml-0.5 inline-block text-[hsl(230,100%,56%)]"
                style={{ animation: "blink 1.45s steps(2, start) infinite" }}
              >
                |
              </span>
            </h1>

            <p className="max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground" data-testid="text-intro">
              I'm Sammy Bolger, a Data Science major and Mathematics and
              Cybersecurity Administration minor at Concordia College, Moorhead,
              graduating in 2026. I'm passionate about using data to solve
              problems and enjoy exploring new technologies and working on
              projects that make an impact. Welcome to my portfolio!
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
              data-testid="card-profile"
            >
              <div className="flex flex-wrap items-center gap-2 p-4 pb-0">
                <Badge variant="outline" className="gap-1.5 text-xs text-muted-foreground" data-testid="badge-location">
                  <MapPin className="h-3 w-3" /> Minnesota / Moorhead / Apple Valley
                </Badge>
                <Badge variant="outline" className="gap-1.5 text-xs text-muted-foreground" data-testid="badge-school">
                  <GraduationCap className="h-3 w-3" /> Concordia Moorhead '26
                </Badge>
              </div>

              <div className="p-4">
                <img
                  src="/headshot.jpg"
                  alt="Headshot of Sammy Bolger"
                  className="w-full rounded-[16px] border border-border/50 object-cover"
                  style={{ aspectRatio: "1/1" }}
                  data-testid="img-headshot"
                />
              </div>

              <div className="flex items-center gap-2.5 border-t border-border/50 p-4">
                <a href="mailto:sbolger@cord.edu" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="Email" data-testid="link-social-email">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/sambolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="LinkedIn" data-testid="link-social-linkedin">
                  <SiLinkedin className="h-4 w-4" />
                </a>
                <a href="https://github.com/SammyBolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="GitHub" data-testid="link-social-github">
                  <SiGithub className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/sammybolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="Instagram" data-testid="link-social-instagram">
                  <SiInstagram className="h-4 w-4" />
                </a>
                <a href="https://x.com/SammyBolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="X / Twitter" data-testid="link-social-x">
                  <SiX className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-5">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold tracking-tight" data-testid="text-about-heading">About</h2>
                <p className="text-[13px] text-muted-foreground">
                  A quick introduction and what I'm looking for next.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            <Reveal>
              <Card className="h-full border-border/50 bg-card/40 hover-elevate" data-testid="card-about-1">
                <CardContent className="p-4">
                  <h3 className="mb-1.5 text-[15px] font-bold">What I'm about</h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    I enjoy using data to solve real-world problems and I love
                    staying up to date with the latest in technology. I like
                    working on projects where I can learn something new and
                    turn it into something practical.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card className="h-full border-border/50 bg-card/40 hover-elevate" data-testid="card-about-2">
                <CardContent className="p-4">
                  <h3 className="mb-1.5 text-[15px] font-bold">
                    What I'm looking for
                  </h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    I'm looking for Summer 2026 internships or entry level roles
                    in data science, data engineering, data analytics, software
                    engineering, or related tech roles where I can contribute to
                    real projects and keep growing.
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
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold tracking-tight" data-testid="text-skills-heading">Skills</h2>
                <p className="text-[13px] text-muted-foreground">
                  A quick snapshot of the tools I use most.
                </p>
              </div>
              <Link href="/skills">
                <Button variant="outline" className="gap-2 text-[13px]" data-testid="button-skills-page">
                  Skills page <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 60}>
                <div
                  className="flex items-center gap-3 rounded-md border border-border/50 bg-card/40 p-3.5 hover-elevate"
                  data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="h-9 w-9 object-contain"
                    style={{ filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.22))" }}
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-semibold">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.sub}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-5">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold tracking-tight" data-testid="text-projects-heading">Projects</h2>
                <p className="text-[13px] text-muted-foreground">
                  Here are some of the projects I have built.
                </p>
              </div>
              <Link href="/projects">
                <Button variant="outline" className="gap-2 text-[13px]" data-testid="button-view-all-projects">
                  View all <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <Card className="group flex h-full flex-col border-border/50 bg-card/40 hover-elevate" data-testid={`card-project-${project.id}`}>
                  <CardContent className="flex-1 p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-card/60 border border-border/50">
                        {project.logoType === "img" && "logo" in project ? (
                          <img src={project.logo} alt={project.title} className="h-7 w-7 object-contain dark:invert" />
                        ) : project.logoType === "nba" ? (
                          <SiNba className="h-6 w-6 text-foreground" />
                        ) : (
                          <SiF1 className="h-6 w-6 text-foreground" />
                        )}
                      </div>
                      <h3 className="text-[15px] font-bold leading-snug">{project.title}</h3>
                    </div>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {project.desc}
                    </p>
                  </CardContent>
                  <div className="border-t border-border/50 px-4 py-3">
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground transition-colors"
                      data-testid={`link-project-${project.id}`}
                    >
                      Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-5">
          <Reveal>
            <div className="mb-5">
              <h2 className="text-lg font-bold tracking-tight" data-testid="text-contact-heading">Contact</h2>
              <p className="text-[13px] text-muted-foreground">
                Here are the best ways to reach me.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Card
              className="overflow-hidden border-border/50 bg-card/40"
              data-testid="card-contact"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-card/60 border border-border/50">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold">Let's connect</h3>
                    <p className="text-xs text-muted-foreground">I usually respond fastest on email or LinkedIn</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <a href="mailto:sbolger@cord.edu">
                    <Button variant="outline" className="gap-2 text-[13px]" data-testid="button-email">
                      <Mail className="h-3.5 w-3.5" /> Email me
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/sambolger" target="_blank" rel="noreferrer">
                    <Button variant="outline" className="gap-2 text-[13px]" data-testid="button-linkedin">
                      <SiLinkedin className="h-3.5 w-3.5" /> LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com/SammyBolger" target="_blank" rel="noreferrer">
                    <Button variant="outline" className="gap-2 text-[13px]" data-testid="button-github">
                      <SiGithub className="h-3.5 w-3.5" /> GitHub
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/sammybolger" target="_blank" rel="noreferrer">
                    <Button variant="outline" className="gap-2 text-[13px]" data-testid="button-instagram">
                      <SiInstagram className="h-3.5 w-3.5" /> Instagram
                    </Button>
                  </a>
                  <a href="https://x.com/SammyBolger" target="_blank" rel="noreferrer">
                    <Button variant="outline" className="gap-2 text-[13px]" data-testid="button-x">
                      <SiX className="h-3.5 w-3.5" /> X
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
