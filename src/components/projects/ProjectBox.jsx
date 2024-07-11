import { Link } from "react-router-dom"
var json_tags = require("./../../data/tags.json")


export default function ProjectBox({ project }) {

    if (project === undefined) {
        return <p>Project undefined</p>
    }

    function tagLookup(name) {
        return json_tags.filter(json_tag => {
            return json_tag.name === name
        })[0]
    }

    return <Link to={"/projects/" + project.url} className="p-4 rounded-md shadow-md hover:scale-105 transition duration-300 bg-white">
            <img className="h-40 w-72 object-cover mx-auto rounded-md" src={project.cover} alt="react" />
            <p className="text-lg text-center my-4">{project.title}</p>
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