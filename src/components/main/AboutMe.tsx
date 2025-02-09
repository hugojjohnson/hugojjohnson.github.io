import { Link } from "react-router-dom"
import ProjectBox from "../projects/ProjectBox";
import projects from "../../projects";

function getTitle(title: string) {
    return projects.filter(proj => proj.title === title)[0]
}
export default function AboutMe() {
    return (<div id="projects" className="w-full pb-64 bg-[#EEEEEE]">
        <div className="max-w-screen-lg lg:mx-auto text-left mx-4">
            <h1 className="text-3xl mb-10">About Me</h1>
            <p className="text-lg mb-32 self-start mr-auto">I am a talented programmer with a passion for Computer Systems, Algorithms Machine Learning. I have just returned from a semester on exchange in Copenhagen at the Technical University of Denmark, where I had the opportunity to work on some fantastic projects, both in teams and individually. I am looking to put the skills I have learned into practice in the real world. Keep reading to see what I've been working on!</p>
        </div>
        <div className="max-w-screen-lg lg:mx-auto text-right mx-4">
            <h1 className="text-3xl mb-10">Artificial Intelligence</h1>
            <p className="text-lg mb-10 self-start mr-auto">Recent developments in Machine Learning and Artificial Intelligence are revolutionalising the world. Every day, new tools are being built around image processing and generation, and natural language generation. How could I not want to explore?</p>
            <div className="flex flex-row gap-10 items-center justify-center my-14">
                <ProjectBox project={getTitle("Building a Multilayer Perceptron for MNIST")} />
                <ProjectBox project={getTitle("Predicting Wind Turbine Blade Load with Neural Networks")} large={true} />
                <ProjectBox project={getTitle("Designing a hardware accelerator in Chisel")} />
            </div>
            <Link to={"/projects"} className=" inline-block p-3 rounded-md shadow-md bg-white hover:scale-105 transition duration-300">See more</Link>
        </div>
        <div className="max-w-screen-lg lg:mx-auto text-left mx-4 mt-32">
            <h1 className="text-3xl mb-10">Data Structures and Algorithms</h1>
            <p className="text-lg mb-10 self-start mr-auto">So far, I have excelled in Data Structures and Algorithms. Taking Extended Algorithms II was one of the most interesting subjects I have taken so far. I have also developed a series of notes that I have used to help my classmates learn the fundamentals.</p>
            <div className="flex flex-row gap-10 items-center justify-center my-14">
                <ProjectBox project={projects[1]} />
                <ProjectBox project={getTitle("Interactive DSA Learning Platform")} large={true} />
                <ProjectBox project={getTitle("Optimizing Cell Counting in Images")} />
            </div>
            <Link to={"/projects"} className=" inline-block p-3 rounded-md shadow-md bg-white hover:scale-105 transition duration-300">See more</Link>
        </div>
        <div className="max-w-screen-lg lg:mx-auto text-right mx-4 mt-32">
            <h1 className="text-3xl mb-10">Web Development</h1>
            <p className="text-lg mb-10 self-start mr-auto">I love making websites. Why? Because it lets me build tools that I can use every day. Building a tool that fits seamlessly into my life, improving it in some way or another, is unparalelled.</p>
            <div className="flex flex-row gap-10 items-center justify-center my-14">
                <ProjectBox project={getTitle("hugojjohnson.github.io")} />
                <ProjectBox project={getTitle("Workaholic")} large={true} />
                <ProjectBox project={getTitle("My tutoring invoicing system")} />
            </div>
            <Link to={"/projects"} className=" inline-block p-3 rounded-md shadow-md bg-white hover:scale-105 transition duration-300">See more</Link>
        </div>
    </div>);
}