import SectionTitle from "../Common/SectionTitle";

const GreenIt = () => {
  return (
    <section id="green-it" className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Green IT"
          paragraph="Sustainable solutions for a greener future in Retail IT"
          center
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-16">
          <div className="lg:w-2/3">
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6">
              On top of providing you experienced and honest Retail IT services, we also pay attention to our environment.
            </p>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6">
              To address this, we are developing a "Green IT for Retail" offer.
            </p>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6">
              Not only will we be able to run periodic IT assessments for your annual CSR Reporting, we also want to go one step further.
            </p>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6">
              In assisting and evaluating the impact of your IT decisions as they are made, for operations or projects, we believe you will better achieve your CSR goals.
            </p>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6">
              And ultimately this will help reducing your footprint on this planet.
            </p>

          </div>
          <div className="lg:w-1/3 flex justify-center">
            <img src="/images/green/green-it.jpg" alt="Green IT" className="w-80 max-w-md rounded-lg " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenIt;