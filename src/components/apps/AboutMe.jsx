import React from "react";
import {
  profileDescription,
  educationExperience,
  skills,
  githubRepos,
} from "../../data/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SkillItem = ({ skillItem, isTechStack = false, iconSize = 15 }) => {
  if (!skillItem || !skillItem.icon) {
    return null;
  }

  return (
    <div className="flex items-center ring-2 ring-neutral-700 bg-neutral-900 rounded-sm p-2 pl-3">
      {React.cloneElement(skillItem.icon, { size: iconSize })}
      <span
        className={`ml-2 text-neutral-400 text-selection hover:text-neutral-200 duration-150 ease-in-out cursor-pointer ${
          isTechStack ? "text-xs" : "text-sm"
        }`}
      >
        {skillItem.name}
      </span>
    </div>
  );
};

const ProjectCard = ({ repo }) => {
  const renderSkills = () =>
    repo.techUsed.map((tech, index) => (
      <span
        key={index}
        className="px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-full mr-2 mb-2"
      >
        {tech}
      </span>
    ));

  return (
    <div className={`bg-neutral-900/80 rounded-lg p-6 hover:translate-x-1 hover:-translate-y-1 duration-300 text-selection border border-neutral-800 ${repo.featured ? 'col-span-2' : 'col-span-1'}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{repo.name}</h3>
        <div className="flex space-x-4">
          <a
            href={repo.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub repository"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={repo.liveURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit live site"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
      <p className="text-neutral-400 mb-4 line-clamp-3">{repo.description}</p>
      <div className="flex flex-wrap mt-2">
        {renderSkills()}
      </div>
    </div>
  );
};

const Skill = ({ icon, name, size }) => (
  <div
    className={`w-[${
      size === 48 ? "6em" : "5em"
    }] h-24 flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2`}
  >
    {React.cloneElement(icon, { size })}
    <div className="text-balance text-center text-sm select-none pt-2">
      {name}
    </div>
  </div>
);

const SkillsList = ({ x, y }) => (
  <div className="flex flex-wrap gap-2">
    <>
      {skills.slice(x, y).map((skill) => (
        <Skill key={skill.key} icon={skill.icon} name={skill.name} size={48} />
      ))}
    </>
  </div>
);

const AboutMe = ({ page, handleDivClick, expandedDiv }) => {
  const renderPageContent = () => {
    switch (page) {
      case "About Me":
        return (
          <div className="min-h-[calc(100vh-200px)] p-6 bg-neutral-900/30 backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Profile Image Section */}
              <div className="relative group select-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative w-72 h-96 overflow-hidden rounded-2xl bg-neutral-900/80 p-2">
                  <img
                    src="/images/profile.jpg"
                    className="w-full h-full object-cover rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    alt="Profile"
                    style={{
                      objectPosition: "center 20%"
                    }}
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/10"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:max-w-2xl bg-neutral-900/50 backdrop-blur-md p-8 rounded-2xl">
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent selection:bg-blue-500/30">
                    About Me
                  </h1>
                  <p className="text-lg text-neutral-300 leading-relaxed selection:bg-blue-500/30 selection:text-white">
                    {profileDescription}
                  </p>
                  
                  {/* Tech Stack Section */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-neutral-200 selection:bg-blue-500/30 selection:text-white">Technologies I've been working with recently:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {skills.slice(0, 9).map((skill) => (
                        <div key={skill.key} className="flex items-center space-x-2 bg-neutral-800/50 backdrop-blur-sm p-2 rounded-lg">
                          <span className="text-neutral-300 select-none">{React.cloneElement(skill.icon, { size: 20 })}</span>
                          <span className="text-sm text-neutral-300 selection:bg-blue-500/30 selection:text-white">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Education":
        return (
          <div className="h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="p-6 bg-neutral-900/30 backdrop-blur-xl">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-8 sticky top-0 bg-neutral-900/30 backdrop-blur-xl py-4">
                Education & Certifications
              </h1>
              <div className="space-y-6">
                {educationExperience.map((edu, index) => (
                  <div 
                    key={edu.key}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative bg-neutral-900/50 backdrop-blur-md p-6 rounded-2xl border border-neutral-800/50">
                      <time className="text-sm font-mono text-blue-400">
                        {edu.graduation}
                      </time>
                      <h3 className="text-xl font-bold text-neutral-200 mt-2">
                        {edu.institution}
                      </h3>
                      <p className="text-neutral-400 mt-1">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Skills":
        return (
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            {expandedDiv === 0 && (
              <div className="p-6 bg-neutral-900/30 backdrop-blur-xl">
                <div className="pb-16">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-8 sticky top-0 bg-neutral-900/30 backdrop-blur-xl py-4 z-10">
                    Things I've worked with recently
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {skills.map((skill) => (
                      <div
                        key={skill.key}
                        className="group relative bg-neutral-900/50 backdrop-blur-md rounded-xl p-4 hover:bg-neutral-800/50 transition-all duration-300 border border-neutral-800/50 flex items-center justify-center min-h-[120px]"
                      >
                        <div className="flex flex-col items-center text-center gap-3">
                          {React.cloneElement(skill.icon, { 
                            size: 40,
                            className: "text-neutral-300 group-hover:text-blue-400 transition-colors duration-300" 
                          })}
                          <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case "My Stuffs":
        return (
          <div className="overflow-y-auto h-[calc(100vh-200px)] px-6 py-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {githubRepos
                  .filter(repo => repo.featured)
                  .map((repo, index) => (
                    <ProjectCard key={index} repo={repo} />
                  ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-2">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {githubRepos
                  .filter(repo => !repo.featured)
                  .map((repo, index) => (
                    <ProjectCard key={index} repo={repo} />
                  ))}
              </div>
            </div>
          </div>
        );
      case "Resume":
        return (
          <main className="border-0 flex w-full justify-center opacity-75 mt-2 text-sm">
            too bored to make a resume.
          </main>
        );
      default:
        return "404 not found";
    }
  };

  return (
    <main className="h-[100vh] w-full ml-2.5 mt-2">{renderPageContent()}</main>
  );
};

export default AboutMe;
