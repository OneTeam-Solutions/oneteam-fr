import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  OneTeam of Digital Retail and Green IT experts
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  voluptatem necessitatibus nihil rerum animi, pariatur,
                  adipisci tenetur repellendus consequatur quam modi aut
                  obcaecati fuga fugit ipsum aperiam suscipit? Numquam,
                  adipisci!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Import image of dressing */}
      </section>
    </>
  );
};

export default Hero;
