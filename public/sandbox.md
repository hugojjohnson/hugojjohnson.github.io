
# Project Demo
[Check it out!](https://hugojjohnson.github.io/invoice-system-demo/)

# Summary
Since 2021, I have been tutoring primary and high school subjects in Physics, Chemistry, and Mathematics. I eventually needed to begin sending my clients invoices at regular intervals with a receipt of my services, including the date, duration and how much I have charged them. This web app was designed to automate the process of recording lessons and sending invoices.

# Tools
This app was developed with `NodeJS`, `React`, `Tailwind CSS` and is hosted on a Heroku server.
Like many of my other projects, this project was originally implemented in Python with a command line interface, before being redesigned to work on the web.

## What I learned
### JSON Schema
I wanted a way to easily validate the data I passed to my server so that I could verify that each key entry was included. At first I considered writing validation software myself, however I hoped that someone had already done this before. And I'm glad I did - the extensive documentation of JSON Schema and the amount of validators already available was plenty. 

### Heroku Buildpacks
The local version of the app includes the ability to generate a PDF invoice that is ready to be sent out - however, when I deployed the app to Heroku, this functionality no longer worked because pdflatex was not installed. I discovered that I could use buildpacks - Heroku's package manager - to load the software I needed. While I haven't made this work yet, I'm on my way to understanding how I can upload my own buildpacks to my server.

### Code reusability
At many stages in this project I realised that I had already designed something very similar before, which let me reuse existing features either through inheritance or by abstracting it into a function.

# Local setup
To set up and run this project locally, the Github repo can be found [here](https://github.com/hugojjohnson/invoice-system-demo).

1. Download or clone the repo onto your local machine

2. In one terminal, type `cd backend; npm install; npm run start` to install the backend dependencies and start the server.

3. In a different terminal, type `cd frontend; npm install; npm run start` to install the frontend dependencies and start the front end server.

(Note that this requires having [NodeJS](https://nodejs.org/en) installed.)




