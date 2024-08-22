import NewsLatterBox from "./NewsLatterBox";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-between items-center">
          <div className="w-full px-4 lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative w-full h-0 pb-[75%] lg:pb-[60%]">
              <Image
                src="/images/footer/contactUs.png"
                alt="contact-us"
                layout="fill"
                objectFit="contain"
                priority
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;