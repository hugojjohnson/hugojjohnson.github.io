import { useLocation, useParams } from "react-router-dom";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Tools from "./Tools";
import RecursionBadge from "./RecursionBadge";
// import "./Svganimation.css"


export default function Home() {
    const location = useLocation()
    const urlSearchParams = new URLSearchParams(location.search)
    console.log(typeof urlSearchParams)
    if (urlSearchParams.has("recursion")) {
        console.log("recursion")
    }
    return (
        <div>
        {/* https://ashutoshdash.hashnode.dev/how-to-add-beautiful-curves-to-your-website */}
        {
            urlSearchParams.has("recursion") && <RecursionBadge />
        }
            <Hero />
            <svg className="" width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg"><path d="M 0,600 L 0,150 C 115.60000000000002,116.26666666666667 231.20000000000005,82.53333333333333 393,84 C 554.8,85.46666666666667 762.8,122.13333333333333 945,139 C 1127.2,155.86666666666667 1283.6,152.93333333333334 1440,150 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#eeeeee" fillOpacity="0.53"></path><path d="M 0,600 L 0,350 C 161.86666666666667,372.5333333333333 323.73333333333335,395.06666666666666 489,386 C 654.2666666666667,376.93333333333334 822.9333333333334,336.26666666666665 982,325 C 1141.0666666666666,313.73333333333335 1290.5333333333333,331.8666666666667 1440,350 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#eeeeee" fillOpacity="1"></path></svg>
            <Projects />
            <Tools />
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg"><path d="M 0,400 L 0,100 C 189.7333333333333,78.53333333333333 379.4666666666666,57.06666666666668 534,67 C 688.5333333333334,76.93333333333332 807.8666666666668,118.26666666666665 953,129 C 1098.1333333333332,139.73333333333335 1269.0666666666666,119.86666666666667 1440,100 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#eeeeee" fillOpacity="0.53" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,233 C 133.86666666666667,238.06666666666666 267.73333333333335,243.13333333333335 424,246 C 580.2666666666667,248.86666666666665 758.9333333333334,249.53333333333336 932,247 C 1105.0666666666666,244.46666666666664 1272.5333333333333,238.73333333333332 1440,233 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#eeeeee" fillOpacity="1" transform="rotate(-180 720 200)"></path></svg>
            <Contact />
            {/* <TestMarkup /> */}
        </div>
    );
}
