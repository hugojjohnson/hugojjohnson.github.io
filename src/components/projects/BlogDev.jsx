import { useEffect, useState } from 'react';
import markdownit from 'markdown-it'
import * as DOMPurify from 'dompurify';
import hljs from "highlight.js";
import "highlight.js/styles/panda-syntax-dark.css";

const md = markdownit({ html: true })

export default function ProjectTemplate() {

    var [sandbox, setSandbox] = useState("Nothing here yet");

    useEffect(() => {
        async function logMovies() {
            try {
            const response = await fetch("/sandbox.md");
                const data = await response.text();
                setSandbox(DOMPurify.sanitize(md.render(data), { ADD_ATTR: ['target'] }));
            } catch (error) {
                setSandbox("There was an error loading the blog template. " + error)
            }
        }
        logMovies();
    });
    useEffect(() => { hljs.highlightAll() });

    return (<div className="w-full h-screen">
        <div className="max-w-screen-lg h-screen mx-auto flex flex-col pt-40">
            <h1 className='my-title'>Project title</h1>
            <h3 className='my-subtitle'>Project blurb</h3>
            <div className='mt-2 flex flex-row whitespace-pre-wrap'>
                <p>Tags: </p>
                <ul className='flex flex-row'>
                    [tags]
                </ul>
            </div>
            <p className="w-full h-[30%] object-contain my-20">Project cover</p>
            <div className="blog mb-32" dangerouslySetInnerHTML={{ __html: sandbox }} />
        </div>
    </div>);

}