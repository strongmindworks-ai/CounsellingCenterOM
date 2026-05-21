import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-card py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Om Life Counseling Centre" className="h-22 w-22 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-semibold text-foreground text-sm md:text-base">OM LIFE</div>
            <div className="text-[10px] md:text-xs text-muted-foreground tracking-wider">COUNSELING CENTRE</div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brand transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfivb9CGS4bq3RCTkwaeSnzJGSduV5VssimXkj6qsitiP1eCA/viewform?usp=header"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-brand text-primary-foreground text-sm font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
        >
          Book Consultation
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-foreground transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-foreground transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="md:hidden glass mt-3 mx-6 rounded-2xl p-6">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary">{l.label}</a>
              </li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-gradient-brand text-primary-foreground text-sm font-medium">Book Consultation</a>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
