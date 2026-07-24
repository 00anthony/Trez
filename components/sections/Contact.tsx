import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import ContactForm from "./ContactForm";
import { siteConfig } from "../../lib/site-config";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Get Started</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl">
                Let&rsquo;s pour
                <br />
                something built to last
              </h2>
              <p className="mt-5 max-w-md text-concrete/65">
                {siteConfig.responsePromise} Tell us about your project and
                we&rsquo;ll schedule a site visit.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 space-y-5">
              <a href={siteConfig.phoneHref} className="flex items-center gap-4 group">
                <span className="flex h-11 w-11 items-center justify-center border border-charcoal-2 group-hover:border-oxblood-light">
                  <Phone className="h-4 w-4 text-oxblood-light" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                    Call or Text
                  </span>
                  <span className="text-concrete">{siteConfig.phone}</span>
                </span>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <span className="flex h-11 w-11 items-center justify-center border border-charcoal-2 group-hover:border-oxblood-light">
                  <Mail className="h-4 w-4 text-oxblood-light" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                    Email
                  </span>
                  <span className="text-concrete">{siteConfig.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-charcoal-2">
                  <Clock className="h-4 w-4 text-oxblood-light" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                    Hours
                  </span>
                  <span className="text-concrete">{siteConfig.hours}</span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-charcoal-2">
                  <MapPin className="h-4 w-4 text-oxblood-light" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                    Service Area
                  </span>
                  <span className="text-concrete">{siteConfig.serviceArea}</span>
                </span>
              </div>
            </Reveal>

            {/* Service area map */}
            <Reveal delay={0.16} className="mt-10 border border-charcoal-2 bg-charcoal/40 p-6">
              <div className="mb-4 font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                Where We Work
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {siteConfig.serviceAreaCities.map((city) => (
                  <span key={city} className="flex items-center gap-1.5 text-sm text-concrete/75">
                    <span className="h-1 w-1 bg-oxblood-light" />
                    {city}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
