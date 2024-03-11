import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../Context";

var tools = require('./../../data/tags.json');


export default function Tools() {
    tools = tools.filter(tool => tool.tool === true);
    const [tags, setTags] = useContext(UserContext);

    return (<div className="w-full min-h-screen mb-64">
        <div className="max-w-screen-lg lg:mx-auto text-center mx-4">
            <h1 id="tools" className="text-3xl pb-4">My tools</h1>
            <p className="pb-40 px-4">Here are the tools I am confident with. I have used all of them to make projects.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {
                    tools.map((tool, index) => {
                        return <Link to={"/projects"} onClick={() => setTags([tool])} key={index} className="rounded-md shadow-md">
                            <div className="w-full p-2">
                                <img className="w-20 mx-auto" src={tool.link} alt={tool.name} />
                            </div>
                            <div className="w-full h-20 flex flex-row items-center justify-around">
                                <p className="text-center">{tool.name}</p>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    </div>);
}