import SectionTitle from "../Common/SectionTitle";

const GreenIt = () => {
  return (
    <section
      id="green-it"
      className="relative z-10 bg-white py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Green IT"
          paragraph="Sustainable solutions for a greener future in Retail IT"
          center
        />

        <div className="mt-16 flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="lg:w-2/3">
            <p className="mb-6 text-base text-gray-600 dark:text-gray-300 lg:text-lg">
              On top of providing you experienced and honest Retail IT services,
              we also pay attention to our environment.
            </p>
            <p className="mb-6 text-base text-gray-600 dark:text-gray-300 lg:text-lg">
              To address this, we are developing a &quot;Green IT for
              Retail&quot; offer.
            </p>
            <p className="mb-6 text-base text-gray-600 dark:text-gray-300 lg:text-lg">
              Not only will we be able to run periodic IT assessments for your
              annual CSR Reporting, we also want to go one step further.
            </p>
            <p className="mb-6 text-base text-gray-600 dark:text-gray-300 lg:text-lg">
              In assisting and evaluating the impact of your IT decisions as
              they are made, for operations or projects, we believe you will
              better achieve your CSR goals.
            </p>
            <p className="mb-6 text-base text-gray-600 dark:text-gray-300 lg:text-lg">
              And ultimately this will help reducing your footprint on this
              planet.
            </p>
          </div>
          <div className="flex justify-center lg:w-1/3">
            <img
              src="/images/green/green-it.jpg"
              alt="Green IT"
              className="w-80 max-w-md rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenIt;
