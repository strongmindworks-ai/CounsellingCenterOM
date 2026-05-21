import { Facebook, Instagram, Linkedin,Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative text-white" style={{ background: "linear-gradient(135deg, #1E2A38 0%, #3B7C87 100%)" }}>
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className=" rounded-xl p-2">
              <img src={logo} alt="Om Life" className="h-22 w-22 object-contain" />
            </div>
            <div>
              <div className="font-display font-semibold">OM LIFE COUNSELLING CENTRE</div>
              <div className="text-xs text-white/60 tracking-wider">Counselling · Life Coaching · Therapy</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-md leading-relaxed">
            A safe, compassionate space dedicated to your emotional wellbeing, healing, and personal growth.
          </p>
          <div className="mt-6 flex gap-3">
  {[
    {
      icon: Instagram,
      link: "https://www.instagram.com/psycho.om156",
    },
    {
      icon: Youtube,
      link: "https://youtube.com/@psycho.om156?si=bz-qf9-wwJux4mo_",
    },
  ].map(({ icon: I, link }, i) => (
    <a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
    >
      <I className="w-4 h-4" />
    </a>
  ))}
</div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {["Home", "About", "Services",  "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>Wagholi, Solapur, Maharashtra</li>
            <li><a href="tel:+918275206165" className="hover:text-white">+91 8275206165</a></li>
            <li><a href="mailto:psycho.om156@gmail.com" className="hover:text-white">psycho.om156@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Om Life Counseling Centre. All rights reserved.</div>
          <div>Made with care for your wellbeing.</div>
        </div>
      </div>
    </footer>
  );
}
