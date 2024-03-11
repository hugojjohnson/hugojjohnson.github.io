export default function Hero() {
    return (<div className="w-full h-screen">
        <div className="max-w-screen-xl h-screen mx-auto flex flex-col justify-center items-center">
            <div className=" flex flex-col md:flex-row items-center">
                <h1 className="text-5xl sm:text-8xl drop-shadow-lg">Hi, I'm Hugo.</h1>
                <img src="/logo192.png" alt="react logo" className="w-60 h-60 rounded-md" />
            </div>
            <p className="mt-10 text-xl text-center px-4">I'm a curious, passionate student studying Software Engineering at the University of Sydney.</p>
        </div>
    </div>);
}