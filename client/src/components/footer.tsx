import { Link } from "wouter";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 text-muted-foreground" data-testid="footer">
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <strong className="text-foreground text-[15px]">Sammy Bolger</strong>
            <p className="text-xs text-muted-foreground max-w-[32ch]">
              Data Science, Mathematics & Cybersecurity at Concordia College, Moorhead.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-foreground">Pages</span>
            <nav className="flex flex-col gap-1">
              <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-home">Home</Link>
              <Link href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-about">About</Link>
              <Link href="/skills" className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-skills">Skills</Link>
              <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-projects">Projects</Link>
              <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-contact">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-foreground">Connect</span>
            <div className="flex items-center gap-2">
              <a href="https://github.com/SammyBolger" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/30" aria-label="GitHub" data-testid="footer-link-github">
                <SiGithub className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.linkedin.com/in/sambolger" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/30" aria-label="LinkedIn" data-testid="footer-link-linkedin">
                <SiLinkedin className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.instagram.com/sammybolger" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/30" aria-label="Instagram" data-testid="footer-link-instagram">
                <SiInstagram className="h-3.5 w-3.5" />
              </a>
            </div>
            <a href="mailto:sbolger@cord.edu" className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-email">sbolger@cord.edu</a>
          </div>
        </div>

        <div className="mt-6 border-t border-border/50 pt-4 text-center">
          <small className="text-xs text-muted-foreground/70">&copy; 2026 Sam Bolger. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
