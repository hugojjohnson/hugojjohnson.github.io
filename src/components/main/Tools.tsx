import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../../Context';
import { Tags } from '../../Interfaces';
import tags from "./../../tags"

var tools: Tags[] = tags


export default function Tools() {
    tools = tools.filter(tool => tool.tool === true);
    const [_, setTags] = useContext(UserContext);

    return (<div className="w-full min-h-screen pb-64 bg-[#EEEEEE]">
        <div className="max-w-screen-lg lg:mx-auto text-center mx-4">
            <h1 id="tools" className="text-3xl pb-4">My tools</h1>
            <p className="pb-40 px-4">Here are the tools I am confident with. I have used all of them to make projects.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {
                    tools.map((tool, index) => {
                        return <Link to={"/projects"} onClick={() => setTags([tool])} key={index} className="rounded-md shadow-md bg-white p-7 flex flex-col gap-10">
                            <img className="w-20 mx-auto" src={tool.link} alt={tool.name} />
                            <p className="text-center">{tool.name}</p>
                        </Link>
                    })
                }
            </div>
        </div>
    </div>);
}