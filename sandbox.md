
# Project Demo
Unfortunately, this app only works on mobile devices. The app can be demoed by downloading the Expo Go app on the App Store or Google Play Store - for more information, please see the [GitHub](https://github.com/hugojjohnson/exercise-logger-app).

# Summary
Mobile Apps are used everywhere. From Instagram to Crossy Road, these apps are used by everyone, all the time, often non-stop... I just had to learn how to make one! Fortunately, I had already learned the basics of React, and so React Native seemed right down my alley. I thought I would make an app to encourage myself to exercise more, and so I set about making 'the Duolingo of Exercise' 😁.

# Tools
This app was developed with `Expo`, `React Native` and `NativeWind`, and is hosted with Expo on Expo Go. The [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/), [expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/) and [community datetimepicker](https://docs.expo.dev/versions/latest/sdk/date-time-picker/) libraries, among others, were also used.

# What I learned
## One of my biggest projects yet
This project was definitely the most ambitious project I have done until this point - I went from making static Web Apps to designing a user management system that managed both manual password authentication and signing in with Google, and designing a database that could efficiently hold the bespoke sets of data that I needed, while leaving room for my needs to change in the future. 


## Clerk Authentication


## Google Authentication


## Dedicated Database Servers
About halfway through the project I discovered that I had to set up some sort of database system - reading and writing to JSON files was tedious and often broke. I decided on using MongoDB and I was confused as to why I was being encouraged so strongly to use a separate server solely for managing and storing data. I thought, "I already have a front end and a back end server, why do I need a third?!"

## SQL vs Non-Relational Databases



A long, long time ago, before React Native, companies used to employ three teams of developers - a Web Dev team to develop the Website, an IOS team who would reproduce the product with Swift, and an Android team who would reproduce it with Kotlin. These teams of developers would struggle to work together to produce a coherent experience for the end user, sometimes effectively, sometimes not. Today, React Native lets programmers use the same skill set to write all three different types of applications. React Native's philosophy is that with enough APIs, any app can be generalised across platforms. I have definitely found that to be the case - the huge amount of open-source libraries available has been instrumental in cutting down the time developing features that I would otherwise spend a *veeery* long time Googling for.

# Local setup
To set up and run this project locally, the GitHub repo can be found [here](https://github.com/hugojjohnson/exercise-logger-app).

1. Download or clone the repo onto your local machine

2. Install [React Native](https://reactnative.dev/)

3. Follow the instructions to download `Expo Go`.

4. Type `npm expo start` and you're all set!




