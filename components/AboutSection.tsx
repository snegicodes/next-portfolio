import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SCSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Material UI" },
  { skill: "Bootstrap CSS" },
  { skill: "Node JS" },
  { skill: "Express JS" },
  { skill: "Angular" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "GitLab" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, I&apos;m  <span className="font-bold text-teal-500"> Sarthak Negi</span> — a passionate Software Engineer based in Noida, India, with a strong focus on frontend technologies and product innovation.
            </p>
            <br />
            <p>
              Currently, I&apos;m building impactful web experiences at <span className="font-bold text-teal-500"> Leverage Edu </span> as a <span className="font-bold text-teal-500">Software Development Engineer</span>, where I&apos;ve led projects that improved operational efficiency by over 80%, boosted organic traffic by 15%, and generated thousands of qualified leads through performance-first, accessible web solutions.
            </p>
            <br />
            <p>
              Previously, at <span className="font-bold text-teal-500">JobTwine</span>, a US-based SaaS startup, I optimized data visualization dashboards and frontend performance, enhancing user experience and scaling operational efficiency by 40%.
            </p>
            <br />
            <p>
              I love <span className="font-bold text-teal-500">turning ideas into products</span> — from creating AI-driven solutions for real-time safety to crafting seamless scheduling platforms that make people&apos;s lives easier.
            </p>
            <br />
            <p>
              Outside of work, you&apos;ll find me reading, exploring new places, creating content or playing sports — all driven by a curiosity to keep growing.
            </p>
            <br />
            <p  className="font-bold text-teal-500">
              Let&apos;s build the future together.
            </p>
          </div>
          <div className="text-center justify-center flex flex-col md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row  z-10">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/neogpic.png"
              alt=""
              width={170}
              height={170}
              className="hidden md:block md:relative md:bottom-4 md:z-0 md:mt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
