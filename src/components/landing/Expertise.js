import React from "react";
import TitleComponent from "../ui/TitleComponent";

const Expertise = () => {
  return (
    <div id="expertise" className="text-white pb-5 md:pb-8">
      <TitleComponent title="My Expertise" />
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm overflow-hidden m-4 border border-gray-500">
          <div className="px-6 py-4">
            <div className="font-semibold text-xl md:text-3xl mb-5">
              Frontend Dev React, NextJS
            </div>
            <p className="text-white text-base">
              Passionate about UI/UX. Over 4 years of development experience in
              HTML, CSS, JS, React and NextJS frameworks.
            </p>
          </div>
        </div>

        <div className="max-w-sm  overflow-hidden m-4 border border-gray-500">
          <div className="px-6 py-4">
            <div className="font-semibold text-xl md:text-3xl mb-5">
              Software Development
            </div>
            <p className="text-white text-base">
              Experienced in both functional and OOP: Dart, Python, Java,
              JavaScript, TypeScript.
            </p>
          </div>
        </div>

        <div className="max-w-sm  overflow-hidden m-4 border border-gray-500">
          <div className="px-6 py-4">
            <div className="font-semibold text-xl md:text-3xl mb-5">
              React Native
            </div>
            <p className="text-white text-base">
              Skilled in developing hybrid mobile apps and cross-platform
              solutions using the Flutter framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
