import TitleComponent from "../ui/TitleComponent";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const Experience = () => {
  return (
    <div id="experience" className="text-white pb-5 md:pb-8">
      <TitleComponent title="Professional Experience" />
      <div className="flex flex-wrap justify-center pt-4 mx-5">
        <Accordion className="rounded-none lg:w-[750px] w-sm">
          <AccordionPanel>
            <AccordionTitle className="text-white bg-transparent hover:bg-transparent focus:ring-0">
              Software Engineer @ Tekvortex Pvt Ltd.
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Developed and maintained robust web applications utilizing
                React/Next Js, Vue Js, and Express.js, ensuring seamless
                frontend and backend integration. Managed build systems and
                tooling to streamline development workflows, resulting in
                increased productivity. Collaborated with senior professionals
                to enhance my code of ethics and promote code
                reusability.Collaborated with cross-functional teams to design
                and implement scalable architectures and application features.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="text-white bg-transparent hover:bg-transparent focus:ring-0">
              Associate Frontend Developer @ Medmax Innovation
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Worked as a mentor to the Interns in the Company and guided them
                in the development process.Implemented design concepts
                intoHTML5/CSS, focusing on compatibility and accessibility
                across various platforms. Generated design frameworks designed
                to encourage maximal user response rates to ad placements
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
