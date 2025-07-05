export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto mt-10 py-20 px-6">
      <h1 className="tracking-[0.3em] text-white">GET IN TOUCH</h1>
      <p className="mt-6 text-white text-5xl font-semibold">
        I love to hear from you. Whether you have a question or just want to
        chat about design, tech & art — shoot me a message.
      </p>
      <div className="mt-16 flex lg:flex-nowrap flex-wrap justify-between gap-8">
        <div className="w-[30%] space-y-4">
          <h1 className="text-white tracking-[0.3em]">REACT ME AT</h1>
          <h3 className="text-gray-600 text-2xl">sayhello@gmail.com</h3>
          <h3 className="text-gray-600 text-2xl">+123 456 7890</h3>
        </div>
        <div className="w-[35%] space-y-4">
          <h1 className="text-white tracking-[0.3em]">SOCIAL</h1>
          <h3 className="text-gray-600 text-2xl leading-10">
            Behance, Dribble, Twitter, Instagram, Github
          </h3>
        </div>
        <div className="w-[35%] h-20 flex items-center justify-center bg-[#282a2e] hover:bg-white hover:text-black text-yellow-500 cursor-pointer py-2 px-4">
          <h1 className="tracking-[0.3em]">SAY HELLO.</h1>
        </div>
      </div>
    </div>
  );
}
