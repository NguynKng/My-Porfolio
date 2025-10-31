import { Link } from "react-router-dom";

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
    <div className="max-w-6xl mx-auto lg:mt-10 mt-4 py-20 px-6">
      <h1 className="tracking-[0.3em] text-white">GET IN TOUCH</h1>
      <p className="mt-6 text-white lg:text-5xl text-3xl font-semibold">
        I love to hear from you. Whether you have a question or just want to
        discuss about technology, just drop me a message in my social media or
        email me directly.
      </p>
      <div className="mt-16 flex lg:flex-row flex-col justify-between gap-8">
        <div className="lg:w-[30%] w-full space-y-4">
          <h1 className="text-white tracking-[0.3em]">REACT ME AT</h1>
          <h3 className="text-gray-600 text-2xl">nguynkhang2109@gmail.com</h3>
          <h3 className="text-gray-600 text-2xl">+0934690473</h3>
        </div>
        <div className="lg:w-[35%] w-full space-y-4">
          <h1 className="text-white tracking-[0.3em]">SOCIAL</h1>
          <h3 className="text-gray-600 text-2xl leading-10">
            Facebook, Instagram, Github, LinkedIn
          </h3>
          <div className="flex items-center gap-4">
            {socialMediaContact.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                target="_blank"
              >
                <img src={item.icon} alt={item.link} className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:w-[35%] w-full h-20 flex items-center justify-center bg-[#282a2e] hover:bg-white hover:text-black text-yellow-500 cursor-pointer py-2 px-4">
          <h1 className="tracking-[0.3em]">SAY HELLO.</h1>
        </div>
      </div>
    </div>
  );
}
