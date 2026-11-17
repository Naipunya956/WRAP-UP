import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check, Send } from 'lucide-react';
import { GinghamBackground } from '../components/GinghamBackground';
import { MembershipCard } from '../components/MembershipCard';
import { PaperCard } from '../components/PaperCard';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { VintageStamp } from '../components/VintageStamp';
import { MagneticButton } from '../components/MagneticButton';
import { InteractiveSticker } from '../components/InteractiveSticker';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const CLUB_STEPS = [
  {
    num: '01',
    title: 'What membership means',
    text: 'A calm creative sanctuary where your favourite photos, notes, and small milestones are saved rather than buried.',
  },
  {
    num: '02',
    title: 'How the annual experience works',
    text: 'Throughout the year, you share memories, reflections, songs, and photographs at your own gentle rhythm.',
  },
  {
    num: '03',
    title: 'The December delivery',
    text: 'At year-end, Wrap Up transforms your story into a curated physical box with your storybook, canvas, letter, and keepsakes.',
  },
];

export function ClubPage() {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim()) next.name = 'Please share your name for the membership card.';
    if (!email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!message.trim() || message.trim().length < 6) {
      next.message = 'Add a short note about the year you want to preserve.';
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
    setSubmittedName(name.trim());
  };

  return (
    <div className="overflow-x-hidden">
      {/* SECTION 1: Vintage Membership Invitation on Blush + Burgundy */}
      <GinghamBackground variant="dusty-pink" className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#57252E]">
                Chapter V · The Club
              </span>
              <InteractiveSticker kind="heart-stamp" rotate={8} />
            </div>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-3 font-display text-[clamp(2.5rem,5vw,4.35rem)] font-medium leading-[1.03] text-[#3E2624]"
            >
              Your year deserves a place here.
            </motion.h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#3E2624]/85">
              Join a little corner of the world where memories are collected,
              stories are celebrated and every version of you matters.
            </p>

            {/* Handwritten Vintage Invitation Note */}
            <PaperCard tone="ledger" torn paperClip rotate={-1} className="mt-8">
              <HandwrittenNote
                text="You are warmly invited to the 2026 ledger."
                inkColor="burgundy"
                className="text-2xl sm:text-3xl"
              />
              <div className="mt-5 divide-y divide-[#57252E]/15 border-t border-[#57252E]/15">
                {CLUB_STEPS.map((step) => (
                  <div key={step.num} className="py-4">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-semibold tracking-[0.12em] text-[#57252E] tabular-nums">
                        {step.num}.
                      </span>
                      <h2 className="font-serif text-2xl font-medium text-[#3E2624]">
                        {step.title}
                      </h2>
                    </div>
                    <p className="mt-1.5 pl-6 text-sm leading-relaxed text-[#3E2624]/80">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </PaperCard>
          </div>

          {/* Right: Live Vintage Membership Card + Form */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between px-2">
                <span className="font-hand text-xl text-[#57252E]">
                  Live card preview — type your name below
                </span>
                <VintageStamp
                  topText="CLUB LEDGER"
                  centerText="2026"
                  bottomText="INVITED"
                  variant="burgundy"
                  rotate={9}
                  className="scale-75 -my-4"
                />
              </div>
              <MembershipCard memberName={submittedName || name || 'Clara Vance'} />
            </div>

            <div className="border border-[#57252E]/25 bg-[#FFFDF9] p-7 scrapbook-shadow sm:p-9">
              {submittedName ? (
                <div role="status" aria-live="polite" className="py-4">
                  <div className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#57252E]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#57252E] text-[#FFFDF9]">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>Membership Note Recorded (Demo)</span>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl font-medium text-[#3E2624]">
                    Welcome, {submittedName}.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3E2624]/80">
                    Your invitation request is saved in this preview experience.
                    When backend registration opens, this form connects straight
                    to studio onboarding.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedName(null);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="border border-[#57252E]/35 px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase text-[#57252E] hover:bg-[#F3C9D5]/40 cursor-pointer"
                    >
                      Edit note
                    </button>
                    <MagneticButton
                      variant="burgundy"
                      onClick={() => navigate('/contact')}
                    >
                      <span>Turn to Final Page</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </MagneticButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <h3 className="font-serif text-2xl font-medium text-[#57252E]">
                    Request your place in the club
                  </h3>
                  <div>
                    <label
                      htmlFor="member-name"
                      className="block text-xs font-medium tracking-[0.1em] uppercase text-[#3E2624]/80"
                    >
                      Name
                    </label>
                    <input
                      id="member-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                      }}
                      aria-invalid={Boolean(errors.name)}
                      placeholder="Clara Vance"
                      className="mt-1.5 w-full border border-[#3E2624]/25 bg-[#F7F0E6]/60 px-4 py-2.5 text-sm text-[#3E2624] focus:border-[#57252E] focus:bg-[#FFFDF9] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs font-medium text-[#57252E]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="member-email"
                      className="block text-xs font-medium tracking-[0.1em] uppercase text-[#3E2624]/80"
                    >
                      Email
                    </label>
                    <input
                      id="member-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                      }}
                      aria-invalid={Boolean(errors.email)}
                      placeholder="clara@example.com"
                      className="mt-1.5 w-full border border-[#3E2624]/25 bg-[#F7F0E6]/60 px-4 py-2.5 text-sm text-[#3E2624] focus:border-[#57252E] focus:bg-[#FFFDF9] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs font-medium text-[#57252E]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="member-msg"
                      className="block text-xs font-medium tracking-[0.1em] uppercase text-[#3E2624]/80"
                    >
                      Short Note About Your Year
                    </label>
                    <textarea
                      id="member-msg"
                      rows={3}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message)
                          setErrors((p) => ({ ...p, message: undefined }));
                      }}
                      aria-invalid={Boolean(errors.message)}
                      placeholder="One chapter or memory you want to remember..."
                      className="mt-1.5 w-full resize-none border border-[#3E2624]/25 bg-[#F7F0E6]/60 px-4 py-2.5 text-sm text-[#3E2624] focus:border-[#57252E] focus:bg-[#FFFDF9] focus:outline-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs font-medium text-[#57252E]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <MagneticButton type="submit" variant="burgundy" className="w-full">
                    <span>Join the Club</span>
                    <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  </MagneticButton>
                </form>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 font-hand text-2xl text-[#57252E] underline decoration-[#57252E]/40 underline-offset-4 hover:text-[#3E2624] cursor-pointer"
              >
                <span>Or turn to the final page &amp; write to us</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </GinghamBackground>
    </div>
  );
}
