import { Link } from "react-router-dom"
import ProjectBox from "./../projects/ProjectBox";
var projects = require('./../../data/projects.json');
var json_tags = require("./../../data/tags.json")


export default function Projects() {

    const largeProjectBox = (project) => {
        if (project === undefined) {
            return <p>Project undefined</p>
        }

        function tagLookup(name) {
            return json_tags.filter(json_tag => {
                return json_tag.name === name
            })[0]
        }

        return <Link to={"/projects/" + project.url} className="w-96 p-7 rounded-md shadow-md hover:scale-105 transition duration-300 -translate-y-10 bg-white">
            <img className=" h-40 w-80 object-cover mx-auto rounded-md" src={project.cover} alt="react" />
            <p className="text-lg text-center my-5">{project.title}</p>
            <div className="w-full h-[5vh] px-5 gap-x-3 flex flex-row flex-wrap">
                {
                    project.tags.map((projTag, index) => {
                        const myCoolTag = tagLookup(projTag)
                        return <p key={index} className={`text-center italic ${myCoolTag.color}`}>#{myCoolTag.name}</p>
                    })
                }
            </div>
        </Link>
    }


    return (<div id="projects" className="w-full pb-64 bg-[#EEEEEE]">
        <div className="max-w-screen-lg lg:mx-auto text-center mx-4">
            <h1 className="text-3xl mb-10">My Projects</h1>
            <p className="text-lg mb-20 self-start mr-auto">Check out some of my favourite projects - lots of them have demos!</p>

            <div className="flex flex-row gap-10 items-center justify-center my-14">
                <ProjectBox project={projects[1]} />
                {largeProjectBox(projects[0])}
                <ProjectBox project={projects[2]} />
            </div>

            <Link to={"/projects"} className=" inline-block p-3 rounded-md shadow-md bg-white hover:scale-105 transition duration-300">See more</Link>
        </div>
    </div>);
}