export default function About() {
  const educationData = [
    {
      company: "HUTECH University, Ho Chi Minh City",
      position: "Software Engineering",
      duration: "2022 - Present",
    }
  ];

  return (
    <div className="px-4 md:px-10">
      {/* Hero section */}
      <div className="py-20">
        <div className="flex flex-col lg:flex-row relative max-w-7xl mx-auto">
          <img
            src="/avatar-1.jpg"
            className="w-full lg:w-1/2 h-[30rem] md:h-[40rem] lg:h-[50rem] object-cover"
            alt="About"
          />
          <div className="bg-transparent p-8 lg:p-12 flex flex-col justify-center lg:absolute right-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-[20%] w-full lg:w-[38rem]">
            <h1 className="relative inline-flex items-center before:content-[''] before:block before:w-10 before:h-[2px] tracking-[0.3em] before:bg-gray-500 text-yellow-500 before:mr-3">
              ABOUT
            </h1>
            <p className="text-white mt-8 text-lg md:text-2xl font-medium">
                I'm Nguyen Khang, a passionate web developer based in Ho Chi Minh City with a deep drive to create meaningful and scalable digital experiences. I specialize in building robust backend systems, RESTful APIs, and managing complex databases. I’m fueled by the challenge of turning ideas into reality — constantly learning, improving, and pushing boundaries to deliver impactful and high-performance solutions. Let’s collaborate to build something extraordinary.
            </p>
            <button className="w-full tracking-[0.3em] bg-[#282a2e] hover:bg-white hover:text-black text-yellow-500 text-center py-4 mt-8 cursor-pointer">
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="max-w-6xl mx-auto mt-20">
        <h1 className="tracking-[0.3em] text-white">EXPERTISE</h1>
        <p className="mt-8 text-3xl md:text-5xl lg:text-6xl font-bold text-white font-[DM_Serif_Display]">
          Web Development, App Mobile Development, Backend Management Systems, RESTful APIs, UI Design
        </p>
      </div>

      {/* Experience & Education */}
      <div className="max-w-6xl mx-auto mt-20 py-20 flex flex-col lg:flex-row gap-16">
        <div className="w-full">
          <h1 className="tracking-[0.3em] text-white px-6 lg:px-14">EDUCATION</h1>
          <div className="mt-12 border-l-2 border-gray-700 relative space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className="relative px-6 lg:px-14">
                <div className="absolute top-0 -left-1.5 w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h1 className="text-white text-2xl md:text-3xl">{item.company}</h1>
                <h2 className="text-gray-200 text-lg md:text-xl mt-1">{item.position}</h2>
                <h2 className="tracking-[0.3em] text-gray-600 text-xs mt-1">{item.duration}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
