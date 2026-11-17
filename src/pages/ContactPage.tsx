import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Check, Send } from 'lucide-react';
import { BRAND_IMAGES } from '../data/wrapUpContent';
import { GinghamBackground } from '../components/GinghamBackground';
import { ScrapbookPhoto } from '../components/ScrapbookPhoto';
import { PaperCard } from '../components/PaperCard';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { VintageStamp } from '../components/VintageStamp';
import { InteractiveSticker } from '../components/InteractiveSticker';
import { MagneticButton } from '../components/MagneticButton';
import { PressedFlowerSVG, WaxSealSVG } from '../components/DecorativeMotifs';

interface EnquiryErrors {
  name?: string;
  email?: string;
  note?: string;
}

export function ContactPage() {
  const prefersReducedMotion = useReducedMotion();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitted, setSubmitted] = useState<string | null>(null);

  const validate = (): EnquiryErrors => {
    const next: EnquiryErrors = {};
    if (!name.trim()) next.name = 'Please write your name.';
    if (!email.trim()) {
      next.email = 'Please write your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!note.trim() || note.trim().length < 5) {
      next.note = 'Share a quick message or question.';
    }
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(name.trim());
  };

  return (
    <GinghamBackground variant="cream-paper" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Left: Last Page of a Scrapbook Closing Note */}
          <div className="relative lg:col-span-6">
            <div className="relative mb-6 inline-flex items-center gap-4">
              <VintageStamp
                topText="FINAL PAGE"
                centerText="FIN"
                bottomText="WRAP UP · 26"
                variant="burgundy"
                rotate={-8}
              />
              <InteractiveSticker kind="flower" rotate={12} />
            </div>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-[clamp(2.4rem,4.6vw,3.95rem)] font-medium leading-[1.05] text-[#57252E]"
            >
              One day, you&apos;ll want to remember this version of you.
            </motion.h1>

            <PaperCard tone="ledger" torn paperClip rotate={-1.2} className="mt-8">
              <HandwrittenNote
                text="Let's make sure you have something beautiful to look back on."
                inkColor="burgundy"
                className="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-sm leading-relaxed text-[#3E2624]/82 sm:text-base">
                Whether you are joining for your own year, gifting an annual
                membership to someone dear, or writing with a studio question,
                leave a note on this final page.
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#57252E]/25 pt-4">
                <Link
                  to="/"
                  className="text-xs font-medium tracking-[0.12em] uppercase text-[#57252E] underline underline-offset-4 hover:text-[#3E2624]"
                >
                  Back to Cover Page
                </Link>
                <span className="font-hand text-xl text-[#3E2624]/75">
                  With warmth, Wrap Up
                </span>
              </div>
            </PaperCard>

            {/* Tucked Vintage Photo + Gingham Scrap */}
            <div className="relative mt-10 flex items-center gap-6">
              <div className="w-48">
                <ScrapbookPhoto
                  src={BRAND_IMAGES.eveningDinner}
                  alt="Evening dinner under warm string lights"
                  caption="Save the ordinary nights"
                  dateStamp="AUG · 26"
                  rotate={-4}
                  aspectClass="aspect-square"
                  tapeTone="blush"
                />
              </div>
              <PressedFlowerSVG className="w-20 opacity-85" />
            </div>
          </div>

          {/* Right: Membership Enquiry Stationery Sheet */}
          <div className="lg:col-span-6">
            <div className="bg-gingham border border-[#57252E]/25 p-5 scrapbook-shadow-deep sm:p-8">
              <div className="relative border border-[#3E2624]/15 bg-[#FFFDF9] p-7 sm:p-10">
                <WaxSealSVG
                  className="absolute -top-6 right-6 h-14 w-14 drop-shadow-sm"
                  label="W"
                />

                {submitted ? (
                  <div role="status" aria-live="polite" className="py-6">
                    <div className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#57252E]">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#57252E] text-[#FFFDF9]">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span>Enquiry Sealed (Demo)</span>
                    </div>
                    <h2 className="mt-4 font-serif text-3xl font-medium text-[#3E2624]">
                      Thank you, {submitted}.
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#3E2624]/80 sm:text-base">
                      Your enquiry has been recorded in this demonstration
                      preview. We can&apos;t wait to help wrap up your year.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(null);
                        setName('');
                        setEmail('');
                        setNote('');
                      }}
                      className="mt-6 border border-[#57252E]/35 px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase text-[#57252E] hover:bg-[#F3C9D5]/40 cursor-pointer"
                    >
                      Send another note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#57252E]/75">
                        Membership Enquiry
                      </span>
                      <h2 className="mt-1 font-serif text-3xl font-medium text-[#3E2624]">
                        Write to the studio
                      </h2>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium tracking-[0.1em] uppercase text-[#3E2624]/80"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                        }}
                        aria-invalid={Boolean(errors.name)}
                        placeholder="Clara Vance"
                        className="mt-1.5 w-full border border-[#3E2624]/25 bg-[#F7F0E6]/60 px-4 py-3 text-sm text-[#3E2624] focus:border-[#57252E] focus:bg-[#FFFDF9] focus:outline-none"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs font-medium text-[#57252E]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium tracking-[0.1em] uppercase text-[#3E2624]/80"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                        }}
                        aria-invalid={Boolean(errors.email)}
                        placeholder="clara@example.com"
                        className="mt-1.5 w-full border border-[#3E2624]/25 bg-[#F7F0E6]/60 px-4 py-3 text-sm text-[#3E2624] focus:border-[#57252E] focus:bg-[#FFFDF9] focus:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs font-medium text-[#57252E]">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-note"
                        className="block text-xs font-medium tracking-[0.1em] uppercase text-[#3E2624]/80"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="contact-note"
                        rows={4}
                        value={note}
                        onChange={(e) => {
                          setNote(e.target.value);
                          if (errors.note) setErrors((p) => ({ ...p, note: undefined }));
                        }}
                        aria-invalid={Boolean(errors.note)}
                        placeholder="Tell us about the year or person you want to preserve..."
                        className="mt-1.5 w-full resize-none border border-[#3E2624]/25 bg-[#F7F0E6]/60 px-4 py-3 text-sm text-[#3E2624] focus:border-[#57252E] focus:bg-[#FFFDF9] focus:outline-none"
                      />
                      {errors.note && (
                        <p className="mt-1 text-xs font-medium text-[#57252E]">
                          {errors.note}
                        </p>
                      )}
                    </div>

                    <MagneticButton type="submit" variant="burgundy" className="w-full">
                      <span>Become a member</span>
                      <Send className="h-3.5 w-3.5" aria-hidden="true" />
                    </MagneticButton>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GinghamBackground>
  );
}
