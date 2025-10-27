export default function About() {
  const experienceData = [
    {
      company: "Dropbox",
      position: "Product Designer",
      duration: "AUGUST 2019 - PRESENT",
      description:
        "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.",
    },
    {
      company: "Microsoft",
      position: "Frontend Developer",
      duration: "AUGUST 2016 - JULY 2019",
      description:
        "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.",
    }
  ];

  const educationData = [
    {
      company: "University of Life",
      position: "Master in Graphic Design",
      duration: "APRIL 2015",
      description:
        "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.",
    },
    {
      company: "School of Cool Designers",
      position: "B.A. Degree in Graphic Design",
      duration: "AUGUST 2012",
      description:
        "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
          Visual Design, Branding Identity, UI Design, Product Design, Prototyping, Illustration
        </p>
      </div>

      {/* Experience & Education */}
      <div className="max-w-6xl mx-auto mt-20 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h1 className="tracking-[0.3em] text-white px-6 lg:px-14">EXPERIENCE</h1>
          <div className="mt-12 border-l-2 border-gray-700 relative space-y-16">
            {experienceData.map((item, index) => (
              <div key={index} className="relative px-6 lg:px-14 ">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h1 className="text-white text-2xl md:text-3xl">{item.company}</h1>
                <h2 className="text-gray-200 text-lg md:text-xl mt-1">{item.position}</h2>
                <h2 className="tracking-[0.3em] text-gray-600 text-xs mt-1">{item.duration}</h2>
                <p className="text-gray-500 mt-6 md:mt-10 max-w-2xl text-lg md:text-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="tracking-[0.3em] text-white px-6 lg:px-14">EDUCATION</h1>
          <div className="mt-12 border-l-2 border-gray-700 relative space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className="relative px-6 lg:px-14">
                <div className="absolute top-0 -left-1.5 w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h1 className="text-white text-2xl md:text-3xl">{item.company}</h1>
                <h2 className="text-gray-200 text-lg md:text-xl mt-1">{item.position}</h2>
                <h2 className="tracking-[0.3em] text-gray-600 text-xs mt-1">{item.duration}</h2>
                <p className="text-gray-500 mt-6 md:mt-10 max-w-2xl text-lg md:text-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
