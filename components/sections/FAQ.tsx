"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import Reveal from "../../components/ui/Reveal";
import SectionNumber from "../../components/ui/SectionNumber";
import SectionBackdrop from "../../components/ui/SectionBackdrop";
import { faqs } from "../../lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const columns = [faqs.slice(0, 4), faqs.slice(4, 8)];

  return (
    <section id="faq" className="relative overflow-hidden bg-charcoal py-28 md:py-36">
      <SectionBackdrop glow={false} />
      <SectionNumber n="07" className="text-ink/40" />

      <Container className="relative max-w-5xl">
        <Reveal>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl">
            Frequently asked
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`divide-y divide-charcoal-2 border-charcoal-2 ${
                colIndex === 0 ? "border-y md:border-b-0" : "border-b md:border-t"
              }`}
            >
              {col.map((faq, i) => {
                const globalIndex = colIndex * 4 + i;
                const isOpen = openIndex === globalIndex;
                return (
                  <div key={faq.question} className={colIndex === 1 && i === 0 ? "md:border-t-0" : ""}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg font-medium tracking-tight text-concrete sm:text-xl">
                        {faq.question}
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-oxblood-light transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-7 max-w-md text-sm leading-relaxed text-concrete/65">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
