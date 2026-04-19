import { Link } from "react-router-dom";
import { Award, BriefcaseBusiness, GraduationCap, MapPin, Sparkles, Terminal } from "lucide-react";

export default function About() {
  const educationData = [
    {
      company: "HUTECH University, Ho Chi Minh City",
      position: "INFORMATION TECHNOLOGY",
      duration: "2022 - Present",
      icon: <GraduationCap className="size-5" />,
    },
  ];

  const experienceData = [
    {
      company: "VNA Group",
      position: "Software Developer Intern",
      duration: "12/2025 - 02/2026",
      description:
        "Contributed to internal web features, supported API integration tasks, and collaborated with the team to improve UI quality.",
      icon: <BriefcaseBusiness className="size-5" />,
    },
  ];

  return (
    <section className="section-shell py-24 lg:py-32">
      {/* ── Main Bio Section ── */}
      <div className="grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-700/40 bg-[#0d1525]">
          <img
            src="/avatar-1.jpg"
            className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-120 lg:h-full"
            alt="About"
          />
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0d1525]/80 via-transparent to-transparent opacity-60" />
          
          {/* location badge */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
            <MapPin className="size-3 text-amber-400" />
            Ho Chi Minh City, VN
          </div>
        </div>

        <div className="card-surface flex flex-col justify-center rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400/70" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-400/80">
              Who I Am
            </span>
          </div>
          
          <h2 className="mt-6 font-[Sora] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Passionate about <br />
            <span className="bg-linear-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Scalable Systems.
            </span>
          </h2>
          
          <p className="mt-8 text-lg leading-relaxed text-slate-300 sm:text-xl">
            I am Nguyen Khang, a web developer with a strong focus on building high-quality digital products. I enjoy turning complex ideas into practical, polished solutions that are easy to use and built to grow.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/cv/NguyenHuuNguyenKhang_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-blue-500 px-8 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all hover:pr-10 hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)] cursor-pointer"
            >
              <span>VIEW MY RESUME</span>
              <Terminal className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Details Grid ── */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Expertise */}
        <div className="card-surface group rounded-4xl p-8 sm:p-10 transition-all hover:border-blue-400/20">
          <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-400">
            <Sparkles className="size-6" />
          </div>
          <h3 className="section-kicker">EXPERTISE</h3>
          <p className="mt-6 font-[Sora] text-2xl font-semibold leading-tight text-slate-100 sm:text-3xl">
            Modern Backend Systems, RESTful APIs, Mobile Apps &amp; Interactive UI.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Node.js", "React", "TypeScript", "Prisma", "MongoDB", "MySQL"].map(skill => (
              <span key={skill} className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-3 py-1 text-[10px] font-bold text-slate-400">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certification */}
        <div className="card-surface group rounded-4xl p-8 sm:p-10 transition-all hover:border-blue-400/20">
          <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-400">
            <Award className="size-6" />
          </div>
          <h3 className="section-kicker">CERTIFICATION</h3>
          <div className="mt-6 rounded-2xl border border-white/5 bg-linear-to-br from-white/5 to-transparent p-6 transition-all group-hover:border-blue-400/30">
            <div className="flex items-start gap-5">
              <div className="rounded-xl bg-blue-500 p-3 text-white">
                <Terminal className="size-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">ENGLISH PROFICIENCY</p>
                <h4 className="mt-1 font-[Sora] text-3xl font-bold text-white">TOEIC 820</h4>
                <p className="mt-1 text-sm text-slate-400">Certified by IIG Vietnam</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="card-surface rounded-4xl p-8 sm:p-10">
          <h3 className="section-kicker mb-8">EXPERIENCE</h3>
          <div className="space-y-10 border-l-2 border-slate-700/50 pl-8">
            {experienceData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[2.65rem] top-0 flex size-10 items-center justify-center rounded-full border border-slate-700 bg-[#0d1525] text-blue-400">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{item.company}</h4>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-sm font-medium tracking-wider text-blue-400/80">{item.position}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.duration}</span>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="card-surface rounded-4xl p-8 sm:p-10">
          <h3 className="section-kicker mb-8">EDUCATION</h3>
          <div className="space-y-10 border-l-2 border-slate-700/50 pl-8">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[2.65rem] top-0 flex size-10 items-center justify-center rounded-full border border-slate-700 bg-[#0d1525] text-blue-400">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{item.company}</h4>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-sm font-medium tracking-wider text-blue-400/80">{item.position}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
