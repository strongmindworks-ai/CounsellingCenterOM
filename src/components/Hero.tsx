import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-soft">
      {/* Floating gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sage/30 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-teal/20 blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-gold/15 blur-3xl animate-float-slow" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            Counselling · Life Coaching · Therapy
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-foreground">
            Helping You Find <span className="text-gradient-brand">Clarity, Peace</span> & Emotional Balance
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Professional counselling, life coaching, and therapy for emotional wellbeing,
            personal growth, and mental wellness — in a safe, compassionate space.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-brand text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5">
              <Calendar className="w-4 h-4" /> Book Appointment
            </a>
            <a href="https://wa.me/918275206165" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-medium hover:bg-white/80 transition-all">
              <MessageCircle className="w-4 h-4 text-sage" /> Talk on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8">
            {/* <div>
              <div className="font-display text-2xl font-semibold text-foreground">500+</div>
              <div className="text-xs text-muted-foreground">Lives Transformed</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-semibold text-foreground">10+ yrs</div>
              <div className="text-xs text-muted-foreground">Of Compassionate Care</div>
            </div> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-brand rounded-[3rem] blur-2xl opacity-20" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-glow glass p-3">
            <img src={hero} alt="Calm wellness illustration" width={1024} height={1024} className="w-full h-auto rounded-[2rem]" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-card max-w-[200px]"
          >
            <div className="text-xs text-muted-foreground">Today's session</div>
            <div className="text-sm font-medium text-foreground mt-1">Mindful breathing & reflection</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
