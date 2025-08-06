import React, { useState } from 'react';
import { cn } from '@/lib/utils';
//All the skills
const skills = [
    //fonrt-end
    { name: "HTML/CSS", level: 95, category: "front-end" },
    { name: "JavaScript", level: 90, category: "front-end" },
    { name: "React", level: 9, category: "front-end" },
    { name: "TypeScript", level: 85, category: "front-end" },
    { name: "Tailwind CSS", level: 75, category: "front-end" },
    { name: "Next.js", level: 55, category: "front-end" },

    //back-end
    { name: "Node.js", level: 80, category: "back-end" },
    { name: "Express.js", level: 70, category: "back-end" },
    { name: "MongoDB", level: 65, category: "back-end" },
    { name: "PostgreSQL", level: 60, category: "back-end" },
    
    //tools
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Figma", level: 60, category: "tools" },
    { name: "VSCode", level: 75, category: "tools" },
]

const catagories = ["all", "front-end", "back-end", "tools"];
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const fileredSkills = skills.filter(skill =>
        activeCategory === "all" || skill.category === activeCategory)

    return (
        <section 
        id = "skills" 
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl"> 
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {catagories.map((category, key) => (
                        <button key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                            activeCategory === category 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-secondary/70 text-foreground hover:bd-secondary'
                        )}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fileredSkills.map((skill,key) => (
                    <div key={key}
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out]"
                            style={{ width: skill.level + "%" }}
                            >
                            </div>
                        </div>

                        <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>

                    </div>
                ))}

            </div>
        </section>
    ) 

}