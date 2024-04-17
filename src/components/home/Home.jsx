import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Tools from "./Tools";
// import "./Svganimation.css"


export default function Home() {
    return (
        <div>
        {/* https://ashutoshdash.hashnode.dev/how-to-add-beautiful-curves-to-your-website */}
            {/* <div className="absolute w-full h-screen">
                <svg className="mt-full" width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 112.32535885167462,144.11483253588517 224.65071770334924,138.22966507177034 330,135 C 435.34928229665076,131.77033492822966 533.7224880382776,131.19617224880383 615,140 C 696.2775119617224,148.80382775119617 760.4593301435407,166.98564593301435 842,162 C 923.5406698564593,157.01435406698565 1022.4401913875599,128.86124401913878 1125,123 C 1227.55980861244,117.13875598086123 1333.77990430622,133.5693779904306 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#eeeeee" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,350 C 86.55502392344496,309.45454545454544 173.11004784688993,268.9090909090909 270,280 C 366.8899521531101,291.0909090909091 474.11483253588517,353.81818181818187 574,378 C 673.8851674641148,402.18181818181813 766.4306220095693,387.8181818181818 854,359 C 941.5693779904307,330.1818181818182 1024.1626794258373,286.90909090909093 1121,283 C 1217.8373205741627,279.09090909090907 1328.9186602870814,314.5454545454545 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#eeeeee" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
            </div> */}
            <Hero />
            <svg className="" width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 115.60000000000002,116.26666666666667 231.20000000000005,82.53333333333333 393,84 C 554.8,85.46666666666667 762.8,122.13333333333333 945,139 C 1127.2,155.86666666666667 1283.6,152.93333333333334 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#eeeeee" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,350 C 161.86666666666667,372.5333333333333 323.73333333333335,395.06666666666666 489,386 C 654.2666666666667,376.93333333333334 822.9333333333334,336.26666666666665 982,325 C 1141.0666666666666,313.73333333333335 1290.5333333333333,331.8666666666667 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#eeeeee" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
            <Projects />
            <Tools />
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,100 C 189.7333333333333,78.53333333333333 379.4666666666666,57.06666666666668 534,67 C 688.5333333333334,76.93333333333332 807.8666666666668,118.26666666666665 953,129 C 1098.1333333333332,139.73333333333335 1269.0666666666666,119.86666666666667 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#eeeeee" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,233 C 133.86666666666667,238.06666666666666 267.73333333333335,243.13333333333335 424,246 C 580.2666666666667,248.86666666666665 758.9333333333334,249.53333333333336 932,247 C 1105.0666666666666,244.46666666666664 1272.5333333333333,238.73333333333332 1440,233 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#eeeeee" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path></svg>
            <Contact />
            {/* <TestMarkup /> */}
        </div>
    );
}
