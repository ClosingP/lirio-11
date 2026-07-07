import { useEffect, useState } from "react";
import { X, MapPin, ChevronRight, PlayCircle } from "lucide-react";
import { listing } from "./listing.config.js";

const { heroUrl, gallery, specs, features, appliances } = listing;

/**
 * MAKE.COM WEBHOOK URL
 * ------------------------------------------------------------------
 * Found in: Make.com → Lirio 11 — Lead Capture scenario → Webhook module
 */
const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/9odlsn5hgb9wdo2stfy9lzv3sdqjmeli";

/**
 * PROPERTY WALKTHROUGH VIDEO
 * ------------------------------------------------------------------
 * YouTube video ID only (from the watch?v= URL).
 */
const WALKTHROUGH_VIDEO_ID = "ah5YhNhWEzk";

export default function App() {
  const [lightbox, setLightbox] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    document.title = listing.seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", listing.seo.description);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null || videoOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox, videoOpen]);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero onOpenVideo={() => setVideoOpen(true)} />
      <SpecsBar />
      <Story />
      <Gallery onOpen={setLightbox} />
      <Location />
      <ContactSection />
      <Footer />

      <a
        href="#contact"
        className="lg:hidden fixed bottom-4 left-4 right-4 z-40 bg-ink text-alabaster py-4 text-center text-[0.7rem] tracking-[0.3em] uppercase font-medium shadow-2xl active:scale-[0.99] transition-transform"
      >
        Request Details
      </a>

      {lightbox !== null && (
        <Lightbox
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((i) => (i - 1 + gallery.length) % gallery.length)}
          onNext={() => setLightbox((i) => (i + 1) % gallery.length)}
        />
      )}

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-6 lg:px-12 py-5 mix-blend-difference text-alabaster">
      <a href="#top" className="font-serif text-xl tracking-wider">
        {listing.name} {listing.nameAccent}
      </a>
      <a
        href="#contact"
        className="hidden lg:inline-block eyebrow border-b border-alabaster/40 pb-0.5 hover:border-alabaster transition-colors"
      >
        Private Inquiry
      </a>
    </nav>
  );
}

function Hero({ onOpenVideo }) {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroUrl}
        alt={listing.heroAlt}
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 text-alabaster animate-fade-in-slow">
        <p className="eyebrow text-alabaster/70 mb-6">{listing.location}</p>
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight">
          {listing.name} <span className="italic font-light">{listing.nameAccent}</span>
        </h1>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-3 md:gap-4 text-sm md:text-base font-light tracking-[0.2em] uppercase">
          <span>{listing.price}</span>
          {listing.tagline && (
            <>
              <span className="hidden md:block h-px w-8 bg-alabaster/50" />
              <span>{listing.tagline}</span>
            </>
          )}
        </div>
        <a
          href="#contact"
          className="mt-14 group inline-flex items-center gap-3 border border-alabaster/80 px-10 py-4 text-[0.7rem] tracking-[0.32em] uppercase hover:bg-alabaster hover:text-ink transition-colors duration-500"
        >
          Schedule a Private Tour
          <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </a>
        <button
          onClick={onOpenVideo}
          className="mt-6 group inline-flex items-center gap-2 text-[0.7rem] tracking-[0.32em] uppercase text-alabaster/80 hover:text-alabaster transition-colors duration-300"
        >
          <PlayCircle className="h-4 w-4" strokeWidth={1.2} />
          Property Walkthrough
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-alabaster/60 text-[0.65rem] tracking-[0.4em] uppercase animate-fade-in-slow">
        Scroll
      </div>
    </section>
  );
}

function SpecsBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {specs.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center text-center py-10 px-4 border-border [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:md:border-r [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r lg:[&:last-child]:border-r-0"
          >
            <Icon className="h-5 w-5 text-champagne-deep mb-3" strokeWidth={1.2} />
            <div className="font-serif text-3xl md:text-4xl">{value}</div>
            <div className="eyebrow mt-2">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Story() {
  const { story } = listing;
  const mid = Math.ceil(story.paragraphs.length / 2);
  const left = story.paragraphs.slice(0, mid);
  const right = story.paragraphs.slice(mid);

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <header className="space-y-6 mb-12 max-w-3xl">
        <p className="eyebrow">{story.eyebrow}</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          {story.headline}{" "}
          <em className="italic text-champagne-deep">{story.headlineAccent}</em>
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 font-light">
          {left.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 font-light">
          {right.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow mb-6">Amenities</p>
          <ul className="grid grid-cols-2 gap-4">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4 border border-border p-5">
                <Icon className="h-5 w-5 text-champagne-deep shrink-0" strokeWidth={1.2} />
                <span className="text-sm font-light tracking-wide">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-6">Appliances Included</p>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm font-light tracking-wide">
            {appliances.map((a) => (
              <li key={a} className="flex items-start gap-3 border-b border-border pb-3">
                <span className="text-champagne-deep mt-1.5 text-[0.5rem]">◆</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Gallery({ onOpen }) {
  return (
    <section className="bg-card border-t border-border">
      <div className="px-6 lg:px-12 py-20 lg:py-24 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-3">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl">The Residence in Detail</h2>
          </div>
          <span className="hidden md:block text-xs text-muted-foreground tracking-widest">
            {gallery.length} IMAGES
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 pb-1">
        {gallery.map((g, i) => (
          <button
            key={i}
            onClick={() => onOpen(i)}
            className={`image-zoom relative block w-full ${
              i === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"
            }`}
          >
            <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}

function Location() {
  const { location_section: loc } = listing;
  return (
    <section className="bg-ink text-alabaster">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow text-alabaster/60 mb-4">{loc.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">{loc.headline}</h2>
          <p className="text-alabaster/75 font-light leading-relaxed mb-10 max-w-md">
            {loc.description}
          </p>
          <ul className="space-y-4">
            {loc.nearby.map(({ label, detail }) => (
              <li key={label} className="flex items-center gap-5 border-b border-alabaster/15 pb-4">
                <MapPin className="h-4 w-4 text-champagne shrink-0" strokeWidth={1.2} />
                <span className="flex-1 text-sm font-light">{label}</span>
                <span className="eyebrow text-alabaster/60">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-square w-full overflow-hidden border border-alabaster/10">
          <iframe
            title={`${listing.name} location map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
            className="absolute inset-0 h-full w-full grayscale invert opacity-80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { contact } = listing;
  return (
    <section id="contact" className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-24">
          <p className="eyebrow mb-4">{contact.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            {contact.headline}{" "}
            <em className="italic text-champagne-deep">{listing.name}</em>
          </h2>
          <p className="text-foreground/75 font-light leading-relaxed text-lg max-w-md mb-10">
            {contact.blurb}
          </p>
          <div className="space-y-3 text-sm font-light text-muted-foreground">
            <p className="eyebrow text-foreground/70">Presented by</p>
            <p className="font-serif text-2xl text-foreground">{contact.agencyName}</p>
            <p>{contact.agencyDetail}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    setError(false);

    const form = e.target;
    const payload = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      role: form.role.value,
      message: form.message.value,
      listing: listing.name,
      agentName: listing.agent.name,
      agentBrokerage: listing.agent.brokerage,
      agentEmail: listing.agent.email,
      agentPhone: listing.agent.phone,
      agentCalendlyUrl: listing.agent.calendlyUrl,
      agentAssetsUrl: listing.agent.assetsUrl,
    };

    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Webhook error:", err);
      setError(true);
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-border bg-card p-12 lg:p-16 text-center animate-fade-up">
        <div className="w-12 h-px bg-champagne-deep mx-auto mb-6" />
        <h3 className="font-serif text-3xl md:text-4xl mb-4">Thank you.</h3>
        <p className="text-base leading-relaxed text-muted-foreground font-light max-w-sm mx-auto">
          An agent will be in touch within 24 hours to arrange your private viewing of {listing.name}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-8 lg:p-12 space-y-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Name" name="name" type="text" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <Field label="Email" name="email" type="email" required autoComplete="email" />

      <div>
        <label className="eyebrow block mb-2">I am a</label>
        <select
          name="role"
          required
          defaultValue=""
          className="w-full bg-transparent border-b border-input py-3 text-sm focus:outline-none focus:border-champagne-deep transition-colors"
        >
          <option value="" disabled>Select…</option>
          <option value="buyer">Buyer</option>
          <option value="tenant">Tenant</option>
          <option value="agent">Agent</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={`I'd like to schedule a private viewing of ${listing.name}…`}
          className="w-full bg-transparent border-b border-input py-3 text-sm focus:outline-none focus:border-champagne-deep transition-colors resize-none placeholder:text-muted-foreground/60"
        />
      </div>

      <p className="text-xs text-muted-foreground font-light leading-relaxed">
        By submitting this form you agree to our terms of use. Your information remains strictly confidential.
      </p>

      {error && (
        <p className="text-xs text-red-500 font-light">
          Something went wrong sending your inquiry. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full mt-2 bg-ink text-alabaster py-4 text-[0.7rem] tracking-[0.32em] uppercase hover:bg-champagne-deep transition-colors duration-500 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request Information"}
      </button>
    </form>
  );
}

function Field({ label, name, type, required, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-transparent border-b border-input py-3 text-sm focus:outline-none focus:border-champagne-deep transition-colors"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-serif text-2xl tracking-wider">{listing.name}</div>
        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase text-center">
          {listing.footer.representedBy}
        </p>
        <p className="text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
      <div className="h-20 lg:h-0" />
    </footer>
  );
}

function VideoModal({ onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4 animate-fade-in-slow"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
        aria-label="Close"
      >
        <X className="h-6 w-6" strokeWidth={1.2} />
      </button>
      <div
        className="w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${WALKTHROUGH_VIDEO_ID}?autoplay=1`}
          title={`${listing.name} — Property Walkthrough`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function Lightbox({ index, onClose, onPrev, onNext }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in-slow">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
        aria-label="Close"
      >
        <X className="h-6 w-6" strokeWidth={1.2} />
      </button>
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 text-white/60 hover:text-white text-3xl p-4 font-serif"
        aria-label="Previous"
      >‹</button>
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 text-white/60 hover:text-white text-3xl p-4 font-serif"
        aria-label="Next"
      >›</button>
      <img
        src={gallery[index].src}
        alt={gallery[index].alt}
        className="max-h-[85vh] max-w-[90vw] object-contain"
      />
      <div className="absolute bottom-6 left-0 right-0 text-center text-white/60 eyebrow">
        {gallery[index].alt} — {index + 1} / {gallery.length}
      </div>
    </div>
  );
}
