import React from "react";
import Hero from "./Hero";
import Background3D from "./Background3D";
import Features from "./Features";
import Footer from "./Footer";

export default function App(): JSX.Element {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background3D />
      <header className="relative z-20">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center font-bold text-black">SC</div>
            <div>
              <div className="text-white font-semibold">SoundCode</div>
              <div className="text-xs text-slate-400">Listen • Code • Connect</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a className="px-4 py-2 rounded-md text-sm border border-white/10 hover:bg-white/5" href="#features">Features</a>
            <a className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold" href="/auth.html">Sign up</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
