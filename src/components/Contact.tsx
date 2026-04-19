export default function Contact() {
  const socialMediaContact = [
    {
      icon: "/facebook.png",
      link: "https://www.facebook.com/khang.nguyen.299660",
    },
    {
      icon: "/instagram.png",
      link: "https://www.instagram.com/nguynkng.2109",
    },
    {
      icon: "/github.png",
      link: "https://github.com/NguynKng",
    },
    {
      icon: "/linkedin.png",
      link: "https://www.linkedin.com/in/khang-nguy%E1%BB%85n-82978b302",
    },
  ];
  return (
    <section className="section-shell py-16 lg:py-24">
      <h1 className="section-kicker">GET IN TOUCH</h1>
      <p className="mt-7 max-w-4xl font-[Sora] text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
        I love to hear from you. Whether you have a question or just want to
        discuss about technology, just drop me a message in my social media or
        email me directly.
      </p>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <div className="card-surface rounded-2xl p-6">
          <h2 className="section-kicker">REACH ME AT</h2>
          <p className="mt-5 text-lg text-slate-300">nguynkhang2109@gmail.com</p>
          <p className="mt-2 text-lg text-slate-400">+84 934690473</p>
        </div>

        <div className="card-surface rounded-2xl p-6">
          <h2 className="section-kicker">SOCIAL</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Facebook, Instagram, Github, LinkedIn
          </p>
          <div className="mt-4 flex items-center gap-3">
            {socialMediaContact.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-600/50 bg-slate-900/60 p-2 transition hover:-translate-y-1 hover:border-slate-300/70 cursor-pointer"
              >
                <img src={item.icon} alt={item.link} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <a
          href="mailto:nguynkhang2109@gmail.com"
          className="card-surface flex min-h-40 items-center justify-center rounded-2xl p-6 text-center cursor-pointer"
        >
          <span className="rounded-full border border-blue-500/50 bg-blue-500/10 px-6 py-3 text-xs tracking-[0.24em] text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/20 cursor-pointer">
            SAY HELLO.
          </span>
        </a>
        </div>
    </section>
  );
}
