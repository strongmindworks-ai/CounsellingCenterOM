import { motion } from "framer-motion";
import { Shield, Heart, Sparkles } from "lucide-react";
import about from "@/assets/about.jpg";

const trust = [
  { icon: Shield, title: "Confidential Support", desc: "Your privacy is sacred. Every session is held in complete confidence." },
  { icon: Heart, title: "Compassionate Guidance", desc: "Empathetic listening and care, free of judgment." },
  { icon: Sparkles, title: "Personalized Therapy", desc: "Healing approaches tailored to your unique journey." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-calm rounded-[2.5rem]" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft">
            <img src={about} alt="Counselling session" loading="lazy" width={1024} height={1024} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-card">
            <div className="font-display text-xl font-semibold text-primary">100%</div>
            <div className="text-xs text-muted-foreground">Safe & Confidential</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium text-sage tracking-wider uppercase">About Us</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
            A Safe Space for <span className="text-gradient-brand">Healing & Growth</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Om Life Counseling Centre, we believe healing begins with being truly heard.
            Our holistic approach blends evidence-based therapy with compassionate care, helping you
            reconnect with yourself and rediscover emotional balance.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you're navigating stress, relationships, or life transitions — we walk beside you,
            gently and without judgment.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {trust.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5 bg-mint border border-border/50 hover:shadow-soft transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center mb-3">
                  <t.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="font-display font-semibold text-sm text-foreground">{t.title}</div>
                <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{t.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
