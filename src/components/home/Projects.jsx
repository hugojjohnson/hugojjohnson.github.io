import { Link } from "react-router-dom"
var projects = require('./../../data/projects.json');


export default function Projects() {

    return (<div id="projects" className="w-full mb-64">
        <div className="max-w-screen-lg lg:mx-auto text-center mx-4">
            <h1 className="text-3xl">My Projects</h1>
            <p className=" pb-40">Here are some of my favourite projects. You can click <Link to={"/projects"} className="text-blue-700">here</Link> to see more.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-0 px-6">
                {
                    projects.map((project, index) => {
                        return <div key={index} className="group relative col-span-1 rounded-md shadow-md">
                            <div className='w-full h-full opacity-0 group-hover:opacity-100 flex flex-row absolute transition duration-300 z-50'>
                                <button className='w-full h-full rounded-md hover:scale-110 transition duration-300 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Demo</button>
                                <button className='w-full h-full rounded-md hover:scale-110 transition duration-300 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Code</button>
                            </div>
                            <div className='group-hover:blur-sm transition duration-300'>
                                <div className="w-full p-1">
                                    <img className="h-48 w-96 object-cover mx-auto rounded-md" src={project.cover} alt="react" />
                                </div>
                                <div className="w-full h-20 flex flex-row items-center justify-around">
                                    <p className="text-center">{project.title}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    </div>);
}