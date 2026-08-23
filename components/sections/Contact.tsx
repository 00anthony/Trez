import { Phone, Mail, Clock, Check } from "lucide-react";
import { ReactNode } from "react";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import Reveal from "../../components/ui/Reveal";
import SectionNumber from "../../components/ui/SectionNumber";
import SectionBackdrop from "../../components/ui/SectionBackdrop";
import ServiceAreaMap from "../../components/ui/ServiceAreaMap";
import ContactForm, { ContactFormContext } from "./ContactForm";
import { siteConfig } from "../../lib/site-config";
import { InsuranceLogo } from "../ui/InsuranceLogo";
import { GoogleIcon } from "../ui/GoogleIcon";

export default function Contact({
  defaultService,
  context,
}: {
  defaultService?: string;
  context?: ContactFormContext;
} = {}) {
  type HeroStat = {
      icon?: ReactNode;
      value: string;
      label: string;
    };
  
    const heroStats: HeroStat[] = [
      {
        icon: (
          <InsuranceLogo className="h-8 w-auto fill-white"/>
        ),
        value: siteConfig.stats[1].value,   // "100%"
        label: siteConfig.stats[1].label,   // "Insured"
      },
      {
        icon: <GoogleIcon className="h-4 w-4" />,
        value: `${siteConfig.google.rating} ★`,
        label: `${siteConfig.google.reviewCount} Google Reviews`,
      },
    ];
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <SectionBackdrop />
      <SectionNumber n="08" />

      <Container className="relative">
        <Reveal>
          <Eyebrow>Get Started</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl">
            Let&rsquo;s pour
            <br />
            something built to last
          </h2>
          <p className="mt-5 max-w-md text-concrete/65">
            {siteConfig.responsePromise} Tell us about your project and
            we&rsquo;ll schedule a site visit.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-11">
          {/* Info */}
          <Reveal delay={0.06} className="space-y-5 lg:col-span-4">
            <div className="group flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center border border-charcoal-2 group-hover:border-oxblood-light">
                <Phone className="h-4 w-4 text-oxblood-light" />
              </span>
              <span>
                <span className="block font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                  Call or Text
                </span>
                <a href={siteConfig.phoneHref} className="text-concrete">{siteConfig.phone}</a>
              </span>
            </div>

            <div className="group flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center border border-charcoal-2 group-hover:border-oxblood-light">
                <Mail className="h-4 w-4 text-oxblood-light" />
              </span>
              <span>
                <span className="block font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                  Email
                </span>
                <a href={`mailto:${siteConfig.email}`} className="text-concrete">{siteConfig.email}</a>
              </span>
            </div>

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

            {/* Map */}
            <ServiceAreaMap />

            <div className="mt-16 border border-charcoal-2 bg-charcoal/40 p-5">
              <div className="mb-3 font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                Where We Work
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {siteConfig.serviceAreaCities.map((city) => (
                  <span key={city} className="flex items-center gap-1.5 text-xs text-concrete/70">
                    <span className="h-1 w-1 bg-oxblood-light" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
            
          </Reveal>

          {/* Form */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <ContactForm defaultService={defaultService} context={context} />

            {/* Mobile only: */}
            {/* Floating glass stat cards */}
            <div
              className="mt-16 grid grid-cols-2 gap-3 md:hidden"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-none border border-concrete/12 bg-charcoal/40 px-5 py-4 backdrop-blur-md md:px-7 md:py-5"
                >
                  <div className="flex items-center gap-2">
                    {stat.icon && <span className="shrink-0">{stat.icon}</span>}
                    <span className="font-display text-2xl font-bold text-concrete md:text-3xl">
                      {stat.value}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-steel uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          
          {/* Desktop Only */}
          {/* What happens next + helpful to include */}
          <Reveal delay={0.18} className="hidden lg:block lg:col-span-2">
            <div className="flex flex-col gap-6">
              {/* What happens next */}
              <div className="border border-charcoal-2 bg-charcoal/40 p-5">
                <div className="font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                  What Happens Next
                </div>
                <ol className="mt-4 space-y-4">
                  {[
                    "We review your request within one business day",
                    "We schedule a free on-site estimate",
                    "You get a written, itemized quote",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-oxblood-light/60 font-mono text-[10px] text-oxblood-light">
                        {i + 1}
                      </span>
                      <span className="text-xs leading-relaxed text-concrete/75">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Helpful to include */}
              <div className="border border-charcoal-2 bg-charcoal/40 p-5">
                <div className="font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                  Helpful to Include
                </div>
                <ul className="mt-4 space-y-3">
                  {[
                    "Approximate project size or square footage",
                    "Photos of the site, if you have them",
                    "Your ideal timeline",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-oxblood-light" strokeWidth={2.5} />
                      <span className="text-xs leading-relaxed text-concrete/75">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating glass stat cards */}
              <div
                className="mt-16 grid grid-cols-2 gap-3 md:mt-13 md:flex md:flex-wrap md:gap-4"
              >
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-none border border-concrete/12 bg-charcoal/40 px-5 py-4 backdrop-blur-md md:px-7 md:py-5"
                  >
                    <div className="flex items-center gap-2">
                      {stat.icon && <span className="shrink-0">{stat.icon}</span>}
                      <span className="font-display text-2xl font-bold text-concrete md:text-3xl">
                        {stat.value}
                      </span>
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-steel uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
