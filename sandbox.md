# Project Demo
[Check it out!](https://hugojjohnson.github.com/proyecto)

# Summary
With a few of the projects I have been working on so far, I have noticed that JavaScript just doesn't have enough structure. I spent more hours than I want to admit trying to fix silly mistakes that I wouldn't make in a statically typed language like Java.

For the backend, I tried using Python - specifically FastAPI and Beanie. I found the development process about as hard as I was expecting. While I appreciate having done it, I plan on sticking to TypeScript for the backend in the future.

Proyecto is designed to help you be more mindful of your time. By establishing clear projects and goals, you can ensure that any progress you make towards a project that you are working on contributes to your overall aims. Feel free to try it out!

# Tools
This app was developed with `Vite` using `TypeScript` and `FastAPI`, and is hosted with GitHub Pages and Heroku. A `MongoDB` database hosted on Atlas was connected to with the `Beanie` library.

# What I learned
## Types, types!
What I expected from static typing was an increase in development speed - I wouldn't have to worry about accessing a field that doesn't exist, or forget to convert a string to an integer. What I wasn't expecting was how early on in the project I had to define my data types. Originally, my development process went as follows:

<ol style="list-style-type: decimal; list-style-position: inside; margin-top: 15px; margin-bottom: 15px;">
<li>Create a user object with the bare minimum features.</li>
<li>Realise I forgot to include a username.</li>
<li>Search my \*entire\* application for any mention of user, and make sure it handles the username properly.</li>
<li>Repeat steps 2-3 until running out of energy.</li>

</ol>

Now, with static typing:
<ol style="list-style-type: decimal; list-style-position: inside; margin-top: 15px; margin-bottom: 15px;">
<li>Define the `user` interface</li>
<li>Implement the interface every time I need to change the user.</li>
</ol>

While I was programming, this was a pain: code that I *knew* would work threw errors, and I had to think much more about exactly what my data types would look like. However towards the end of the project, I was grateful that I had such clear data structures.

## Consitent colour
I picked a pink-to-indigo gradient very early on in the project, and tried to stick with it as I was developing the front end. I standardised input fields and definitely plan on making my own component library at some point.

# Local setup
To set up and run this project locally, the GitHub repo can be found [here](https://github.com/hugojjohnson/proyecto) and [here](https://github.com/hugojjohnson/proyecto-backend).

1. Download or clone the repo onto your local machine

2. Install [NodeJS](https://nodejs.org/en/download/package-manager)

3. Set up a [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) and save the login credentials in `.env`.




