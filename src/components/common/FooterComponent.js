"use client";

import { Footer } from "flowbite-react";
import {
  BsMailbox,
  BsGithub,
  BsLinkedin
} from "react-icons/bs";
import React from "react";

const FooterComponent = () => {
  return (
    <Footer container bgDark>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
              anupamdkl<span className="text-cyan-400 ml-1">.</span>
            </span>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Anupam Dhakal" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsMailbox} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
