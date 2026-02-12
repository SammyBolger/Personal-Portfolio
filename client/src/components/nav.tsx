import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "./theme-provider";
import { Sun, Moon, Menu, X, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(180deg, rgba(10,14,26,0.70), rgba(10,14,26,0.35))"
            : "linear-gradient(180deg, rgba(247,248,252,0.80), rgba(247,248,252,0.55))",
      }}
      data-testid="nav-bar"
    >
      <div className="mx-auto flex h-[74px] max-w-[1120px] items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-3 min-w-0" data-testid="link-home-brand">
          <span
            className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full text-xs font-extrabold tracking-wider text-white"
            style={{
              background:
                "linear-gradient(135deg, rgba(43,92,255,0.95), rgba(45,212,191,0.85))",
              boxShadow: "0 12px 30px rgba(43,92,255,0.22)",
            }}
          >
            SB
          </span>
          <div className="min-w-0">
            <p className="text-[15px] font-bold leading-tight truncate">Sam Bolger</p>
            <p className="text-xs text-muted-foreground truncate">
              Data Science, Cybersecurity & Math @ Concordia College
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex" data-testid="nav-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-[13px] transition-colors ${
                location === link.href
                  ? "text-foreground font-medium bg-accent/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
              }`}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <a href="https://github.com/SammyBolger/Resume" target="_blank" rel="noreferrer">
            <Button
              variant="default"
              className="gap-2 text-[13px] font-semibold"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,92,255,1), rgba(46,233,166,0.95))",
                color: "#061014",
                border: "none",
              }}
              data-testid="button-resume-nav"
            >
              <FileDown className="h-4 w-4" />
              Resume
            </Button>
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 md:hidden" data-testid="nav-mobile-menu">
          <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-5 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md border border-border/50 px-3 py-3 text-[13px] transition-colors ${
                  location === link.href
                    ? "bg-accent/50 text-foreground"
                    : "bg-card/30 text-foreground hover:bg-accent/30"
                }`}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/SammyBolger/Resume"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="rounded-md border border-border/50 bg-card/30 px-3 py-3 text-[13px] text-foreground hover:bg-accent/30"
              data-testid="link-mobile-resume"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
