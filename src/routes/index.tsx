import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OM LIFE COUNSELING CENTRE | Counselling, Therapy & Life Coaching" },
      { name: "description", content: "Professional counselling, therapy, and life coaching services focused on emotional wellbeing, healing, and personal growth in Maharashtra." },
      { property: "og:title", content: "OM LIFE COUNSELING CENTRE" },
      { property: "og:description", content: "Helping you find clarity, peace & emotional balance through compassionate counselling and therapy." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
