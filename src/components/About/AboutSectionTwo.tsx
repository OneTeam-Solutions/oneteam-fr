const TimelineItem = ({ title, content, position }) => (
  <div
    className={`flex w-full flex-col items-center md:flex-row ${position === "start" || position === "end" ? "h-4" : "my-12 md:my-48"}`}
  >
    <div className="order-2 flex w-full justify-center md:order-1 md:w-1/2 md:justify-end">
      {(position === "left" || position === "start") && (
        <div
          className={`w-full md:w-10/12 ${position === "start" ? "-mt-32" : "pr-0 md:pr-8"} mt-4 text-center md:mt-0 md:text-right`}
        >
          <h3 className="mb-2 text-lg font-bold">{title}</h3>
          <p className="text-sm">{content}</p>
        </div>
      )}
    </div>
    <div
      className={`order-1 my-4 flex h-4 w-4 items-center justify-center rounded-full bg-[#F29D35] md:order-2 md:my-0 ${position === "start" || position === "end" ? "md:absolute md:left-1/2 md:-translate-x-1/2 md:transform" : ""}`}
    ></div>
    <div className="order-3 flex w-full justify-center md:w-1/2 md:justify-start">
      {(position === "right" || position === "end") && (
        <div
          className={`w-full md:w-10/12 ${position === "end" ? "-mt-32" : "pl-0 md:pl-8"} mt-4 text-center md:mt-0 md:text-left`}
        >
          <h3 className="mb-2 text-lg font-bold">{title}</h3>
          <p className="text-sm">{content}</p>
        </div>
      )}
    </div>
  </div>
);

const AboutSectionTwo = () => {
  return (
    <div id="about" className="container mx-auto px-4 py-12 md:px-0 md:py-24">
      <div className="relative">
        <div
          className="absolute left-1/2 hidden w-1 -translate-x-1/2 transform bg-[#F29D35] md:block"
          style={{
            top: "3.4rem",
            bottom: "3.4rem",
          }}
        ></div>
        <div className="md:space-y-48">
          <TimelineItem
            title="Consulting Firm"
            content="One Team is a young consulting firm specializing in the field of Retail and team performance management. Our team is made up of Retail specialists and performance facilitators who bring real added value to our clients."
            position="left"
          />
          <TimelineItem
            title="Our Team"
            content="One Team is more than just a name, it is our philosophy. We believe that the collective intelligence and motivation of our team members are the best ways to achieve long-term performance because, although alone we may go faster, together we go further."
            position="right"
          />
          <TimelineItem
            title="Human & Therefore Effective"
            content="We place great importance on our team members and support them so that each individual can grow and develop. We believe that trust, communication, and teamwork are the foundations of a high-performing team and a real competitive advantage for our clients."
            position="left"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
