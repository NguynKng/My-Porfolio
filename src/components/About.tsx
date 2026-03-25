import { Link } from "react-router-dom";
import { Award, BriefcaseBusiness } from "lucide-react";

export default function About() {
  const educationData = [
    {
      company: "HUTECH University, Ho Chi Minh City",
      position: "INFORMATION TECHNOLOGY",
      duration: "2022 - Present",
    },
  ];

  const experienceData = [
    {
      company: "VNA Group",
      position: "Software Developer Intern",
      duration: "12/2025 - 02/2026",
      description:
        "Contributed to internal web features, supported API integration tasks, and collaborated with the team to improve UI quality.",
    },
  ];

  return (
    <section className="section-shell">
      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.05fr]">
        <img
          src="/avatar-1.jpg"
          className="h-96 w-full rounded-[1.75rem] border border-slate-700/45 object-cover sm:h-120 lg:h-full"
          alt="About"
        />

        <div className="card-surface flex flex-col justify-center rounded-[1.75rem] p-7 sm:p-10">
          <span className="section-kicker">ABOUT</span>
          <p className="mt-7 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
            I am Nguyen Khang, a web developer based in Ho Chi Minh City with a strong focus on scalable backend systems and high-quality digital products. I enjoy turning complex ideas into practical, polished solutions that are easy to use and built to grow.
          </p>
          <Link
            to="/cv/NguyenHuuNguyenKhang_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center rounded-full border border-slate-500/40 bg-[#142034] px-6 py-3 text-xs tracking-[0.24em] text-[#f5c55d] transition hover:border-slate-300/60 hover:text-slate-100"
          >
            VIEW MY CV
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="card-surface h-full rounded-2xl p-6 sm:p-7">
          <h2 className="section-kicker">EXPERTISE</h2>
          <p className="mt-6 max-w-4xl font-[Sora] text-2xl font-semibold leading-tight text-slate-100 sm:text-3xl lg:text-4xl">
            Web Development, Mobile Applications, Backend Systems, RESTful APIs, and UI Design.
          </p>
        </div>

        <div className="card-surface h-full rounded-2xl p-6 sm:p-7">
          <h2 className="section-kicker">CERTIFICATION</h2>
          <div className="mt-6 rounded-2xl border border-[#f5c55d66] bg-linear-to-r from-[#1d2533] to-[#1a2942] p-4 sm:p-5">
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-[#f5c55d80] bg-[#f5c55d1f] p-2.5 text-[#f5c55d]">
                <Award className="size-5" />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] text-slate-300">ENGLISH CERTIFICATION</p>
                <h3 className="mt-2 font-[Sora] text-2xl font-semibold text-[#f5c55d]">TOEIC 820</h3>
                <p className="mt-1 text-sm text-slate-300">Issued by IIG Vietnam</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-surface h-full rounded-2xl p-6 sm:p-7">
          <h2 className="section-kicker">EXPERIENCE</h2>
          <div className="mt-7 space-y-6 border-l border-slate-600/50 pl-5">
            {experienceData.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[1.45rem] top-2 h-2.5 w-2.5 rounded-full bg-[#f5c55d]" />
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg border border-[#f5c55d66] bg-[#f5c55d14] p-1.5 text-[#f5c55d]">
                    <BriefcaseBusiness className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-100">{item.company}</h3>
                    <p className="mt-1 text-sm tracking-[0.16em] text-slate-300">{item.position}</p>
                    <p className="mt-1 text-xs tracking-[0.2em] text-slate-500">{item.duration}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface h-full rounded-2xl p-6 sm:p-7">
          <h2 className="section-kicker">EDUCATION</h2>
          <div className="mt-7 space-y-6 border-l border-slate-600/50 pl-5">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[1.45rem] top-2 h-2.5 w-2.5 rounded-full bg-[#f5c55d]" />
                <h3 className="text-lg font-medium text-slate-100">{item.company}</h3>
                <p className="mt-1 text-sm tracking-[0.18em] text-slate-400">{item.position}</p>
                <p className="mt-1 text-xs tracking-[0.2em] text-slate-500">{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
