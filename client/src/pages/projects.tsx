import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { SiGithub, SiNba, SiF1, SiSpotify } from "react-icons/si";

const projects = [
  {
    id: "splitspace",
    title: "SplitSpace",
    desc: "A full stack multi tenant SaaS expense sharing platform. Create or join households via invite codes, track shared expenses with equal or custom splits, view real time balances, settle debts, and visualize spending by category. Features row level security, atomic household management, and a mobile friendly dark/light mode design.",
    screenshot: "/images/project-splitspace.png",
    logo: "/images/splitspace-bw.png",
    logoType: "img" as const,
    chips: [
      { label: "Stack", value: "TypeScript, React, Express, Supabase" },
      { label: "Type", value: "Full Stack SaaS" },
    ],
    repo: "https://github.com/SammyBolger/SplitSpace",
  },
  {
    id: "nba-analytics",
    title: "NBA Analytics",
    desc: "Real time NBA analytics dashboard with ML powered moneyline predictions. Features user accounts, per user pick tracking with W L records, live game data from BallDontLie API, auto grading picks, daily model retraining, and an interactive game calendar. For informational and educational purposes only.",
    screenshot: "/images/project-nba.png",
    logoType: "nba" as const,
    chips: [
      { label: "Stack", value: "Python, FastAPI, React, scikit-learn" },
      { label: "Type", value: "ML / Full Stack" },
    ],
    repo: "https://github.com/SammyBolger/NBA-Analytics",
  },
  {
    id: "f1-race-analysis",
    title: "F1 Race Analysis",
    desc: "Interactive Formula 1 race analysis and telemetry visualization tool. Includes a desktop GUI for selecting seasons, races, and sessions, then launches an animated replay with real F1 telemetry data. Features a live leaderboard, driver telemetry overlays with speed, gear, and DRS status, and full playback controls.",
    screenshot: "/images/project-f1.png",
    logoType: "f1" as const,
    chips: [
      { label: "Stack", value: "Python, FastF1, PySide6, Arcade" },
      { label: "Type", value: "Data Visualization / Desktop" },
    ],
    repo: "https://github.com/SammyBolger/F1-Race-Analysis",
  },
  {
    id: "spotify-recommender",
    title: "Spotify Music Recommender",
    desc: "A content based music recommendation system using cosine similarity on audio features like danceability, energy, valence, and tempo. Features mood based, song based, and custom feature slider recommendations across 89,000+ tracks and 113 genres with interactive radar chart visualizations.",
    screenshot: "/images/project-spotify.png",
    logoType: "spotify" as const,
    chips: [
      { label: "Stack", value: "Python, Streamlit, scikit-learn, Pandas" },
      { label: "Type", value: "Machine Learning" },
    ],
    repo: "https://github.com/SammyBolger/Spotify-Music-Recommendation-System",
  },
];

export default function Projects() {
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
                What I've been building
              </span>
            </div>

            <h1
              className="mb-3 text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight"
              data-testid="text-projects-page-heading"
            >
              All Of My{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(124,92,255,1), rgba(46,233,166,0.95))",
                }}
              >
                Projects
              </span>
            </h1>

            <p className="mb-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
              A collection of the projects I've worked on across data science,
              web development, and machine learning. Each one taught me
              something new and pushed me to build better solutions.
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
              data-testid="card-project-focus"
            >
              <CardContent className="p-4">
                <h3 className="mb-2 text-[15px] font-bold">
                  How I approach projects
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  I like to start with a real problem, figure out the right tools
                  to solve it, and build something that works end to end. Every
                  project here has a GitHub repo you can explore.
                </p>
              </CardContent>
              <div className="flex flex-wrap items-center gap-2 border-t border-border/50 p-4">
                <Badge variant="outline" className="gap-1.5 text-xs text-muted-foreground">
                  <SiGithub className="h-3 w-3" />
                  <strong className="mr-1 text-foreground">All repos</strong>
                  linked below
                </Badge>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="py-16">
        <div className="mx-auto max-w-[1120px] px-5">
          <Reveal>
            <div className="mb-5">
              <h2 className="text-lg font-bold tracking-tight" data-testid="text-projects-heading">Projects</h2>
              <p className="text-[13px] text-muted-foreground">
                Each project includes a description, preview, and link to the source code.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <Card
                  id={project.id}
                  className="flex h-full flex-col border-border/50 bg-card/40 hover-elevate"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="overflow-hidden rounded-t-md bg-black/20">
                    <img
                      src={project.screenshot}
                      alt={`${project.title} preview`}
                      className="w-full object-contain"
                      style={{ aspectRatio: "16/9" }}
                      data-testid={`img-project-${project.id}`}
                    />
                  </div>
                  <CardContent className="flex-1 p-4">
                    <div className="mb-2 flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-card/60 border border-border/50">
                        {project.logoType === "img" && "logo" in project ? (
                          <img src={project.logo} alt={project.title} className="h-5 w-5 object-contain dark:invert" />
                        ) : project.logoType === "nba" ? (
                          <SiNba className="h-5 w-5 text-foreground" />
                        ) : project.logoType === "f1" ? (
                          <SiF1 className="h-5 w-5 text-foreground" />
                        ) : (
                          <SiSpotify className="h-5 w-5 text-foreground" />
                        )}
                      </div>
                      <h3 className="text-[15px] font-bold">{project.title}</h3>
                    </div>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {project.desc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.chips.map((chip) => (
                        <Badge key={chip.label} variant="outline" className="text-xs text-muted-foreground">
                          <strong className="mr-1 text-foreground">{chip.label}</strong>
                          {chip.value}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <div className="border-t border-border/50 px-4 py-3">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[13px] font-medium text-foreground transition-colors"
                      data-testid={`link-repo-${project.id}`}
                    >
                      <SiGithub className="h-3.5 w-3.5" /> View on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
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
            <Card className="border-border/50 bg-card/40" data-testid="card-more-projects">
              <CardContent className="flex flex-wrap items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="text-[15px] font-bold">See more on GitHub</h3>
                  <p className="text-[13px] text-muted-foreground">
                    Check out my other projects, contributions, and experiments.
                  </p>
                </div>
                <a href="https://github.com/SammyBolger" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="gap-2 text-[13px]" data-testid="link-github-profile">
                    <SiGithub className="h-4 w-4" /> github.com/SammyBolger <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
