# Project Overview

This project is a responsive developer portfolio template built with React, TypeScript, and SCSS. It aims to provide a customizable layout for showcasing past projects, career history, and skill sets.

**Key Technologies:**

- **Frontend Framework:** React
- **Language:** TypeScript
- **Styling:** SCSS (Sass)
- **UI Components:** Material-UI (`@mui/material`), Emotion (`@emotion/react`, `@emotion/styled`)
- **Icons:** Font Awesome (`@fortawesome/react-fontawesome`)
- **Animations/Effects:** `react-vertical-timeline-component`
- **Build Tool:** Create React App (`react-scripts`)

**Features:**

- Open source and free to use.
- Responsive design and mobile-friendly.
- Supports both dark and light modes.
- Highly customizable multi-component layout.

# Building and Running

This project uses `npm` for package management and script execution.

## Installation

To install the project dependencies, run:

```bash
npm install
```

<h2>Development Server</h2>

To start the development server and view the app in your browser (usually at `http://localhost:3000`), run:

```bash
npm run dev
```

The page will reload if you make edits. You will also see any lint errors in the console.

<h2>Building for Production</h2>

To build the application for production to the `build` folder, run:

```bash
npm run build
```

This command optimizes the build for the best performance.

<h2>Deployment</h2>

The project can be deployed to various services. For deployment to GitHub Pages, the following scripts are available after configuring the `homepage` and `scripts` in `package.json` as described in the `README.md`:

```bash
npm run predeploy # Builds the app for deployment
npm run deploy    # Deploys the built app to GitHub Pages
```

# Development Conventions

- **Language:** TypeScript is used for type safety and improved code quality.
- **Component-Based Architecture:** The project follows a component-based structure typical of React applications, with components located in the `src/components` directory.
- **Styling:** SCSS is used for styling, with global styles defined in `src/index.scss` and component-specific styles likely within their respective `.scss` files (e.g., `src/assets/styles/Contact.scss`). The project includes support for both dark and light themes.
- **Linting:** ESLint configurations (`eslintConfig` in `package.json`) are set up for code consistency and error detection.
- **UI Libraries:** Material-UI and Font Awesome are utilized for consistent UI elements and iconography.
