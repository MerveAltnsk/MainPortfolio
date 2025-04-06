import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";


const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div>
        <Spotlight className=" h-screen" fill="grey" />
        <Spotlight className=" left-full h-[80vh]" fill="violet" />
        <Spotlight className=" left-80 h-[80vh] w-[50vw]" fill="#87CEEB" />
      </div>
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100 "
        />
      </div>

      <div className="flex flex-col items-center">
      <h1 className="heading lg:max-w-[45vw]">
        Let&apos;s create amazing projects <span className="text-purple">together</span>!
      </h1>

      <p className="text-white-200 md:mt-10 my-5 text-center">
        I&apos;m always excited to collaborate on new and innovative projects. Let&apos;s bring your ideas to life!
      </p>

      <a href="mailto:mervealtinisik99@gmail.com">
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>

      {/* 🌐 Sosyal medya ikonları */}
      <div className="flex gap-6 mt-10">
        {socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={item.img} alt="social" className="w-8 h-8" />
          </a>
        ))}
      </div>
    </div>

    </footer>
  );
};

export default Footer;
