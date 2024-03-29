import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context";
var json_projects = require('./../../data/projects.json');
var json_tags = require('./../../data/tags.json');



export default function Search() {
    const minimise_length = 3;
    const [searchTerm, setSearchTerm] = useState("");
    const [viewTags, setViewTags] = useState(json_tags.slice(0, minimise_length));
    const [tags, setTags] = useContext(UserContext);
    const [projects, setProjects] = useState([]);

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
        return <Link key={index} to={"/projects/" + project.url} className="relative rounded-md shadow-md hover:scale-105 transition duration-300">
            <div className='transition duration-300'>
                <div className="w-full p-1">
                    <img className="h-32 w-64 object-cover mx-auto rounded-md" src={project.cover} alt="react" />
                </div>
                <div className="w-full h-12 mb-2 flex flex-row items-end justify-around">
                    <p className="text-center">{project.title}</p>
                </div>
                <div className="w-full h-10 mb-2 ml-5 gap-5 flex flex-row items-center justify-start">
                {
                    project.tags.map((projTag, index) => {
                        const myCoolTag = tagLookup(projTag)
                        return <p key={index} className={`text-center ${myCoolTag.color}`}>#{myCoolTag.name}</p>
                    })
                }
                </div>
            </div>
        </Link>
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
    function seeMore(json_tag) {
        if (tags.includes(json_tag)) {
            setTags(tags.filter(tag => tag !== json_tag))
        } else {
            setTags(tags => [...tags, json_tag])
        }
    }

    function tagLookup(name) {
        return json_tags.filter(json_tag => {
            return json_tag.name === name
        })[0]
    }

    return (<div className="w-full min-h-screen">
        <div className="max-w-screen-xl h-full lg:mx-auto pt-28 flex flex-col items-center mx-4">
            <h1 className="text-3xl pb-10">Projects</h1>

            <div className="w-full flex lg:flex-row flex-col justify-between items-center sm:items-end lg:items-start lg:justify-around">
                <input className="w-full lg:w-[50%] h-10 border-2 border-gray-300 rounded-lg outline-none" placeholder="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                <div className="flex flex-col mb-6">
                    <h1 className="text-lg underline mb-3 mt-6 lg:mt-0">Tags:</h1>
                    <ul className="grid grid-cols-3 gap-x-5">
                        {tags_html}
                        <p className="text-blue-700 cursor-pointer" onClick={() => {
                            if (viewTags.length === minimise_length) {
                                setViewTags(json_tags)
                            } else {
                                setViewTags(json_tags.slice(0, minimise_length))
                            }
                        }}>{viewTags.length === minimise_length ? "See more" : "See less"}</p>
                    </ul>
                </div>
            </div>
            
            {/* Projects */}
            <p className="mt-20">Search</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects_html}
            </div>
        </div>
    </div>);
}