import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="h-screen overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/images/hero/hero.png"
        alt="Dressing Room"
        layout="fill"
        objectFit="cover"
        priority
        className=""
      />

      <div className="absolute top-1/2 ml-20 text-white leading-[5rem]">
        <h1 className="text-[5rem] text-white"><span className="text-yellow md:before:text-[7rem]">O</span>neTeam</h1>
        <div className="text-[3rem] flex space-x-2">
          <div className="pl-7">
            <span className="text-yellow">o</span>
            <span>f</span>
          </div>
          <h2 className="">Digital Retail Expertise</h2>
        </div>
      </div>

      <Image
        src="/images/logo/Logo_orange.png"
        alt="Hero Background"
        priority
        width={300}
        height={300}
        className="absolute max-sm:hidden -bottom-[7.5rem] right-10"
      />
    </section>
  );
};

export default Hero;