"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  Settings,
  Mail,
  Sun,
  Moon,
  LogOut,
  Briefcase,
  GraduationCap,
  Code,
  Phone,
  Menu,
  X,
  Github,
} from "lucide-react";

const BaseLayout = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && navLinks.some((link) => link.id === hash)) {
      setActiveSection(hash);
    }
  }, []);

  const navLinks = [
    {
      icon: <Home size={20} color="#0E9F6E" />,
      label: "About Me",
      id: "about",
    },
    {
      icon: <GraduationCap size={20} color="#0E9F6E" />,
      label: "Education",
      id: "education",
    },
    { icon: <Code size={20} color="#0E9F6E" />, label: "Skills", id: "skills" },
    {
      icon: <Briefcase size={20} color="#0E9F6E" />,
      label: "Experience",
      id: "experience",
    },
    {
      icon: <Settings size={20} color="#0E9F6E" />,
      label: "Projects",
      id: "projects",
    },
    {
      icon: <Phone size={20} color="#0E9F6E" />,
      label: "Contact",
      id: "contact",
    },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setSidebarOpen(false);
    window.history.pushState(null, "", `#${id}`);
  };

  const Sidebar = () => (
    <aside
      className={`fixed top-0 left-0 z-30 w-64 h-screen bg-gray-800 dark:bg-gray-950 text-white transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 text-center border-b border-gray-700">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img
              src="/images/A.D.svg"
              alt="User profile"
              className="rounded-full border-4 border-gray-700"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800" />
          </div>
          <h2 className="text-xl font-bold">Anupam Dhakal</h2>
          <p className="text-gray-400 text-sm">Software Engineer</p>
        </div>

        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 rounded-bl-lg rounded-tl-lg rounded-br-none rounded-tr-none transition-colors ${
                    activeSection === link.id
                      ? "bg-gray-700 text-white border-r-4 border-[#0E9F6E]"
                      : "text-gray-300 hover:bg-gray-700 hover:border-r-4 hover:border-[#0E9F6E] border-r-transparent"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors mb-4"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );

  const MobileBottomNav = () => (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 dark:bg-gray-900 text-white flex justify-around items-center h-16 md:hidden z-50">
      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => handleNavClick(link.id)}
          className={`flex flex-col items-center justify-center ${
            activeSection === link.id ? "text-blue-400" : "text-gray-300"
          }`}
        >
          {React.cloneElement(link.icon, { size: 24 })}
          <span className="text-xs">{link.label}</span>
        </button>
      ))}
    </nav>
  );

  const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-8">
        <div className="container mx-auto text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} Anupam Dhakal Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2">
            Designed & Developed by{" "}
            <a
              href="https://www.anupamdhakal.com.np/"
              className="text-blue-500 hover:underline"
            >
              Anupam Dhakal
            </a>
          </p>
        </div>
      </footer>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64 p-4 md:p-8 max-h-screen overflow-y-auto">
        <div className="md:hidden flex flex-col items-center text-center mb-4">
          <div className="relative w-24 h-24 mx-auto mb-2">
            <img
              src="/images/A.D.svg"
              alt="User profile"
              className="rounded-full border-2 border-gray-700"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Anupam Dhakal
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Software Engineer
          </p>
        </div>

        {/* About Section */}
        {activeSection === "about" && (
          <div className="animate-fadeIn">
            <div
              className="animate-slideIn bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              id="about"
            >
              <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl">
                    Hello ...
                  </h2>
                  <h1 className="mt-2 text-4xl font-extrabold text-[#0E9F6E] tracking-tight sm:text-5xl">
                    I&apos;m Anupam Dhakal !
                  </h1>
                </div>

                {/* Contact & Location Information */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Home
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#0E9F6E"
                      className="w-6 h-6"
                    />
                    <span>Vermillion, SD</span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Mail
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#0E9F6E"
                      className="w-6 h-6"
                    />
                    <span>anupamdhakal20@gmail.com</span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Github
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#0E9F6E"
                      className="w-6 h-6"
                    />
                    <span>@anupamdkl</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Software Engineer with 3+ years of experience building
                    scalable, responsive, and accessible web applications using
                    Angular, React, and TypeScript. Proven expertise in
                    developing modular, reusable components and integrating
                    RESTful APIs to deliver high-performance user interfaces.
                    Adept at collaborating with cross-functional teams to
                    translate design concepts into functional applications.
                    Passionate about creating intuitive, accessible, and
                    visually appealing user experiences while adhering to WCAG
                    2.0 standards. Experienced in working with large enterprise
                    codebases, design systems, and modern front-end tools like
                    Storybook and RxJS.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Programming Languages
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        JavaScript, TypeScript, Python, Java
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Front-End
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        React, Angular (10+), Next.js, RxJS, Redux, CSS/SASS,
                        Bootstrap, Storybook, D3.js
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Frameworks & Libraries
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Express.js, Node.js
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Microservices & APIs
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        RESTful Web Services, Socket.io
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Data Access
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Mongoose, Sequelize
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Databases
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        SQL, PostgreSQL, MongoDB
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Cloud Services
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        AWS, Azure
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        DevOps & CI/CD
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Docker, Azure DevOps, GitHub, CI/CD
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Testing
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Jest, Karma, Protractor, Jasmine, Mocha
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Security & Authentication
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        JWT, OAuth, OAuth 2.0
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Documentation
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Swagger, OpenAPI
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Version Control
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Git, GitHub
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Collaboration Tools
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Jira, Confluence
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Design Patterns
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        MVC, Singleton, Observer
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Methodologies
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Agile/SCRUM, Kanban, Test-Driven Development (TDD)
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Accessibility
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        WCAG 2.0, Accessibility Audits, A11y Tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === "education" && (
          <div className="animate-fadeIn">
            <div
              className="animate-slideIn bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              id="education"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Education
              </h1>
              <div className="grid gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    University of South Dakota
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Master of Science in Computer Science (Jan. 2024 - Present)
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    PCPS College (University of Bedfordshire)
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bachelor of Science (Hons) in Computer Science & Software
                    Engineering (Aug. 2018 - July 2021)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="animate-fadeIn">
            <div
              className="animate-slideIn bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              id="skills"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Skills
              </h1>
              <div className="grid gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Programming Languages
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        JavaScript, TypeScript, Python, Java
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Front-End
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        React, Angular (10+), Next.js, RxJS, Redux, CSS/SASS,
                        Bootstrap, Storybook, D3.js
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Frameworks & Libraries
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Express.js, Node.js
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Microservices & APIs
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        RESTful Web Services, Socket.io
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Data Access
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Mongoose, Sequelize
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Databases
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        SQL, PostgreSQL, MongoDB
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Cloud Services
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        AWS, Azure
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        DevOps & CI/CD
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Docker, Azure DevOps, GitHub, CI/CD
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Testing
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Jest, Karma, Protractor, Jasmine, Mocha
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Security & Authentication
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        JWT, OAuth, OAuth 2.0
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Documentation
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Swagger, OpenAPI
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Version Control
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Git, GitHub
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Collaboration Tools
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Jira, Confluence
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Design Patterns
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        MVC, Singleton, Observer
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Methodologies
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Agile/SCRUM, Kanban, Test-Driven Development (TDD)
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Accessibility
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        WCAG 2.0, Accessibility Audits, A11y Tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <div className="animate-fadeIn">
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              id="experience"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Work Experience
              </h1>

              <div className="grid gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Graduate Research Assistant
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    University of South Dakota, Department of Computer Science
                    (Jan. 2024 - Present)
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>
                      Developed and maintained a Research Lab Website using
                      React, Next.js, and TypeScript.
                    </li>
                    <li>
                      Implemented a user-friendly interface for researchers to
                      upload, update, and manage research papers.
                    </li>
                    <li>
                      Designed and integrated a RESTful API backend using
                      Node.js and Express.js, with MongoDB.
                    </li>
                    <li>
                      Created reusable UI components and design systems using
                      Storybook and Bootstrap.
                    </li>
                    <li>
                      Conducted unit and integration testing using Jest, Mocha,
                      and Chai.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to deliver
                      high-performance solutions.
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Graduate Administrative Assistant
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    University of South Dakota, Department of Communication
                    Science and Disorder (Aug. 2023 - Jan. 2024)
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>
                      Contributed to the development of a Tinnitus Treatment and
                      Counseling project.
                    </li>
                    <li>
                      Integrated RESTful APIs to enable seamless data flow
                      between the front-end and back-end systems.
                    </li>
                    <li>
                      Implemented reusable components and design systems using
                      Storybook.
                    </li>
                    <li>
                      Utilized HTML5, CSS3/SASS, and Bootstrap to create
                      visually appealing and accessible user interfaces.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to deliver
                      high-performance solutions tailored to the needs of
                      tinnitus patients.
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Software Engineer
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tekvortex Pvt Ltd (Apr. 2022 - Nov. 2023)
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>
                      Designed and implemented scalable front-end architectures
                      for web applications using Angular 12+, React, and
                      TypeScript.
                    </li>
                    <li>
                      Developed custom, reusable components and integrated
                      third-party libraries.
                    </li>
                    <li>
                      Collaborated with UX designers and product owners to
                      translate design concepts into responsive, accessible, and
                      intuitive user interfaces.
                    </li>
                    <li>
                      Optimized applications for performance, ensuring fast
                      loading times and smooth user experiences across devices.
                    </li>
                    <li>Conducted unit testing using Karma and Protractor.</li>
                    <li>
                      Worked with RESTful APIs and microservices, integrating
                      backend services built with Node.js and Express.js.
                    </li>
                    <li>
                      Utilized Git and GitHub for version control and
                      collaborated using Jira and Confluence for project
                      management.
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Associate Software Engineer
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Medmax Innovation (Apr. 2021 - Jan. 2022)
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>
                      Built responsive and intuitive user interfaces using
                      Angular and React.
                    </li>
                    <li>
                      Integrated RESTful APIs and third-party components to
                      enable seamless data flow and functionality.
                    </li>
                    <li>
                      Implemented best practices for front-end development,
                      including code reviews, testing, and documentation.
                    </li>
                    <li>
                      Worked in an Agile/Scrum environment to deliver
                      high-quality software solutions on time.
                    </li>
                    <li>
                      Utilized HTML5, CSS3, and JavaScript to create dynamic and
                      interactive web applications.
                    </li>
                    <li>
                      Conducted testing using Jasmine and Mocha to ensure code
                      reliability and performance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="animate-fadeIn">
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              id="projects"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Personal Projects
              </h1>

              <div className="grid gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Retrieval-Augmented Generation (RAG) Chatbot
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Python, LangChain, OpenAI GPT, FAISS, Flask
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>
                      Designed and implemented a RAG-based chatbot using
                      LangChain and OpenAI GPT.
                    </li>
                    <li>
                      Utilized FAISS for efficient similarity search and
                      retrieval of documents from a large dataset.
                    </li>
                    <li>Deployed the chatbot as a RESTful API using Flask.</li>
                    <li>Optimized the system for low-latency responses.</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Automatic Number Plate Recognition (ANPR) System
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Python, OpenCV, TensorFlow, Flask
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>
                      Developed an Automatic Number Plate Recognition (ANPR)
                      system using OpenCV for image processing and TensorFlow
                      for character recognition.
                    </li>
                    <li>
                      Implemented a custom-trained deep learning model to
                      classify and extract text from number plates.
                    </li>
                    <li>
                      Deployed the system as a web application using Flask.
                    </li>
                    <li>Optimized the model for real-time performance.</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Enterprise Dashboard
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Angular 12, TypeScript, RxJS, SASS
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>
                      Developed a responsive enterprise dashboard using Angular
                      12, TypeScript, and RxJS.
                    </li>
                    <li>
                      Optimized the application for performance, ensuring fast
                      loading times and smooth user experiences.
                    </li>
                    <li>
                      Conducted accessibility audits to ensure compliance with
                      WCAG 2.0 standards.
                    </li>
                    <li>
                      Implemented reusable components and integrated third-party
                      libraries.
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    E-Commerce Platform
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    React, Redux, Bootstrap, RESTful APIs
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>
                      Built a scalable e-commerce platform using React and
                      Redux.
                    </li>
                    <li>
                      Integrated RESTful APIs to enable seamless data flow
                      between front-end and back-end systems.
                    </li>
                    <li>
                      Implemented Bootstrap for responsive design and
                      cross-browser compatibility.
                    </li>
                    <li>
                      Conducted unit testing using Jest and React Testing
                      Library to ensure code reliability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Contact Section */}
        {activeSection === "contact" && (
          <div className="animate-fadeIn">
            <div
              className="animate-slideIn bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              id="contact"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Contact
              </h1>
              <div className="grid gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </label>
                      <p className="text-gray-900 dark:text-white">
                        anupam.dhakal@example.com
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        Phone
                      </label>
                      <p className="text-gray-900 dark:text-white">
                        +1 (555) 123-4567
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        LinkedIn
                      </label>
                      <p className="text-gray-900 dark:text-white">
                        linkedin.com/in/anupamdhakal
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Send a Message
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full p-2 border rounded-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        Message
                      </label>
                      <textarea
                        rows="4"
                        className="w-full p-2 border rounded-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700"
                      />
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default BaseLayout;
