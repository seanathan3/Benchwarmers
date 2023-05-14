# Benchwarmers

![hero-section-3](https://github.com/seanathan3/Benchwarmers/assets/111205278/c4d7e6c3-3122-4af6-a6ef-d0fd037c7da5)

[Live Link!](https://benchwarmers.onrender.com)

## Background and Overview
Despite the world becoming more connected by the minute, why is it so hard to find people to play our favorite pickup sports with? Enter Benchwarmers. Benchwarmers is an application designed for people who want to play pickup sports in groups but don't have people to play with. Users can create and join 'games' on the application to play their favorite sports and make new friends in the process. Benchwarmers aims to be a simplistic and modern website that allows users to easily access any game and its information in just a couple of clicks.

Upon logging in, users have access to games. Users can create games, fill in game details (date, location, sport, etc...), and interact with existing games. A Google Maps API will be used to display the location of games, which users can select to view details and join the game.


## Technologies Used
Benchwarmers is implemented with the MERN stack, and utilizes the following technologies:

+ React
+ Redux
+ Express.js
+ Node.js
+ MongoDB
+ Mongoose
+ Google Maps API
+ JavaScript
+ HTML
+ CSS

## Features

### Games
Users have the ability to join open games created by other users if there is space available. They are able to see all upcoming games when they click on "Join Game" where they will see a list of upcoming games as well as where they are located on the map. Users can also sort through upcoming games via sport or skill level. They also have they option to create their own game to host. In their user profile, they will see a component holding all of their upcoming hosted games where they can also edit, or cancel the games.
![ezgif com-video-to-gif](https://github.com/seanathan3/Benchwarmers/assets/116519976/92f7c276-4216-4a18-b859-9c83b7b891b2)

### Google Maps API
Displays an interactive map and can be customized to hold project data.
One implementation of the Google Maps API was to retrieve a location from users when they create a game. Below is a screenshot of code that allowed us to grab the geolocation of the place they select. Then this information had to be passed up to the parent component, GamesForm, so the submission could be completed with the location of the game.
![Google-Maps-Code-Snippet](https://user-images.githubusercontent.com/121701827/233461863-3475b981-4331-4c06-95fc-fa6ae1cc6ab0.PNG)

### User Profile
Users can sign up and create new accounts as well as update, and delete their accounts as well. When their account is updated or deleted, all impacted games will be updated as well.


![ezgif com-video-to-gif (1)](https://github.com/seanathan3/Benchwarmers/assets/116519976/488554a8-0f90-40fe-80c0-bcdaa04babae)

## Team Members
* Sean Abbas - Team Lead
* Sabrina Desmond - Frontend Lead
* Ariel Baez - Backend Lead
* Charles Cruse - Flex

### Work Breakdown

#### Sunday, April 16
* Sean Abbas - Website Layout Design
* Sabrina Desmond - Website Layout Design
* Ariel Baez - User Authentication, Database Creation
* Charles Cruse - Base Layout Creation

#### Monday, April 17
* Sean Abbas - Frontend Auth Functionality
* Sabrina Desmond - Modal Design & Implementation
* Ariel Baez - Backend functionality for User Profile
* Charles Cruse - Styling for Login/Signup Modals

#### Tuesday, April 18
* Sean Abbas - Styling for User profile
* Sabrina Desmond - Frontend User Profile functionality
* Ariel Baez - Backend functionality for Games
* Charles Cruse - Frontend Games Functionality

#### Wednesday, April 19
* Sean Abbas - Styling for Splash
* Sabrina Desmond - Styling for Games show page 
* Ariel Baez - Styling for Games index
* Charles Cruse - Google Maps setup

#### Thursday, April 20
* Sean Abbas - Setting up search
* Sabrina Desmond - Final application styling
* Ariel Baez - Final application styling
* Charles Cruse - Google maps functionality
