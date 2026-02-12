import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, ArrowUpRight, GraduationCap } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";

const socials = [
  {
    name: "Email",
    href: "mailto:sbolger@cord.edu",
    icon: Mail,
    sub: "sbolger@cord.edu",
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sambolger",
    icon: SiLinkedin,
    sub: "linkedin.com/in/sambolger",
    external: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/SammyBolger",
    icon: SiGithub,
    sub: "github.com/SammyBolger",
    external: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sammybolger",
    icon: SiInstagram,
    sub: "instagram.com/sammybolger",
    external: true,
  },
  {
    name: "X",
    href: "https://x.com/SammyBolger",
    icon: SiX,
    sub: "x.com/SammyBolger",
    external: true,
  },
];

export default function Contact() {
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
                Open to opportunities
              </span>
            </div>

            <h1
              className="mb-3 text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight"
              data-testid="text-contact-page-heading"
            >
              Get In{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(124,92,255,1), rgba(46,233,166,0.95))",
                }}
              >
                Touch
              </span>
            </h1>

            <p className="mb-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
              I'm always happy to connect, whether it's about job opportunities,
              a project collaboration, or just to say hi. Feel free to reach
              out through any of the channels below.
            </p>

            <a href="mailto:sbolger@cord.edu">
              <Button variant="outline" className="gap-2 text-[13px]" data-testid="button-email-hero">
                <Mail className="h-3.5 w-3.5" /> Send me an email
              </Button>
            </a>
          </Reveal>

          <Reveal delay={120}>
            <Card
              className="overflow-hidden border-border/50"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
              data-testid="card-contact-info"
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
                  data-testid="img-contact-headshot"
                />
              </div>

              <div className="flex items-center gap-2.5 border-t border-border/50 p-4">
                <a href="mailto:sbolger@cord.edu" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="Email" data-testid="link-contact-email-icon">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/sambolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="LinkedIn" data-testid="link-contact-linkedin-icon">
                  <SiLinkedin className="h-4 w-4" />
                </a>
                <a href="https://github.com/SammyBolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="GitHub" data-testid="link-contact-github-icon">
                  <SiGithub className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/sammybolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="Instagram" data-testid="link-contact-instagram-icon">
                  <SiInstagram className="h-4 w-4" />
                </a>
                <a href="https://x.com/SammyBolger" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card/40 text-foreground hover-elevate" aria-label="X / Twitter" data-testid="link-contact-x-icon">
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
            <div className="mb-5">
              <h2 className="text-lg font-bold tracking-tight" data-testid="text-connect-heading">Connect</h2>
              <p className="text-[13px] text-muted-foreground">
                The best ways to reach me online.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((social, i) => (
              <Reveal key={social.name} delay={i * 60}>
                <a
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer" : undefined}
                  data-testid={`link-contact-${social.name.toLowerCase()}`}
                >
                  <Card className="h-full border-border/50 bg-card/40 hover-elevate">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-card/60 border border-border/50">
                        <social.icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div className="flex flex-col gap-0.5 overflow-hidden">
                        <span className="text-[13px] font-semibold flex items-center gap-1.5">
                          {social.name}
                          {social.external && <ArrowUpRight className="h-3 w-3 text-muted-foreground" />}
                        </span>
                        <span className="truncate text-xs text-muted-foreground">{social.sub}</span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
