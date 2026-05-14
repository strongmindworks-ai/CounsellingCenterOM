import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-sage/10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-sage tracking-wider uppercase">Get in Touch</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">
            Begin Your <span className="text-gradient-brand">Healing Journey</span>
          </h2>
          <p className="mt-5 text-muted-foreground">Reach out today. We're here to listen, gently and without judgment.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <ContactCard icon={MapPin} title="Visit Us" lines={["Nandan-Van Agricultural Farm,", "Wagholi, Solapur (Maharashtra)"]} />
            <ContactCard icon={Phone} title="Call Us" lines={["+91 8275206165"]} href="tel:+918275206165" />
            <ContactCard icon={Mail} title="Email Us" lines={["psycho.om156@gmail.com"]} href="mailto:psycho.om156@gmail.com" />

            <div className="rounded-3xl overflow-hidden shadow-card border border-border/40 h-64 bg-mint">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Wagholi,+Solapur,+Maharashtra&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:psycho.om156@gmail.com?subject=Session Booking - ${form.name}&body=${encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`)}`; }}
            className="glass rounded-3xl p-8 md:p-10 shadow-soft border border-white/50"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground">Book Your Session</h3>
            <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours.</p>

            <div className="mt-7 space-y-4">
              <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground/70 mb-1.5 block">How can we help?</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5">
                <Send className="w-4 h-4" /> Book Your Session
              </button>
            </div>
          </motion.form>
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
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </section>
  );
}

function ContactCard({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp href={href} className="flex gap-4 p-6 rounded-2xl bg-mint/60 hover:bg-mint transition-colors border border-border/40">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <div className="font-display font-semibold text-foreground">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-muted-foreground mt-0.5">{l}</div>)}
      </div>
    </Comp>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-foreground/70 mb-1.5 block">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}
