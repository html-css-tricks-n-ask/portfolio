"use client";
import { aboutMe } from "../lib/aboutData";
import { motion } from "framer-motion";

import { useSelector } from "react-redux"

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiAntdesign,
  SiMaterialdesign, // ✅ Fixed here
  SiNpm,
  SiGithub,
  SiPostman,
  SiGit,
  SiJirasoftware,
  SiSentry,
} from "react-icons/si";
import { FaDatabase, FaCode } from "react-icons/fa";

const skillIcons = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  JSX: SiReact,
  "React SDK": SiReact,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
  Redux: SiRedux,
  "Context API": SiReact,
  "Ant Design (ANTD)": SiAntdesign,
  "Material UI": SiMaterialdesign,
  Axios: SiReact,
  "TanStack Query": FaDatabase,
  NPM: SiNpm,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Compass: FaCode,
  Jira: SiJirasoftware, // ✅ Added Jira
  "Agile Methodology": SiJirasoftware,
  "Daily Scrum": SiJirasoftware,
  Sentry: SiSentry,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {

  const mode = useSelector((state) => state.theme.mode);


  return (
    <section  className={`min-h-screen px-6 py-20 
      ${
        mode === "dark"
          ? "bg-black text-gray-200"
          : "bg-white text-gray-800"
      }`}>
      <div className="max-w-6xl mx-auto mt-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-orange-500">
            {aboutMe.heading}
          </h2>
          <div className="h-1 w-16 mx-auto bg-orange-500 my-3 rounded-full"></div>
          <p  className={`max-w-xl mx-auto text-lg
      ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            {aboutMe.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">
              Get to know me!
            </h3>
            <div className={ `${mode === "dark" ? "text-gray-300" : "text-gray-700"} space-y-4 leading-relaxed`}>
              {aboutMe.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            {aboutMe.skills.map((skill, index) => {
              const Icon = skillIcons[skill];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, color: "#f97316" }}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm"
                >
                  {Icon && <Icon className="text-xl" />}
                  <span>{skill}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
