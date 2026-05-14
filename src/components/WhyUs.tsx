import { motion } from "framer-motion";
import { ShieldCheck, Leaf, GraduationCap, HeartHandshake, Coffee, UserCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Safe & Non-Judgmental", desc: "A protected space where you can be fully yourself." },
  { icon: Leaf, title: "Holistic Healing Approach", desc: "Mind, body, and spirit considered as one." },
  { icon: GraduationCap, title: "Professional Guidance", desc: "Experienced, qualified counsellors and therapists." },
  { icon: HeartHandshake, title: "Emotional Wellbeing Focus", desc: "Centered on long-term emotional health." },
  { icon: Coffee, title: "Calm & Supportive Sessions", desc: "Warm environment designed for ease and openness." },
  { icon: UserCheck, title: "Personalized Care", desc: "Tailored therapy plans for your unique needs." },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-sage tracking-wider uppercase">Why Choose Us</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">
            Care That Truly <span className="text-gradient-brand">Listens</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:shadow-soft transition-all border border-border/40 flex gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-mint flex items-center justify-center">
                <it.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-display font-semibold text-foreground">{it.title}</div>
                <div className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{it.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
