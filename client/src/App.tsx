import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import Resume from "@/pages/resume";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppShell() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          theme === "dark"
            ? `radial-gradient(1200px 800px at 20% 0%, rgba(124,92,255,0.18), transparent 60%),
               radial-gradient(1000px 600px at 80% 10%, rgba(46,233,166,0.12), transparent 60%),
               radial-gradient(900px 700px at 50% 120%, rgba(124,92,255,0.08), transparent 60%),
               linear-gradient(180deg, hsl(228 50% 6%), hsl(230 55% 7%))`
            : `radial-gradient(1200px 800px at 20% 0%, rgba(124,92,255,0.08), transparent 60%),
               radial-gradient(1000px 600px at 80% 10%, rgba(46,233,166,0.06), transparent 60%),
               radial-gradient(900px 700px at 50% 120%, rgba(124,92,255,0.04), transparent 60%),
               linear-gradient(180deg, hsl(240 20% 97%), hsl(238 40% 95%))`,
      }}
    >
      <Nav />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <AppShell />
        </ThemeProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
