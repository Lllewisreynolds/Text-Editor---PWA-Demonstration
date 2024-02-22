# 19 Progressive Web Applications (PWA): Text Editor

## Description

This application was created to showcase the implementation of specific technologies and methodologies studied as part of our Full-Stack Coding Bootcamp - namely, PWAs, or Progressive Web Applications: application software that is built using web platform technologies, but is designed in a manner that allows it to replicate the user experience of a platform-specific app such as those commonly seen on mobile OS. 

This has been demonstrated through the creation of a text-editor that runs in the browser. Starter code was provided, but further functionality has been added to enable greater data persistence, offline functionality and desktop installation in accordance with standard practices to meet PWA criteria.

The following common tools and processes have been implemented to achieve this:

* Configuring a webpack.config.js file with essential workbox plugins for a service worker and the generation of a manifest file, along with CSS and babel loader for older browser support and compatibility in order to use the likes of async / await.

* Configuring IndexedDB with the idb library/wrapper and both GET and PUT methods to create an object store client-side with data persistence capabilities for the application.

* Caching static assets in the src-sw.js file to enable offline functionality.

* Adding event handlers to the install button for prompt triggering of the installation process and further ease of access for offline functionality. 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
  * [Licence](#licence)
  * [Installation](#installation)
  * [Live URL](#live-url)
  * [Questions](#questions)
  
## License

This application has the following licence:

MIT License

[Link to licence](https://opensource.org/licenses/MIT)

## Installation

For local installation or further development, this repo can be cloned or forked. 
    
  Follow the following steps to then properly install this application:

  * Node.js must be installed. You can download the installer directly from the [Nodejs website](https://nodejs.org). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install node
```

  * Your next step is to initialize a project by creating a package.json file that will keep track of libraries installed for use in your application by adding the installed package's name and version. This is achieved by typing the following in the command line:

```bash
npm init -y
```

This command line application makes use of several dependencies:

  * npm install express (express.js)
  * npm install --save-dev webpack (Webpack)
  * npm install webpack-dev-server --save-dev (webpack-dev-server)
  * npm install --save-dev webpack-pwa-manifest (WebpackPwaManifest)
  * npm install babel (Babel)
  * npm install --save-dev css-loader (CSS-loader)
  * npm install concurrently --save (run multiple commands concurrently.) (Concurrently)
  * npm npm install idb (IndexedDB)

  * To install these packages, run the following commands from within the CLI at the root of the application:

```bash
npm i
```

  * And finally: 

  Please type the following command within the terminal to invoke the application:

```bash
npm run start
```

## Live URL

For immediate usage, the application is available at the following URL.

[Live URL](https://text-editor-pwa-demonstration.onrender.com)

The Text Editor can be used both in the browser or installed directly and downloaded for offline use.

      
## Questions
      
  For further questions:

  If you have any further questions or feedback at this time regarding the repo or application, my contact info can be found as below.
  
  Contact Info:

  GitHub: [Lllewisreynolds](https://github.com/Lllewisreynolds)

  Email: [lsreynolds108@gmail.com](mailto:lsreynolds108@gmail.com)