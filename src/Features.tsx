import React, { useEffect, useRef } from "react";

const FEATURES = [
  {
    title: "Synchronized Listening",
    subtitle: "Millisecond-accurate audio sync",
    desc: "Host or co-listen — playback, pause, and seek stay in perfect sync across participants."
  },
  {
    title: "Collaborative IDE (Monaco)",
    subtitle: "Real-time multi-cursor editing",
    desc: "Full Monaco integration: Python, Java, C++, Go — share code, run in sandboxes."
  },
  {
    title: "Challenges & Uploads",
    subtitle: "Upload problem packs",
    desc: "Create and share coding challenges; load starter templates into the editor instantly."
  },
  {
    title: "Private & Public Rooms",
    subtitle: "Invite-only or public",
    desc: "Quick ephemeral rooms for pairs, or permanent rooms for teams and friends."
  },
  {
    title: "AI-Powered Suggestions",
    subtitle: "Smart completion & hints",
    desc: "Suggest code snippets and debugging hints right in the editor."
  },
  {
    title: "Mobile & Desktop",
    subtitle: "Fully responsive",
    desc: "Lightweight UI adapted for phones with touch-friendly controls."
  }
];

export default function Features(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".feature-card");
    if (!items) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, { threshold: 0.2 });

    items.forEach(i => io.observe(i));

    return () => io.disconnect();
  }, []);

  // parallax effect for sections
  useEffect(() => {
    const onScroll = () => {
      const layers = document.querySelectorAll<HTMLElement>(".parallax-layer");
      const scrolled = window.scrollY;
      layers.forEach((el, idx) => {
        const depth = (idx + 1) * 0.015;
        el.style.transform = `translateY(${scrolled * depth}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="features" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Features that bring people together</h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            From cozy listening rooms to code-focused sessions — we help you socialize and ship.
          </p>
        </div>

        <div ref={containerRef} className="grid gap-8 md:grid-cols-2">
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className="feature-card card parallax-layer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-black">{i + 1}</div>
                <div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="text-sm text-slate-300 mt-1">{f.subtitle}</p>
                  <p className="mt-3 text-slate-400">{f.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h4 className="font-semibold text-lg mb-2">What's New</h4>
            <ul className="text-slate-300 list-disc pl-5 space-y-2">
              <li>Dashboard v2 — richer analytics for rooms</li>
              <li>Mobile offline listening beta</li>
              <li>Judge0 integration for fast, safe code runs</li>
            </ul>
          </div>

          <div className="card p-6">
            <h4 className="font-semibold text-lg mb-2">Security</h4>
            <p className="text-slate-300">End-to-end encrypted invites, OAuth sign-ins, and optional ephemeral sessions that auto-delete.</p>
          </div>

          <div className="card p-6">
            <h4 className="font-semibold text-lg mb-2">Roadmap</h4>
            <p className="text-slate-300">Mobile apps, improved live latency with WebRTC SFU, and social feeds for shared playlists and challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
