import { Link, useParams } from 'react-router-dom';
import { Tags } from '../../Interfaces';

import tags from "./../../tags"
import projects from '../../projects';
import Contact from '../main/Contact';
var json_tags: Tags[] = tags

export default function ProjectTemplate() {
    const { query } = useParams();
    if (query === undefined || query.length === 0) { return <>"There was an error."</> }

    const possibleProjects = projects.filter(proj => proj.url === query)
    if (possibleProjects.length !== 1) {
        console.log("Project not found.")
        return (<div className="w-full h-screen">
            <div className=" max-w-screen-xl h-screen mx-auto flex flex-col justify-center items-center">
            There was a problem finding the project.
                <br /><br />
            <Link to={"/"} className='underline text-blue-600 text-lg'>Return Home</Link>
            </div>
        </div>)
    }

    const project = possibleProjects[0]
    return (<div className="w-full min-h-screen">
        <div className="max-w-screen-lg min-h-screen mx-auto flex flex-col py-40">
            <h1 className='blog-title'>{project.title}</h1>
            <h3 className='blog-subtitle'>{project.blurb}</h3>
            <div className='mt-2 flex flex-row whitespace-pre-wrap'>
                <p>Tags: </p>
                <ul className='flex flex-row'>
                {
                    project.tags.map((tag, index) => {
                        const myCoolTag = tagLookup(tag)
                        return <li key={index} className={myCoolTag.color}>#{myCoolTag.name} </li>
                    })
                }
                </ul>
            </div>
            <img className="w-[60%] max-h-[40%] object-fit my-16 rounded-lg shadow-lg mx-auto" src={project.cover} alt='cover' />

            { project.blog }
        </div>
        <Contact />
    </div>);

    function tagLookup(name: string) {
        return json_tags.filter(json_tag => {
            return json_tag.name === name
        })[0]
    }
}