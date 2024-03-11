import { Link } from "react-router-dom"
var projects = require('./../../data/projects.json');


export default function Contact() {

    return (<div id="contact" className="w-full h-[50vh]">
        <div className="max-w-screen-lg mx-auto text-center flex flex-col justify-start">
            <h1 className="text-3xl pb-4">Contact me</h1>
            <p className="">I'd love to get in contact!</p>
            <p>Email: <a href="mailto:hugojohnson271@gmail.com" className="text-blue-700">hugojohnson271@gmail.com</a></p>

        </div>
    </div>);
}