# Belgium Campus Community Portal

A dynamic community portal designed for Belgium Campus, showcasing upcoming events and enabling users to get in touch by sending messages via a contact form. Built using Node.js, Express, and EJS, this web application demonstrates dynamic rendering, structured routing, and modular design.

## Project Overview

Course: WPR381  
Project Name: WPR381 Group Project  
Group Number: V-AM No. 15

Team Members:
- Joshua Ramalho – 601535  
- Marco Jacobs – 600266  
- Reinhardt van Vollenstee – 578095  
- Thian du Plessis – 601125  

This project uses the provided boilerplate to build a clean, fully functional website with dynamic routing and rendering.

# Technologies Used

- [Node.js](https://nodejs.org/) (v18+)
- [Express.js](https://expressjs.com/) (v4+)
- [EJS](https://ejs.co/) (v3+)
- CSS / Bootstrap 5 (optional)
- [Nodemon](https://www.npmjs.com/package/nodemon) for live development
- Git & GitHub for collaboration

# Folder Structure
community-portal-prefilled/
├── Data/
│   ├── aboutData.js
│   ├── contactSubmissions.js
│   ├── eventsData.js
├── node_modules/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── Background/
│   │   │   ├── CampusLogo.png
│   │   │   └── CampusLogoBig.png
│   │   ├── event_images/
│   │   │   ├── alumni_networking_night.jpg
│   │   │   ├── career_fair.jpg
│   │   │   ├── charity_fun_run.jpg
│   │   │   ├── community_cleanup.jpg
│   │   │   ├── hackathon.jpg
│   │   │   ├── international_food_festival.jpg
│   │   │   ├── robotics_workshop.jpg
│   │   │   ├── startup_pitch_competition.jpg
│   │   │   └── winter_science_symposium.jpg
│   │   ├── team/
│   │   │   ├── 1.png
│   │   │   ├── 2.png
│   │   │   ├── 3.png
│   │   │   ├── 4.png
│   │   │   └── Team-Photos-Here.txt
├── routes/
│   └── pageRoutes.js
├── views/
│   ├── pages/
│   │   ├── 404.ejs
│   │   ├── about.ejs
│   │   ├── contact.ejs
│   │   ├── events.ejs
│   │   ├── home.ejs
│   │   └── thankyou.ejs
│   ├── partials/
│   │   ├── footer.ejs
│   │   └── header.ejs
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md

## Setup Instructions
1. Install dependencies
    - npm install

2. Start development server
    - npm run dev

3. View the website
    - Open your browser and go to: http://localhost:3000

## Features
 Home Page: Welcome message with placeholder for upcoming events
 About Page: Displays info about the team from an in-memory array (aboutData.js)
 Events Page: Dynamically displays event details (title, date, location, image) from eventsData.js
 Contact Page: Allows users to submit a message; stores to contactSubmissions.js
 Thank You Page: Confirmation screen after submitting contact form
 404 Page: Custom page for undefined routes
 Dynamic Templating: Uses EJS with reusable partials (header, footer)
 Styling: Styled with style.css; image assets served from /public/images/

## Screenshots
I will add screenshots here, but first we need to finish adding the pictures to the actual website we want there.

## Reflection
This project helped us strengthen our skills in Express routing, EJS templating, and dynamic content rendering. We also improved collaboration via Git and applied key backend principles.

