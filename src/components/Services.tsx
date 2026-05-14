import { motion } from "framer-motion";
import { User, Users, Wind, Home, Compass, Flower2 } from "lucide-react";

const services = [
  { icon: User, title: "Individual Counselling", desc: "One-on-one sessions to explore emotions, thoughts, and personal challenges." },
  { icon: Users, title: "Relationship Counselling", desc: "Strengthen connection, communication, and mutual understanding with your partner." },
  { icon: Wind, title: "Stress & Anxiety Support", desc: "Gentle techniques to ease anxious thoughts and restore inner calm." },
  { icon: Home, title: "Family Guidance", desc: "Nurture harmony and resolve conflicts within the family system." },
  { icon: Compass, title: "Life Coaching", desc: "Clarity, direction, and mindful goal-setting for the life you want." },
  { icon: Flower2, title: "Emotional Wellness Therapy", desc: "Holistic healing for emotional balance, resilience, and self-acceptance." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-calm relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-sage/15 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-medium text-sage tracking-wider uppercase">Our Services</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight">
            Holistic Care for <span className="text-gradient-brand">Every Journey</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Thoughtfully crafted therapies and coaching to support every chapter of your emotional wellbeing.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all border border-border/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
