import { Link } from "react-router-dom"
import { Project } from "../../Interfaces"
import tags from "./../../tags"

function tagLookup(name: string) {
    return tags.filter(json_tag => {
        return json_tag.name === name
    })[0]
}

export default function ProjectBox({ project, large=false }: { project: Project, large?: Boolean }) {

    if (project === undefined) {
        return <p>Project undefined</p>
    }

    return <Link to={"/project/" + project.url} className={"bg-white rounded-md shadow-md hover:scale-105 transition duration-300 " + (large ? "w-96 p-7 -translate-y-10" : "p-4")}>
        <img className={"h-40 object-cover mx-auto rounded-md " + (large ? "w-72" : "w-80")} src={project.cover} alt="react" />
        <p className={"text-lg text-center " + (large ? "my-4" : "my-5")}>{project.title}</p>
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