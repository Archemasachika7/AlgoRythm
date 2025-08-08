import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function Hero(): JSX.Element {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    anime.timeline({ easing: "easeOutCubic" })
      .add({ targets: ".hero-title", translateY: [20,0], opacity: [0,1], duration: 800 })
      .add({ targets: ".hero-sub", translateY: [10,0], opacity: [0,1], duration: 700 }, "-=400")
      .add({ targets: ".hero-ctas", opacity: [0,1], translateY: [8,0], duration: 600 }, "-=400");
  }, []);

  return (
    <section ref={heroRef} className="min-h-[72vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold leading-tight">
            Listen together. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Code together.</span>
          </h1>
          <p className="hero-sub text-lg text-slate-300 max-w-xl">
            A hybrid space for couples, friends and coding partners — millisecond-synced audio, collaborative Monaco IDE, and curated coding challenges. Build memories while building code.
          </p>

          <div className="hero-ctas flex flex-wrap gap-3">
            <a href="/auth.html" className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 text-black shadow">Get started</a>
            <a href="#features" className="px-5 py-3 rounded-md border border-white/10 text-sm">Explore features</a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="card text-sm">🔒 Private rooms</div>
            <div className="card text-sm">🎧 Synced audio</div>
            <div className="card text-sm">🧑‍💻 Multi-language IDE</div>
          </div>
        </div>

        <div className="relative">
          <div className="card w-full h-80 md:h-96 overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300">Room • Live</div>
                  <div className="font-semibold text-lg">Couples Jam · Code Session</div>
                </div>
                <div className="text-sm text-slate-400">3 connected</div>
              </div>

              <div className="flex-1 flex items-end justify-between">
                <div className="w-2/3">
                  <div className="mt-6 h-3 bg-white/6 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-400 to-cyan-300" style={{ width: "36%" }} />
                  </div>
                  <div className="text-xs text-slate-400 mt-2">Now playing: Midnight Engine — Demo Mix</div>
                </div>
                <div className="w-1/3 text-right">
                  <button className="px-3 py-2 rounded-md bg-white/6">Play</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-400">Preview of a live room card — click Get started to create your own.</div>
        </div>
      </div>
    </section>
  );
}
