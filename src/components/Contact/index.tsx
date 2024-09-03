import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact Us
        </h2>
        <div className="flex max-sm:flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
          <ContactForm />
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative max-sm:hidden w-full aspect-square max-w-sm mx-auto">
              <Image
                src="/images/footer/contactUs.png"
                alt="Contact us"
                layout="fill"
                objectFit="contain"
                priority
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;