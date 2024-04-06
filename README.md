# Portfolio Site Template 🚀

[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)

This portfolio site template can be used to showcase your past projects, career history, and skill sets. The example project is published with [GitHub Pages](https://yujisatojr.github.io/react-portfolio-template/).

This template is free to use, and no attribution is required. You can fork or download this repository to customize it for your own use. Please don't forget to leave a ⭐ if you like this portfolio!

![Demo](https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/portfolio-screenshot.png)

## Features
* Open source (no attribution required)
* Multi-page layout
* Responsive design
* Simple & modern technologies (React, JavaScript, and SCSS)

## Setup

This application requires [Node.js](https://nodejs.org/). To check if you have Node.js installed, run:

    ```bash
    node -v
    ```

1. In the project directory, run the following code to install dependencies:

    ```bash
    npm install
    ```

2. Run the app in the development mode by using:

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    Once you complete the above process, navigate to `/src/components` directory. Inside of it, you will find all the pages and components used within the template. You can then modify texts, pictures, and other information to your own.

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