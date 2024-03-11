import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            console.log("We have a hash")
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                // elem.scrollIntoView({ behavior: "smooth" })
                window.scrollTo({ top: elem.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 120, left: 0, behavior: "smooth" })

            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location,])

    const links = [
        {
            name: "home",
            url: "/"
        },
        {
            name: "tools",
            url: "/#tools"
        },
        {
            name: "projects",
            url: "/#projects"
        },
        {
            name: "contact",
            url: "/#contact"
        }
    ]


    return (<><div className="w-full h-20 flex justify-center md:justify-end items-center fixed drop-shadow-sm bg-white z-50">
        <div className="flex">
            {
                links.map((link, index) => {
                    return <li className="list-none px-3 text-md capitalize last:pr-5 text-gray-600 hover:text-black hover:scale-110 hover:cursor-pointer" key={index}>
                        <Link to={link.url}>{link.name}</Link>
                    </li>
                })
            }
        </div>
    </div>

        {/* Body */}
        <Outlet />

    </>);
}