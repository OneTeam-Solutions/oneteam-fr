import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="project" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Project Management"
          paragraph="Structured methodology for efficient and quality-driven results"
          center
        />

        <div className="flex flex-col lg:flex-row items-center justify-between mt-16 space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Project Management requires a structured methodology and identified deliverables. Our approach aims to combine quality with rigor in order to work efficiently and achieve expected objectives.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We operate on projects such as the deployment of Retail solutions, the implementation of sales support tools, the implementation of omnichannel processes as well as the migration of an omnichannel Retail solution.
            </p>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-primary-dark">Our Project Phases</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Scoping & Study</li>
                <li>Design & Gap analysis</li>
                <li>Configuration & Acceptance</li>
                <li>Change management & Upgrades</li>
                <li>Training & Roll-out</li>
                <li>Run & Hypercare</li>
                <li>Evolutionary maintenance & Applicative support</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <Image
                src="/images/project/project.jpg"
                alt="Project Management"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;