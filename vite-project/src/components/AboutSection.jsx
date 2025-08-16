import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id = "about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Devloper & Tech Creator
                        </h3>

                        <p className="text-muted-foreground">
                            Giới thiệu về bản thân 1: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, voluptate!.
                        </p>

                        <p className="text-muted-foreground">
                            Giới thiệu về bản thân 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque! Quisquam, voluptatum.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            {/*Gắn link cv để dowload*/}
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Dowload CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="w-6 h-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground"> // Tạo ra website như nào, với mục đich gì...</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="w-6 h-6 text-primary" />
                                </div>

                                
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                        <p className="text-muted-foreground"> // Thiet ke website như nào, ...</p>
                                    </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                </div>

                                <div className="text-left">
                                        <h4 className="font-semibold text-lg">Project Management</h4>
                                        <p className="text-muted-foreground"> // Quản lý dự án bằng phương pháp gì, bằng công cụ gì..</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}