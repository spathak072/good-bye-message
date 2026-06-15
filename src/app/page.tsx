'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CornerDownRight,
  Heart,
  Moon,
  Sparkles,
  Star,
} from 'lucide-react';
import React, { useState } from 'react';

// Types for our data structures
interface TimelineEvent {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureCard {
  title: string;
  desc: string;
  tag?: string;
}

export default function GoodbyeWebApp() {
  const [showFullLetter, setShowFullLetter] = useState<boolean>(false);

  // Timeline data tracking the journey
  const journey: TimelineEvent[] = [
    {
      title: 'The Beginning',
      description:
        'Where our paths crossed on the Jeevansathi portal, opening a chapter of beautiful conversations.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Connecting Deeper',
      description:
        'Moving to Instagram, sharing daily updates, and seeing your unforgettable smile and grace in a saree.',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
    },
    {
      title: 'Realizing Your Strength',
      description:
        'Learning about your humble roots and deeply respecting how beautifully you supported your family through tough times.',
      icon: <Star className="w-5 h-5 text-blue-400" />,
    },
  ];

  const unintendedMistakes: string[] = [
    'Letting my critical perspective overshadow the warmth we shared.',
    'Using words that unintentionally caused disrespect or hurt.',
    'Failing to make you feel completely safe and happy when together.',
  ];

  const pureIntentions: FeatureCard[] = [
    {
      title: 'Complete Transparency',
      desc: 'Never speaking a single lie; keeping every reality completely open between us.',
    },
    {
      title: 'The Valentine Surprise',
      desc: 'Building a custom web app just to see you smile and bring a touch of joy to your day.',
      tag: 'Tech with Heart',
    },
    {
      title: 'Unsent Birthday Plans',
      desc: 'Awaiting the perfect moment to surprise you with flowers, chocolates, and a teddy bear.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-rose-500/30 overflow-x-hidden font-sans">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Section */}
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-6 flex justify-between items-center border-b border-slate-800/60">
        <div className="flex items-center gap-2">
          <Moon className="w-5 h-5 text-indigo-400 animate-pulse" />
          <span className="font-semibold tracking-wide text-sm text-slate-400 uppercase">
            A Quiet Closure
          </span>
        </div>
        <div className="text-xs text-rose-400/80 bg-rose-950/40 border border-rose-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
          26 Gunas Matched • Respecting Destiny
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-rose-200 to-indigo-200 bg-clip-text text-transparent">
            Wishing You a Beautiful Tomorrow
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            This space is built with complete transparency—to honestly
            acknowledge the past, apologize for the flaws, and gracefully say
            goodbye.
          </p>
        </motion.section>

        {/* The Timeline Journey */}
        <section className="space-y-12">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-200">
              The Journey We Shared
            </h2>
            <p className="text-sm text-slate-400">
              Reflecting on how we connected and grew to respect each other.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {journey.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm relative hover:border-slate-700/60 transition-colors"
              >
                <div className="p-3 bg-slate-950 rounded-xl w-fit border border-slate-800 mb-4">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-slate-200 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Ownership & Apology Section */}
        <section className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800/80 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-rose-300">
                Owning My Mistakes
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                For every moment your smile faded because of me, I am deeply
                sorry.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                {unintendedMistakes.map((mistake, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2"
                  >
                    <CornerDownRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-800/60 mt-6 text-xs text-slate-500 italic">
              &quot;I wished to make you feel safe, but I failed to match your
              perfection.&quot;
            </div>
          </motion.div>

          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-200">
                The Effort Behind the Feelings
              </h3>
              <p className="text-sm text-slate-400">
                Everything intended for you was rooted in pure care and a desire
                to make you feel special.
              </p>
            </div>
            <div className="space-y-3">
              {pureIntentions.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-900/30 border border-slate-800/40 rounded-xl flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-200">
                      {item.title}
                    </h4>
                    {item.tag && (
                      <span className="text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Final Letter Reveal */}
        <section className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-8 max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-200">
              The Final Goodbye Letter
            </h3>
            <p className="text-xs text-slate-400">
              A structured farewell written with absolute respect for your
              boundaries.
            </p>
          </div>

          {!showFullLetter ? (
            <button
              onClick={() => setShowFullLetter(true)}
              className="inline-flex items-center gap-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-950 px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-white/5"
            >
              Read Letter <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-left bg-slate-950/60 p-6 rounded-xl border border-slate-850 space-y-4 text-sm text-slate-300 leading-relaxed max-h-[400px] overflow-y-auto"
            >
              <p className="font-semibold text-slate-400">Priy Mohini,</p>
              <p>
                He patra mi tula kontahi tras denyasathi nahi, tar mazya bhavna
                tuzi maffi magat tula neet nrop denyasathi lihit aahe.
              </p>
              <p>
                Jeevansathi portal varun suru jalele aple natte Instagram var
                aale ani mla tuzya baddal ek khup vegalech apulkiche nate
                janvayla lagle. Tuzi ti goad smile ani saree madhla tula toh
                adorable look mi kadhich nahi visru shakat.
              </p>
              <p>
                Mi tuzya sobat nehami transparent rahnyacha prayatna kela, pan
                mazyakdun boltana kahi chuka jalya. Kadhi tari mazyakdun tula
                disrespect hoil ase shabd bolle gele. Mazyakdun jya kahi chuka
                jalya ani mazyamule tu jya jya veli hurt jalis, tyasathi mi
                paschatapbuddhi ne tuzi manapasun <strong>SORRY</strong> magto.
              </p>
              <p>
                Tula special feel karvanyasathi mi khup vichar kela hota. Tula
                aanand dyayla ani surprise karanyasathi mi Valentine&apos;s Day
                la ek mast <strong>web app</strong> dekhil banvle hote. Tuzya
                baddal mazya manat khup kahi plans hote—tula birthday la
                flowers, chocolates ani teddy bear deun surprise karayche hote.
                Pan kadachit aaple nasheeb sobat navhate.
              </p>
              <p>
                Aple 26 gun milan jale, pan rashi nahi jullyamule tu jo
                thambnyacha nirnay ghetlas, mi tya tuzi nirnayacha poorna aadar
                karto. Tu mla move on vhayla sangitle aahes. Tuzi ichha mhanun
                mi aata tuza pasun khup door jat aahe. Tu nehami goad hasat
                raha. Tula tuzya aushyat khup prem, yash milo hich prarthana.
              </p>
              <p className="pt-4 border-t border-slate-800 text-slate-400">
                Kalji ghe. Good bye.
                <br />
                <span className="text-xs italic text-slate-500">
                  Tuza, Saurabh.
                </span>
              </p>
            </motion.div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-12 text-xs text-slate-600 border-t border-slate-900 bg-slate-950/80">
        <p>Built with honesty and respect. Graceful Closure • 2026</p>
      </footer>
    </div>
  );
}
