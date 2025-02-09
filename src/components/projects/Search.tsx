import { useEffect, useState, useContext } from "react";
import ProjectBox from "./ProjectBox"
import { UserContext } from "../../Context";
import { Project, Tags } from "../../Interfaces";
import projects from "../../projects";
import tags from "./../../tags"

var json_projects: Project[] = projects
var json_tags: Tags[] = tags

export default function Search() {
    const minimise_length = 4;
    const [searchTerm, setSearchTerm] = useState("");
    const [viewTags, setViewTags] = useState(json_tags.slice(0, minimise_length));
    const [tags, setTags] = useContext(UserContext);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        let filtered_projects = json_projects
        if (tags.length === 0 && searchTerm.length === 0) {
            setProjects(json_projects);
            return;
        }
        if (tags.length > 0) {
            filtered_projects = filtered_projects.filter(proj => {
                for (const tag of tags) {
                    if (!proj.tags.includes(tag.name)) {
                        return false;
                    }
                }
                return true;
            })
        }
        if (searchTerm.length > 0) {
            filtered_projects = filtered_projects.filter(proj => {
                const words = proj.title.toLowerCase().split(" ");
                const searchWords = searchTerm.toLowerCase().split(" ");
                for (const searchWord of searchWords) {
                    let allG = false;
                    for (const word of words) {
                        if (word.startsWith(searchWord)) {
                            allG = true;
                        }
                    }
                    if (allG === false) {
                        return false;
                    }
                }
                return true;
            })
        }
        setProjects(filtered_projects);
    }, [searchTerm, tags]);

    const projects_html = projects.map((project, index) => {
        return <ProjectBox key={index} project={project} />
    })

    const tags_html = (viewTags.map((json_tag, index) => {
            return <div key={index} className="w-full h-7 flex flex-row gap-2 justify-between items-center">
                <li className={`${json_tag.color}`}>{json_tag.name}</li>
                {

                    <input type="checkbox" defaultChecked={tags.includes(json_tag)} className="h-[70%] aspect-square" onClick={() => seeMore(json_tag)} />
                }
            </div>
        })
    )
    function seeMore(json_tag: Tags) {
        if (tags.includes(json_tag)) {
            setTags(tags.filter(tag => tag !== json_tag))
        } else {
            setTags(tags => [...tags, json_tag])
        }
    }

    return (<div className="w-full min-h-screen">
        <div className="max-w-screen-xl h-full lg:mx-auto pt-28 flex flex-col items-center mx-4">
            <h1 className="text-3xl pb-5 self-start">Projects</h1>
            <p className="self-start">A (mostly) comprehensive list of everything interesting I've worked on. You can search for specific tags on the right, or by name in the search bar.</p>
            <p className="self-start pb-7">Most of the projects have <strong>demos</strong> available - be sure to check them out!</p>

            <div className="w-full flex lg:flex-row flex-col justify-between sm:items-end lg:items-start">
                <input className="w-full lg:mr-24 h-10 border-[0.5px] pl-3 border-gray-300 rounded-lg outline-none self-start" placeholder="search a project name..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                <div className="flex flex-col mb-6 w-80">
                    <h1 className="text-lg underline mb-3 mt-6 lg:mt-0">Tags:</h1>
                    <ul className="grid grid-cols-2 gap-x-5">
                        {tags_html}
                        <p className="text-blue-900 cursor-pointer" onClick={() => {
                            if (viewTags.length === minimise_length) {
                                setViewTags(json_tags)
                            } else {
                                setViewTags(json_tags.slice(0, minimise_length))
                            }
                        }}>{viewTags.length === minimise_length ? "See more" : "See less"}</p>
                    </ul>
                </div>
            </div>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {projects_html}
            </div>
        </div>
    </div>);
}