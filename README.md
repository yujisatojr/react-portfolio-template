# Developer Portfolio Template 🚀

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

This portfolio template is used to showcase your past projects, career history, skill sets, and beyond.

View the [Demo](https://yujisatojr.github.io/react-portfolio-template/).

**This template is free to use, and no attribution is required**. You can fork or download this repository to customize it for your own use. Please don't forget to leave a ⭐ if you like this portfolio!

![Demo](https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/portfolio-screenshot.png)

## Features
✅ Open source (free, no attribution is required)  
✅ Multi-page layout  
✅ Responsive design & mobile friednly  
✅ Simple & modern technologies (React, JavaScript, and SCSS)  

## Quick Setup

1. This application requires [Node.js](https://nodejs.org/). To check if you have Node.js installed, run:

    ```bash
    node -v
    ```

2. In the project directory, run the following code to install dependencies:

    ```bash
    npm install
    ```

3. Run the app in the development mode by using:

    ```bash
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

5. Once you complete the above process, navigate to `/src/components` directory. You will find all the pages and components used within the template. You can modify texts, pictures, and other information to your own.

The page will reload if you make edits. You will also see any lint errors in the console.

## Deployment

You can choose your favorite service (e.g., [Netlify](https://www.netlify.com/), [Render](https://render.com/), [Heroku](https://www.heroku.com/)) for deployment. One of the easiest ways to host this portfolio is using GitHub pages. Follow the instructions below to complete the production deploy.

1. Set Up GitHub Repository

    Navigate to GitHub and create a new repository for the portfolio app.

2. Configure `package.json`

    In your `package.json` file, edit the following properties:

    ```json
    {
        "homepage": "https://yourusername.github.io/your-repo-name",
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            ...
        }
    }
    ```

    Replace `yourusername` with your GitHub username and `your-repo-name` with the name of your GitHub repository.

3. Deploy to GitHub Pages

    Now you're ready to deploy your app. Run the following command:

    ```bash
    npm run deploy
    ```

4. Access Your Deployed App

    After successfully deploying your app, you can access it at `https://yourusername.github.io/your-repo-name`.