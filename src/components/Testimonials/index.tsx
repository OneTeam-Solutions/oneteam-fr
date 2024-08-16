import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="green-it" className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Green IT"
          paragraph=""
          center
        />

        {/* add paragraph */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
          <p className="text-justify">On top of providing you experienced and honest Retail IT services, we also pay attention to our environment.

            To address this, we are developing a "Green IT for Retail" offer.

            Not only will we be able to run periodic IT assessments for your annual CSR Reporting, we also want to go one step further.

            In assisting and evaluating the impact of your IT decisions as they are made, for operations or projects, we believe you will better achieve your CSR goals.

            And ultimately this will help reducing your footprint on this planet.

            Come back soon to know more about it.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
