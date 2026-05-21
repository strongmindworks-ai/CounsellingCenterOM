import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Sparkles, ShieldCheck, Heart } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-sage/10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-sage tracking-wider uppercase">Get in Touch</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">
            Begin Your <span className="text-gradient-brand">Healing Journey</span>
          </h2>
          <p className="mt-5 text-muted-foreground">Reach out today. We're here to listen, gently and without judgment.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* ── Left column: unchanged ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ContactCard
              icon={MapPin}
              title="Visit Us"
              lines={["Nandan-Van Agricultural Farm,", "Wagholi, Solapur (Maharashtra)"]}
            />
            <ContactCard
              icon={Phone}
              title="Call Us"
              lines={["+91 8275206165"]}
              href="tel:+918275206165"
            />
            <ContactCard
              icon={Mail}
              title="Email Us"
              lines={["psycho.om156@gmail.com"]}
              href="mailto:psycho.om156@gmail.com"
            />

            <div className="rounded-3xl overflow-hidden shadow-card border border-border/40 h-64 bg-mint">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.769108377445!2d75.65781969999999!3d17.6136957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc42d5c39298105%3A0x77796f137f1612ac!2z4KSo4KSC4KSm4KSoLeCkteCkqCDgpbLgpJfgpY3gpLDgpL_gpJXgpLLgpY3gpJrgpLDgpLIg4KSr4KS-4KSw4KWN4KSu!5e0!3m2!1sen!2sin!4v1778865493901!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* ── Right column: premium CTA card ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] overflow-hidden shadow-soft border border-white/50 bg-white/40 backdrop-blur-xl"
          >
            {/* Soft decorative gradient blob inside card */}
            <div className="relative px-8 pt-10 pb-10 md:px-10 md:pt-12 md:pb-12 flex flex-col items-center text-center">
              <div
                aria-hidden
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-72 h-72 rounded-full bg-sage/20 blur-3xl pointer-events-none"
              />

              {/* Icon badge */}
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow">
                <Heart className="w-7 h-7 text-primary-foreground fill-current" />
              </div>

              {/* Headline */}
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                Book Your{" "}
                <span className="text-gradient-brand">Counseling Session</span>
              </h3>

              {/* Supporting copy */}
              <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm">
                Take the first step toward healing in a safe, confidential space.
                Our compassionate counselors are ready to support you — at your
                own pace, without judgment.
              </p>

              {/* Trust pills */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  { icon: ShieldCheck, label: "100% Confidential" },
                  { icon: Heart, label: "Compassionate Care" },
                  { icon: Sparkles, label: "Professional Support" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint/80 border border-border/30 text-xs font-medium text-foreground/70"
                  >
                    <Icon className="w-3.5 h-3.5 text-sage" />
                    {label}
                  </span>
                ))}
              </div>

              {/* CTA button */}
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfivb9CGS4bq3RCTkwaeSnzJGSduV5VssimXkj6qsitiP1eCA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 rounded-2xl bg-gradient-brand text-primary-foreground font-semibold text-base shadow-glow hover:shadow-glow/80 transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <Sparkles className="w-4 h-4" />
                Book Appointment
              </motion.a>

              {/* Micro-copy */}
              <p className="mt-5 text-xs text-muted-foreground/70 tracking-wide">
                Confidential&nbsp;•&nbsp;Compassionate&nbsp;•&nbsp;Professional Support
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918275206165"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-sage text-white shadow-glow flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: any;
  title: string;
  lines: string[];
  href?: string;
}) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className="flex gap-4 p-6 rounded-2xl bg-mint/60 hover:bg-mint transition-colors border border-border/40"
    >
      <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <div className="font-display font-semibold text-foreground">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-muted-foreground mt-0.5">
            {l}
          </div>
        ))}
      </div>
    </Comp>
  );
}