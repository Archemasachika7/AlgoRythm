import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="relative z-10 border-t border-white/6 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <div>© {new Date().getFullYear()} SoundCode — Built for pairs and teams.</div>
        <div className="flex items-center gap-3">
          <a className="hover:underline" href="/privacy">Privacy</a>
          <a className="hover:underline" href="/terms">Terms</a>
          <a className="hover:underline" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
