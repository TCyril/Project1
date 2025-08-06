import { ArrowRight, ExternalLink, Github, Section } from 'lucide-react';
import React from 'react';


const projects = [
    {
        id: 1,
        title: "Project One",
        description: "This is a brief description of Project One.",
        image: "/projects/project1.png",
        tag: ["Web Development", "React", "Tailwind"],
        demoUrl: "#", // Replace with actual demo URL
        githubUrl: "#" // Replace with actual GitHub URL
    },
    
    {
        id: 2,
        title: "Project Two",
        description: "This is a brief description of Project Two.",
        image: "/projects/project2.png",
        tag: ["Mobile App"],
        demoUrl: "#", // Replace with actual demo URL
        githubUrl: "#" // Replace with actual GitHub URL
    },

    {
        id: 3,
        title: "Project Three",
        description: "This is a brief description of Project Three.",
        image: "/projects/project3.png",
        tag: ["Data Science"],
        demoUrl: "#", // Replace with actual demo URL
        githubUrl: "#" // Replace with actual GitHub URL
    },

    // Add more projects as needed
];

export const ProjectsSection = () => {
    return (
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully 
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                    key={key} 
                    className="bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tag.map((tag) => 
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                )}
                            </div>
                        

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                    href={project.githubUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>  
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/TCyril"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>

      </section>
    )
};