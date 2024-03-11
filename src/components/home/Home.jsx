import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
// import TestMarkup from "../TestMarkup";
import Tools from "./Tools";


export default function Home() {
    return (
        <div>
            <Hero />
            <Tools />
            <Projects />
            <Contact />
            {/* <TestMarkup /> */}
        </div>
    );
}
