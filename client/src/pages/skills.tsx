import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";
import {
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const programmingSkills = [
  { img: "/images/python.png", name: "Python", sub: "Data + scripting" },
  { img: "/images/sql.svg", name: "SQL", sub: "Databases + queries" },
  { img: "/images/JS.png", name: "JavaScript", sub: "Web + logic" },
  { name: "TypeScript", sub: "Typed JS", Icon: SiTypescript, color: "#3178C6" },
  { name: "Java", sub: "OOP + backend", Icon: FaJava, color: "#E76F00" },
  { img: "/images/R.png", name: "R", sub: "Statistics + analysis" },
];

const webSkills = [
  { img: "/images/html.png", name: "HTML", sub: "Structure" },
  { img: "/images/css.png", name: "CSS", sub: "Layout + design" },
  { img: "/images/react.png", name: "React", sub: "Components" },
  { name: "Node.js", sub: "Server side JS", Icon: SiNodedotjs, color: "#339933" },
  { name: "Git", sub: "Version control", Icon: SiGit, color: "#F05032" },
  { name: "Tailwind CSS", sub: "Utility first styling", Icon: SiTailwindcss, color: "#06B6D4" },
];

const analyticsSkills = [
  { img: "/images/tableau.png", name: "Tableau", sub: "Dashboards" },
  { img: "/images/excel.png", name: "Excel", sub: "Modeling + reporting" },
  { img: "/images/googlesheets.png", name: "Google Sheets", sub: "Collaboration" },
  { name: "Pandas", sub: "Data wrangling", Icon: SiPandas, color: "#150458" },
  { name: "NumPy", sub: "Numerical computing", Icon: SiNumpy, color: "#4DABCF" },
  { name: "scikit-learn", sub: "Machine learning", Icon: SiScikitlearn, color: "#F7931E" },
];

type SkillItem = {
  name: string;
  sub: string;
  img?: string;
  Icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color?: string;
};

function SkillGrid({ skills, delay = 0 }: { skills: SkillItem[]; delay?: number }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, i) => (
        <Reveal key={skill.name} delay={delay + i * 60}>
          <div
            className="flex items-center gap-3 rounded-md border border-border/50 bg-card/40 p-3.5 hover-elevate"
            data-testid={`skill-${skill.name.toLowerCase().replace(/[\s.]+/g, "-")}`}
          >
            {skill.img ? (
              <img
                src={skill.img}
                alt={skill.name}
                className="h-9 w-9 object-contain"
                style={{ filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.22))" }}
              />
            ) : skill.Icon ? (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                <skill.Icon
                  className="h-7 w-7"
                  style={{ color: skill.color, filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.2))" }}
                />
              </div>
            ) : null}
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] font-semibold">{skill.name}</span>
              <span className="text-xs text-muted-foreground">{skill.sub}</span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Skills() {
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
                What I bring to the table
              </span>
            </div>

            <h1
              className="mb-3 text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight"
              data-testid="text-skills-page-heading"
            >
              My{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(124,92,255,1), rgba(46,233,166,0.95))",
                }}
              >
                Technical
              </span>{" "}
              Toolkit
            </h1>

            <p className="mb-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
              Languages, frameworks, and tools I use across data science,
              web development, analytics, and cybersecurity. I'm always excited
              to keep learning and advancing my skillset.
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
              data-testid="card-skills-highlights"
            >
              <CardContent className="p-4">
                <h3 className="mb-2 text-[15px] font-bold">What drives me</h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  I'm drawn to tools and technologies that let me turn raw data
                  into real insights and build things people actually use. Every
                  project is a chance to pick up something new.
                </p>
              </CardContent>
              <div className="flex flex-wrap items-center gap-2 border-t border-border/50 p-4">
                <Badge variant="outline" className="gap-1.5 text-xs text-muted-foreground">
                  <Code className="h-3 w-3" />
                  <strong className="mr-1 text-foreground">Always learning</strong>
                  and growing
                </Badge>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-5">
          <Reveal>
            <div className="mb-5">
              <h2 className="text-lg font-bold tracking-tight" data-testid="text-programming-heading">Programming</h2>
              <p className="text-[13px] text-muted-foreground">
                Languages I use for building, scripting, and analysis.
              </p>
            </div>
          </Reveal>
          <SkillGrid skills={programmingSkills} />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-5">
          <Reveal>
            <div className="mb-5">
              <h2 className="text-lg font-bold tracking-tight" data-testid="text-webdev-heading">Web Development</h2>
              <p className="text-[13px] text-muted-foreground">
                Tools for building clean, modern applications.
              </p>
            </div>
          </Reveal>
          <SkillGrid skills={webSkills} delay={100} />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-5">
          <Reveal>
            <div className="mb-5">
              <h2 className="text-lg font-bold tracking-tight" data-testid="text-analytics-heading">Analytics & Tools</h2>
              <p className="text-[13px] text-muted-foreground">
                What I use for data analysis, and visualization.
              </p>
            </div>
          </Reveal>
          <SkillGrid skills={analyticsSkills} delay={200} />
        </div>
      </section>
    </div>
  );
}
