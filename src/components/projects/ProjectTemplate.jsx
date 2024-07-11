import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import markdownit from 'markdown-it'
import * as DOMPurify from 'dompurify';
import hljs from "highlight.js";
import "highlight.js/styles/panda-syntax-light.css";

const md = markdownit({ html: true });

var read_in_projects = require('./../../data/projects.json');
var json_tags = require('./../../data/tags.json');


export default function ProjectTemplate() {
    const { query } = useParams();
    // console.log(query);
    useEffect(() => {
        hljs.highlightAll();
    });

    if (query === undefined || query.length === 0) { return <>"There was an error."</> }

    const possibleProjects = read_in_projects.filter(proj => proj.url === query)
    if (possibleProjects.length !== 1) {
        return (<div className="w-full h-screen">
            <div className=" max-w-screen-xl h-screen mx-auto flex flex-col justify-center items-center">
            There was a problem finding the project.
                <br /><br />
            <Link to={"/"} className='underline text-blue-600 text-lg'>Return Home</Link>
            </div>
        </div>)
    }
    const project = possibleProjects[0]


    return (<div className="w-full h-screen">
        <div className="max-w-screen-lg h-screen mx-auto flex flex-col pt-40">
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


            <div className="blog pb-40" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(md.render(project.blog), { ADD_ATTR: ['target'] }) }} />
        </div>
    </div>);

    function tagLookup(name) {
        return json_tags.filter(json_tag => {
            return json_tag.name === name
        })[0]
    }
}