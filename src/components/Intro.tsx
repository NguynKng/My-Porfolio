export default function Intro() {
  return (
    <section className="section-shell relative overflow-hidden pb-20 pt-14 lg:pb-28 lg:pt-24">
      <div className="pointer-events-none absolute right-[-12rem] top-[-16rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-12rem] bottom-[-16rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative card-surface overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-14">
        <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full border border-slate-400/20 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute right-20 top-12 h-24 w-24 rounded-full border border-slate-500/30" />

        <span className="section-kicker">HELLO WORLD</span>

        <h1 className="mt-7 max-w-4xl font-[Sora] text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-7xl">
          I am Nguyen Khang, building polished web and mobile products.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Based in Ho Chi Minh City, I focus on clean architecture, strong backend systems, and user-friendly interfaces that feel fast and intentional.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 text-xs tracking-[0.22em] text-slate-400">
          <span className="rounded-full border border-slate-500/35 bg-slate-900/60 px-4 py-2">WEB DEVELOPMENT</span>
          <span className="rounded-full border border-slate-500/35 bg-slate-900/60 px-4 py-2">MOBILE APPS</span>
          <span className="rounded-full border border-slate-500/35 bg-slate-900/60 px-4 py-2">RESTFUL API</span>
        </div>
      </div>
    </section>
  );
}
