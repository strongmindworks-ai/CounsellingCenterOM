import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Priya S.", text: "The sessions gave me clarity I hadn't felt in years. I finally feel like myself again — calm, grounded, hopeful." },
  { name: "Rahul M.", text: "A truly safe and warm space. The guidance helped me navigate a difficult phase with strength and self-compassion." },
  { name: "Anjali D.", text: "Compassionate, patient, and deeply insightful. My anxiety has eased and I sleep peacefully now." },
  { name: "Vikram R.", text: "More than therapy — it felt like coming home to myself. Highly recommended for anyone seeking real change." },
  { name: "Sneha K.", text: "The holistic approach worked wonders for my emotional wellbeing. I feel lighter and more present every day." },
  { name: "Aditya P.", text: "Professional, kind, and never judgmental. Our family communication has transformed completely." },
];

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-calm overflow-hidden">
      <div className="container mx-auto px-6 mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-sage tracking-wider uppercase">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">
            Stories of <span className="text-gradient-brand">Healing</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-mint to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-mint to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-[scroll_50s_linear_infinite] hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
          {loop.map((r, i) => (
            <div key={i} className="w-[340px] shrink-0 glass rounded-3xl p-7 shadow-card border border-white/40">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed text-sm">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-display font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div className="font-medium text-sm text-foreground">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
