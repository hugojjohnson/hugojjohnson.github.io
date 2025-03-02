import { Project } from "./Interfaces"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const projects: Project[] = [
    {
        url: "hugojjohnson",
        title: "hugojjohnson.github.io",
        blurb: "My website!",
        cover: "/media/projects/hugojjohnson.png",
        githubLink: "https://github.com/hugojjohnson/hugojjohnson.github.io",
        tags: [
            "Python",
            "NodeJs",
            "React",
            "Tailwind"
        ],
        blog: <div className="markdown">
            <h1>Project Demo</h1>
            <a target="_blank" href="https://hugojjohnson.github.io/?recursion"> Check it out! </a>
            <h1> Summary </h1>
            <p> Everyone needs a personal website: It's what puts you into the world, promotes you, and shows everyone what you're passionate about.For programmers especially, it's practically a no-brainer. For this reason, this website was one of the first ones that I made, but over time I've gradually added to it as I learned new skills.</p>
            <p>I decided to put some of my projects up here so that a) you(the reader 🙃) can see what I've been working on, and b) so that I have some record of all the cool things I've made and when.I plan on adding new awesome things, so if you're not as pumped as I am, check back in a couple of months :)</p>
            <h1> What I learned </h1>
            <h2> KISS </h2>
            <p> I always wanted to put on display the projects that I've been working on in my website.Originally, I was going to make a Rest API backend which would host a database of all the projects I've ever worked on, write some sort of keyword search engine for searching through them, and connect * that * to a GPT - powered recommendation algorithm - type - thing.It definitely would have displayed my skills.But it also would have been less reliable, more expensive, and more difficult to maintain.</p>
            <p> Instead, this website is built solely in React, with each project post hard - coded into it.Whenever I add a project, I just edit the website and re - deploy it.And that's mean I had more time to work on other, more interesting projects(like <a target="_blank" href="https://hugojjohnson.github.io/workaholic">this one</a>).</p>
        </div>
    },
    {
        url: "workaholic",
        title: "Workaholic",
        blurb: "My study timer.",
        cover: "/media/projects/workaholic.png",
        githubLink: "https://github.com/hugojjohnson/workaholic",
        tags: [
            "Python",
            "NodeJs",
            "React",
            "Tailwind",
            "TypeScript"
        ],
        blog: <div>
            <h1>Project Demo</h1>
            <a target="_blank" href="https://hugojjohnson.github.io/workaholic">Check it out!</a>
            <h1>Summary</h1>
            <p>I might be biased, but my study timer, Workaholic, is one of my favourite websites on the internet.It's simple, easy to use, and does exactly what I designed it to do. Workaholic tracks the time, duration and type of study that you do, and lets you analyse trends in your study over time over a period of time. It uses Chart.js to display some important metrics about your habits, letting you learn more about both the amount and quality of study that you put in.</p>
            <p>I developed a first draft of the website at the start of 2024 when I made it my goal to track my study over a semester. During that time, I tracked *every minute* of study that I put in. It was a pain at the start, but as I started automating everything it got much easier. What's more, at the end of the semester, I found some really interesting facts that surprised me:</p>

            <ol>
                <li>Even though I thought I was, I was not consistent. At all. I'd put in a full day of study, doubling my goals, then do nothing at all the next day. I had fluctuations of long periods of time studying, followed by a self-imposed haitus. Weirdest of all, I thought I was pretty consistent most days!</li>
                <li>I actually spent almost equal amounts of time on each of my subjects, with a 30-40-30 split... It did not feel like that. I thought I was avoiding subjects for long periods and that I should have given them more time.</li>
                <li>I was much more effective at studying for some subjects than others. It turns out I'm more effective at studying problem solving-based subjects rather than content-based ones. Who would have guessed?</li>
            </ol>

            <p>Overall, it's been so interesting seeing where my study time actually goes, and how I can maybe make some more informed choices in the future. Hopefully it will lead to a more informed and effective routine, that leaves me more time to do the things that I love.</p>
            <p>I have recently added user accounts, so I can share it with my friends, and sockets, so you can have multiple devices logged in and synced at the same time. Feel free to try it out!</p>

            <h1>What I learned</h1>
            <h2>Changing to TypeScript</h2>
            <p>This is the first project that I have had to convert from JavaScript to TypeScript, and it created a *lot* or re-organising. My website structure, which seemed pretty logical to me at the start, turned out to be exactly not what I wanted if I ever wanted to add any new features. Every time I changed something, it broke another completely unrelated part of the website. Talk about bad programming practice!</p>

            <h2>Fix your code before you change it</h2>
            <p>I decided that I had to fix my website before I could add anything new to it. This involved not only re-defining how I would save my user data, but also considering what values my data could take. For example, if the user is signed in, is there any data that I am guaranteed to be able to use? If so, why am I treating everything like an optional?</p>

            <h2>Using Git (properly)</h2>
            <p>Once I fixed the structure of my (badly written) website, I committed my changes to git. I felt relieved that no matter what changes I made in the future, I could do so knowing I could go back to a working version of the website without any trouble. This is the first time that I experienced firsthand the benefits of using Git as a checkpointing tool, rather than just a way to more efficiently store my files with GitHub.</p>

            <h2>Custom hooks</h2>
            <p>Lastly, I stared using custom hooks in React, as a necessity. I experimented with them earlier on in my React career, but I couldn't find a good use for them. It's interesting seeing how working on a concrete project provides opportunities for different techniques that you don't experience in shorter exercises.</p>

            <h1>Local setup</h1>
            <p>To set up and run this project locally, the GitHub repo can be found <a href="https://github.com/hugojjohnson/workaholic">here</a> and <a href="https://github.com/hugojjohnson/workaholic-backend">here</a>.</p>

            <ol>
                <li>Download or clone the repo onto your local machine</li>
                <li>Install <a href="https://nodejs.org/en/download/package-manager">NodeJS</a></li>
                <li>Set up a <a href="https://www.mongodb.com/products/platform/atlas-database">MongoDB Atlas</a> and save the login credentials in `.env`.</li>
            </ol>
        </div>
    },
    {
        url: "proyecto",
        title: "Proyecto",
        blurb: "Be mindful of your time.",
        cover: "/media/projects/proyecto.png",
        githubLink: "https://github.com/hugojjohnson/proyecto",
        tags: [
            "Python",
            "NodeJs",
            "React",
            "Tailwind"
        ],
        blog: <div><h1>Project Demo</h1>
            <a target="_blank" href="https://hugojjohnson.github.io/proyecto">Check it out!</a>

            <h1>Summary</h1>
            With a few of the projects I have been working on so far, I have noticed that JavaScript just doesn't have enough structure. I spent more hours than I want to admit trying to fix silly mistakes that I wouldn't make in a statically typed language like Java.

            For the backend, I tried using Python - specifically FastAPI and Beanie. I found the development process about as hard as I was expecting. While I appreciate having done it, I plan on sticking to TypeScript for the backend in the future.

            Proyecto is designed to help you be more mindful of your time. By establishing clear projects and goals, you can ensure that any progress you make towards a project that you are working on contributes to your overall aims. Feel free to try it out!

            <h1>Tools</h1>
            This app was developed with `Vite` using `TypeScript` and `FastAPI`, and is hosted with GitHub Pages and Heroku. A `MongoDB` database hosted on Atlas was connected to with the `Beanie` library.

            <h1>What I learned</h1>
            <h2>Types, types!</h2>
            What I expected from static typing was an increase in development speed - I wouldn't have to worry about accessing a field that doesn't exist, or forget to convert a string to an integer. What I wasn't expecting was how early on in the project I had to define my data types. Originally, my development process went as follows:

            <ol>
                <li>Create a user object with the bare minimum features.</li>
                <li>Realise I forgot to include a username.</li>
                <li>Search my \\*entire\\* application for any mention of user, and make sure it handles the username properly.</li>
                <li>Repeat steps 2-3 until running out of energy.</li>
            </ol>

            Now, with static typing:
            <ol>
                <li>Define the `user` interface</li>
                <li>Implement the interface every time I need to change the user.</li>
            </ol>

            While I was programming, this was a pain: code that I *knew* would work threw errors, and I had to think much more about exactly what my data types would look like. However towards the end of the project, I was grateful that I had such clear data structures.

            <h2>Consitent colour</h2>
            I picked a pink-to-indigo gradient very early on in the project, and tried to stick with it as I was developing the front end. I standardised input fields and definitely plan on making my own component library at some point.

            <h1>Local setup</h1>
            To set up and run this project locally, the GitHub repo can be found <a href="https://github.com/hugojjohnson/proyecto">here</a> and <a href="https://github.com/hugojjohnson/proyecto-backend">here</a>.

            1. Download or clone the repo onto your local machine

            2. Install <a href="https://nodejs.org/en/download/package-manager">NodeJS</a>

            3. Set up a <a href="https://www.mongodb.com/products/platform/atlas-database">MongoDB Atlas</a> and save the login credentials in `.env`.
        </div>
    },
    {
        url: "watersort-puzzle-solver",
        title: "Watersort Puzzle Solver",
        blurb: "Never get stuck again",
        cover: "/media/projects/watersort.png",
        githubLink: "https://github.com/hugojjohnson/watersort-solver",
        tags: [
            "Python",
            "NodeJs",
            "React",
            "Tailwind"
        ],
        blog: <div>
            <h1>Summary</h1>
            Water Sort is a popular mobile game. You can play it online <a href="">here</a>(https: //www.safekidgames.com/water-sort/).
            This program was designed to, after giving the colours and positions for each vial, give the correct series of steps to
            solve the level. It is especially useful when the puzzle has above ten vials, as it can sometimes become difficult to
            solve otherwise.


            <h1>Tools</h1>
            This app was developed with `NodeJS` and `React`. It was bootstrapped with Create React App and uses Tailwind for styles.
            The solving algorithm was originally written in Python and copied across to Javascript.

            <h1>Local setup</h1>
            To set up and run this project locally, there are two options:
            1. The python script is attached. Open 'main.py', replace the variable 'example_board' with an array of the board, and
            run the script.

            2. A web version (demonstration found <a href="https://hugojjohnson.github.io/watersort-solver/">here</a>) was developed with
            NodeJS.
        </div>
    },
    {
        url: "linear-regression-library",
        title: "My linear regression library",
        blurb: "Like TensorFlow, but better.",
        cover: "/media/projects/linear-regression.png",
        githubLink: "https://github.com",
        tags: [
            "Python",
            "PyTorch",
            "NumPy"
        ],
        blog: <div>Here is my implementation of a linear regression algorithm.</div>
    },
    {
        url: "invoicing-system",
        title: "My tutoring invoicing system",
        blurb: "Make professional invoices, automatically, for free.",
        cover: "/media/projects/tutoring-invoice.png",
        githubLink: "https://github.com",
        tags: [
            "React",
            "Tailwind"
        ],
        blog: <div>
            <h1>Project Demo</h1>
            <a target="_blank" href="https://hugojjohnson.github.io/invoice-system-demo/">Check it out!</a>

            <h1>Summary</h1>
            Since 2021, I have been tutoring primary and high school subjects in Physics, Chemistry, and Mathematics. I eventually needed to begin sending my clients invoices at regular intervals with a receipt of my services, including the date, duration and how much I have charged them. This web app was designed to automate the process of recording lessons and sending invoices.

            <h1>Tools</h1>
            This app was developed with `NodeJS`, `React`, `Tailwind CSS` and is hosted on a Heroku server.
            Like many of my other projects, this project was originally implemented in Python with a command line interface, before being redesigned to work on the web.

            <h2>What I learned</h2>
            <h2>JSON Schema</h2>
            I wanted a way to easily validate the data I passed to my server so that I could verify that each key entry was included. At first I considered writing validation software myself, however I hoped that someone had already done this before. And I'm glad I did - the extensive documentation of JSON Schema and the amount of validators already available was plenty.

            <h2>Heroku Buildpacks</h2>
            The local version of the app includes the ability to generate a PDF invoice that is ready to be sent out - however, when I deployed the app to Heroku, this functionality no longer worked because pdflatex was not installed. I discovered that I could use buildpacks - Heroku's package manager - to load the software I needed. While I haven't made this work yet, I'm on my way to understanding how I can upload my own buildpacks to my server.

            <h2>Code reusability</h2>
            At many stages in this project I realised that I had already designed something very similar before, which let me reuse existing features either through inheritance or by abstracting it into a function.

            <h1>Local setup</h1>
            To set up and run this project locally, the Github repo can be found <a href="https:github.com/hugojjohnson/invoice-system-demo">here</a>.

            1. Download or clone the repo onto your local machine

            2. In one terminal, type `cd backend; npm install; npm run start` to install the backend dependencies and start the server.

            3. In a different terminal, type `cd frontend; npm install; npm run start` to install the frontend dependencies and start the front end server.

            (Note that this requires having <a href="https://nodejs.org/en">NodeJS</a> installed.)
        </div>
    },
    {
        url: "exercise-logger-app",
        title: "Exercise Logger Mobile App",
        blurb: "Transferring skills to over platforms",
        cover: "/media/projects/pushups.png",
        githubLink: "https://github.com/hugojjohnson/exercise-logger-app",
        tags: [
            "Github",
            "React",
            "Tailwind"
        ],
        blog: <div>
            <h1>Project Demo</h1>
            Unfortunately, this app only works on mobile devices. The app can be demoed by downloading the Expo Go app on the App Store or Google Play Store - for more information, please see the <a href="https://github.com/hugojjohnson/exercise-logger-app">GitHub</a>.

            <h1>Summary</h1>
            Mobile Apps are used everywhere. From Instagram to Crossy Road, these apps are used by everyone, all the time, often non-stop... I just had to learn how to make one! Fortunately, I had already learned the basics of React, and so React Native seemed right down my alley. I thought I would make an app to encourage myself to exercise more, and so I set about making 'the Duolingo of Exercise' 😁.

            <h1>Tools</h1>
            This app was developed with `Expo`, `React Native` and `NativeWind`, and is hosted with Expo on Expo Go. The <a href="https://docs.expo.dev/versions/latest/sdk/securestore/">expo-secure-store</a>, <a href="https://docs.expo.dev/versions/latest/sdk/status-bar/">expo-status-bar</a> and <a href="https://docs.expo.dev/versions/latest/sdk/date-time-picker/">community datetimepicker</a> libraries, among others, were also used.

            <h1>What I learned</h1>
            <h2>React Native</h2>
            A long, long time ago, before React Native, companies used to employ three teams of developers - a Web Dev team to develop the Website, an IOS team who would reproduce the product with Swift, and an Android team who would reproduce it with Kotlin. These teams of developers would struggle to work together to produce a coherent experience for the end user, sometimes effectively, sometimes not. Today, React Native lets programmers use the same skill set to write all three different types of applications. React Native's philosophy is that with enough APIs, any app can be generalised across platforms. I have definitely found that to be the case - the huge amount of open-source libraries available has been instrumental in cutting down the time developing features that I would otherwise spend a *veeery* long time Googling for.

            <h1>Local setup</h1>
            To set up and run this project locally, the GitHub repo can be found <a href="https://github.com/hugojjohnson/exercise-logger-app">here</a>.

            1. Download or clone the repo onto your local machine

            2. Install <a href="https://reactnative.dev/">React Native</a>

            3. Follow the instructions to download `Expo Go`.

            4. Type `npm expo start` and you're all set!





        </div>
    },
    {
        url: "dsa-notes",
        title: "Interactive DSA Learning Platform",
        blurb: "Making DSA more accessible for everyone",
        cover: "/media/projects/dsa-notes.png",
        githubLink: "https://github.com/hugojjohnson/dsa-notes",
        tags: [
            "React",
            "Tailwind"
        ],
        blog: <div className="markdown">
            <h1>Building an Interactive Data Structures and Algorithms Learning Platform</h1>

            <h2>Why I Created This Platform</h2>
            <p>Data Structures and Algorithms (DSA) is one of the most challenging courses for many students. To help my classmates grasp the fundamentals more effectively, I decided to build a website that offers dynamically generated questions, making every practice session unique.</p>

            <h2>How It Works</h2>
            <p>The platform generates questions using code, ensuring that the same question rarely appears twice. This approach helps students develop problem-solving skills rather than memorizing answers. Users can attempt problems on various topics, receive instant feedback, and track their progress over time.</p>

            <h2>Tech Stack</h2>
            <ul>
                <li><strong>TypeScript</strong> - for strong typing and maintainability.</li>
                <li><strong>React</strong> - for building a fast and interactive UI.</li>
                <li><strong>Tailwind CSS</strong> - for sleek, responsive styling.</li>
            </ul>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Dynamic Question Generation</strong> - No two practice sessions are the same.</li>
                <li><strong>Instant Feedback</strong> - Helps students learn from mistakes in real-time.</li>
                <li><strong>Progress Tracking</strong> - Allows users to monitor their improvement.</li>
                <li><strong>Clean and Minimalist UI</strong> - Built with Tailwind CSS for a smooth experience.</li>
            </ul>

            <h2>What’s Next?</h2>
            <p>I plan to add more question categories, implement a leaderboard system, and introduce AI-powered hints to guide students when they’re stuck.</p>

            <h2>Try It Out!</h2>
            <p>If you’re struggling with DSA or just want to sharpen your problem-solving skills, <a href="https://hugojjohnson.github.io/dsa-notes/">check out the platform.</a> Let’s make learning DSA more engaging and accessible for everyone!</p>
        </div>
    },
    {
        url: "wind-turbine-neural-network",
        title: "Predicting Wind Turbine Blade Load with Neural Networks",
        blurb: "",
        cover: "/media/projects/wind-turbine.png",
        githubLink: "https://github.com/hugojjohnson/02456-deep-learning-project",
        tags: [
            "PyTorch",
            "Python",
            "NumPy"
        ],
        blog: <div className="markdown">
            <h2>The Problem</h2>
            <p>Accurately predicting the load on wind turbine blades is crucial for optimizing performance and preventing mechanical failures. While physics-based simulations exist to estimate these loads, they are computationally expensive and cannot provide real-time predictions. This limitation poses challenges for adaptive control and real-time decision-making.</p>
            <p>To overcome this, our team of four designed a neural network model that learns the complex relationships between wind speed, wind direction, blade position, and rotation. By bypassing the need for simulations, our model provides an efficient and real-time solution for predicting turbine blade loads.</p>

            <h2>Radial Basis Function</h2>
            <p>As part of our project, we were tasked with exploring the effectiveness of the Radial Basis Function (RBF) network for this problem. RBF networks leverage localized activation functions to model nonlinear relationships, making them a strong candidate for load prediction.</p>
            <p>Our findings were surprising: despite their relatively simple structure, RBF networks outperformed large multilayer perceptrons (MLPs) in terms of accuracy and training efficiency. The localized nature of RBF activation functions allowed for better handling of dynamic wind conditions compared to traditional MLP architectures.</p>
            <p>However, our experiments also revealed that while RBF networks were highly effective, they were still outperformed by transformer-based models. The attention mechanisms in transformers allowed them to capture long-range dependencies in the input data, leading to superior performance in predicting turbine blade loads.</p>

            <h2>Conclusion</h2>
            <p>Our research demonstrated that RBF networks are a powerful tool for real-time load prediction in wind turbines, surpassing traditional MLP architectures. However, with advancements in deep learning, transformer models offer even greater accuracy and robustness for this task. As computational power continues to improve, integrating transformer-based approaches into wind turbine control systems could significantly enhance efficiency and reliability.</p>
            <p className="mt-4">You can read our paper <a href="/media/documents/DeepLearning_Report.pdf" target="blank">here</a>.</p>
        </div>
    },
    {
        url: "mnist-predictions",
        title: "Building a Multilayer Perceptron for MNIST",
        blurb: "",
        cover: "/media/projects/mnist.png",
        githubLink: "https://github.com/hugojjohnson/ml-template",
        tags: [
            "PyTorch",
            "Python"
        ],
        blog: <div className="markdown">
            <h1>Building a Multilayer Perceptron to Classify MNIST Digits</h1>

            <p>Artificial intelligence is an exciting field, and I decided to start my journey by building a simple yet powerful <strong>Multilayer Perceptron (MLP)</strong> to recognize handwritten digits from the MNIST dataset.</p>

            <h2>What is the MNIST Dataset?</h2>
            <p>The MNIST dataset is a collection of 28x28 grayscale images of handwritten digits (0-9). It is widely used as a benchmark in machine learning and deep learning projects.</p>

            <h2>Designing the MLP Architecture</h2>
            <p>My MLP consists of the following layers:</p>
            <ul>
                <li>An input layer with 784 neurons (one for each pixel in the 28x28 image).</li>
                <li>One or more hidden layers with <code>ReLU</code> activation functions.</li>
                <li>An output layer with 10 neurons (one for each digit class) using the <code>softmax</code> activation.</li>
            </ul>

            <h2>Implementation</h2>
            <p>I implemented the model using Python and PyTorch. Below is a simplified version of my MLP model:</p>
            <SyntaxHighlighter language="python" style={docco}>
                {`class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__() # type: ignore
        self.fc1 = nn.Linear(28 * 28, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 10)
        self.relu = nn.ReLU()
        self.softmax = nn.Softmax(dim=1)

    def forward(self, x: torch.Tensor):
        x = x.view(-1, 28*28) # Flatten the input image (28x28 -> 784)
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.fc3(x)
        return self.softmax(x)

model = SimpleNN()
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(model.parameters(), lr=0.01)`}
            </SyntaxHighlighter>

            <h2>Training the Model</h2>
            <p>I trained the model using the MNIST dataset:</p>

            <SyntaxHighlighter language="javascript" style={docco}>
                {`epochs = 5
for epoch in range(epochs):
    model.train()
    running_loss = 0.0
    correct = 0
    total = 0

    for images, labels in train:
        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, torch.tensor(labels, dtype=torch.long))
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

        _, predicted = torch.max(outputs, 1)  # Get the index of the max output (predicted class)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()  # Count correct predictions

    print(f"Epoch [{epoch+1}/{epochs}], Loss: {running_loss/len(train):.4f}, Accuracy: {100*correct/total:.2f}%")`}
            </SyntaxHighlighter>

            <h2>Results and Insights</h2>
            <p>After training for 10 epochs, my model achieved an accuracy of around 98% on the test dataset. This result shows that even a simple MLP can effectively classify handwritten digits.</p>

            <h2>Next Steps</h2>
            <p>To further improve performance, I plan to:</p>
            <ul>
                <li>Experiment with different architectures and deeper networks.</li>
                <li>Use convolutional layers (CNNs) for better feature extraction.</li>
                <li>Implement techniques like dropout to prevent overfitting.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Building this MLP was a great learning experience in artificial intelligence. It provided me with a strong foundation in neural networks and deep learning. If you're also starting out, I highly recommend working with MNIST as a first project!</p>
        </div>
    },
    {
        url: "hardware-accelerator",
        title: "Designing a hardware accelerator in Chisel",
        blurb: "",
        cover: "/media/projects/chisel.webp",
        githubLink: "https://github.com/hugojjohnson/ml-template",
        tags: [
            "C",
            "Python"
        ],
        blog: <div className="markdown">
            <h1>Accelerating Algorithms with Hardware: Our Team's Experience</h1>

            <p>In this project, our team of four engineers took on the challenge of accelerating an algorithm we had developed in a previous project. We were able to significantly speed up the algorithm's execution by designing a custom hardware accelerator using Chisel.</p>

            <h2>What is Chisel?</h2>
            <p>Chisel (Constructing Hardware in a Scala Embedded Language) is a hardware construction language created by <a href="https://www.eecs.berkeley.edu/people/faculty/jiayao-xu" target="_blank">Professor Yu-Hsin Chen</a> and developed at the <a href="https://eecs.berkeley.edu/" target="_blank">University of California, Berkeley</a>. It provides an advanced way to design hardware circuits and is based on the Scala programming language. With its powerful abstraction features, Chisel allows designers to create complex digital systems efficiently.</p>

            <h2>Our Approach to Acceleration</h2>
            <p>The core idea of our project was to design a hardware accelerator based on a Finite State Machine with Data-path (FSMD) model. The FSMD model is widely used in digital system design because it efficiently controls the flow of data and computation through a system. This approach was ideal for our algorithm, which had certain repetitive patterns that could be effectively offloaded to hardware.</p>

            <h2>Designing the FSMD Model</h2>
            <p>The FSMD model we created was designed to take advantage of parallelism in the algorithm. This allowed us to offload certain computationally intensive tasks from the software to dedicated hardware units. By doing so, we could reduce the overall execution time of the algorithm significantly.</p>
            <ul>
                <li>We used Chisel to design the FSMD model, which provided us with flexibility and abstraction.</li>
                <li>The accelerator was able to execute the algorithm in parallel, reducing the time taken for computation.</li>
                <li>The hardware design was synthesized and tested on an FPGA to verify its functionality and performance.</li>
            </ul>

            <h2>Results: A 6x Speedup</h2>
            <p>After implementing and testing our hardware accelerator, we observed a remarkable improvement in performance. Our accelerator resulted in a <strong>6x speedup</strong> over the original software implementation of the algorithm. This was a significant achievement, as it demonstrated the power of custom hardware acceleration for improving the performance of complex algorithms.</p>

            <h2>Conclusion</h2>
            <p>Designing a hardware accelerator for algorithm speedup was a challenging yet rewarding experience. It not only gave us valuable insights into hardware design and optimization but also showed how tools like Chisel can be used to build efficient hardware solutions. We are excited about the potential of this approach and look forward to applying it to other projects in the future.</p>


            <p className="mt-4">We wrote two papers on this project: you can read them <a href="/media/documents/Computer_Systems_02132_Group_70_Assignment_3.pdf" target="blank">here</a> and <a href="/media/documents/Computer_Systems_02132_Group_37_Assignment_2.pdf" target="blank">here</a>.</p>
        </div>
    },
    {
        url: "cell-counting",
        title: "Optimizing Cell Counting in Images",
        blurb: "",
        cover: "/media/projects/cells-1.webp",
        githubLink: "https://github.com/hugojjohnson/ml-template",
        tags: [
            "C",
            "Python"
        ],
        blog: <div className="markdown">
            <header>
                <h1>Optimizing Cell Counting in Images: Our Approach</h1>
                <p>In this project, we were tasked with designing a highly accurate and efficient algorithm to count the number of cells in an image. My team and I worked together to develop the most accurate algorithm in our course, while also ensuring that it was among the fastest. Let's dive into the details of our approach!</p>
            </header>

            <section>
                <h2>The Challenge</h2>
                <p>The task was to create an algorithm capable of counting cells in an image. We were given an overview of an erosion algorithm that could work well, and were told to expand on it in any creative ways we can. Given the freedom to design the algorithm as complex as we wanted, the challenge was twofold: achieving high accuracy and ensuring the algorithm ran efficiently.</p>
            </section>

            <section>
                <h2>Our Approach</h2>
                <p>To meet the challenge, we carefully considered both the accuracy and speed of our algorithm. The approach we chose was based on preprocessing the image with a Gaussian convolution filter followed by an erosion algorithm. Here's a breakdown of our method:</p>
                <ul>
                    <li><strong>Gaussian Convolution for Preprocessing:</strong> We started by applying a Gaussian convolution to the image to reduce noise and smooth out irregularities. This step helped in enhancing the accuracy of the cell counting process by ensuring that small details that could be mistaken for cells were smoothed out, leaving only the most relevant features.</li>
                    <li><strong>Erosion for Image Refinement:</strong> After the image was smoothed, we used an erosion algorithm. This morphological operation helped to remove small, non-cell structures and better define the boundaries of the cells, making the detection process more reliable. Erosion works by shrinking the bright areas in the image, which in turn made cell contours clearer.</li>
                </ul>
            </section>

            <section>
                <h2>Why We Chose This Approach</h2>
                <p>We were one of the few teams to implement this preprocessing step, and it made a significant difference in both accuracy and speed. Here's why:</p>
                <ul>
                    <li><strong>Accuracy:</strong> The Gaussian convolution filtered out noise, ensuring that our algorithm counted only the cells and not irrelevant small features in the image. The erosion process further enhanced the accuracy by reducing false positives and defining clear cell boundaries.</li>
                    <li><strong>Speed:</strong> While preprocessing with a Gaussian filter and performing erosion added complexity to the pipeline, it ultimately made the counting step faster. With more distinct cell boundaries, the final counting algorithm was able to quickly and reliably identify the cells without additional computational overhead.</li>
                </ul>
            </section>

            <section>
                <h2>Results and Conclusion</h2>
                <p>Our team’s algorithm was not only one of the most accurate in the course but also one of the fastest. The combination of Gaussian filtering and erosion worked wonders, and our final implementation was able to count cells in an image efficiently and precisely.</p>
                <p>We were proud of the solution we developed, and it was a great experience working collaboratively to solve such a challenging problem. The key takeaway from this project was that balancing complexity and optimization is crucial when tackling computational problems, especially in image processing tasks.</p>
                <p>For more information about image processing algorithms, you can explore the following resources:</p>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Convolution_(image_processing)" target="_blank">Convolution in Image Processing</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Morphological_image_processing" target="_blank">Morphological Image Processing</a></li>
                    <li><a href="https://www.tutorialspoint.com/dip/morphological_operations.htm" target="_blank">Morphological Operations Tutorial</a></li>
                </ul>
            </section>

            <p className="mt-4">You can read our paper <a href="/media/documents/Computer_Systems_02132_Group_37_Report.pdf" target="blank">here</a>.</p>
        </div>
    }
]

export default projects