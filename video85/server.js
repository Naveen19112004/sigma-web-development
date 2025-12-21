console.log("hello world");
//client cannot see this file
// Frontend JS is downloaded and executed by the browser.
// Backend JS is executed by Node.js and never sent to the browser.
// - npm -> Node Package Manager used to manage and install packages in a Node.js project.
// - npm init -> Initializes a Node.js project by creating the package.json file.
// - package.json -> Stores project metadata, scripts, and dependency names (not their code).
// - node_modules -> Folder that contains the actual source code of all installed dependencies.
// - npm i / npm install -> Installs all dependencies listed in package.json.
// - npm i <package-name> -> Installs a specific package and updates package.json.
// - dependencies -> Packages required for the application to run in production.
// - devDependencies -> Packages used only during development and testing.
// - scripts -> Custom commands defined in package.json to run or build the project.
// - Node.js -> A JavaScript runtime that allows JS to run outside the browser.
// - V8 Engine -> Google’s JavaScript engine that executes JavaScript code.
// - Node.js vs V8 -> Node.js uses V8 and adds APIs for file system, networking, and OS access.
// - server.js -> Backend entry file that runs on the server and handles requests and responses.
// - Frontend JavaScript (script.js) -> JavaScript sent to the browser and executed on the client side.
// - Backend JavaScript -> JavaScript executed on the server and never sent to the browser.
// - Why client cannot see server.js -> Because backend code runs on the server an
var slugify=require('slugify')
slugify('some string')// some-string

//if you prefer something other than '-' as separator
slugify('some string', '_')//some_string
//- Slugify -> Converts a normal string into a URL-friendly slug by removing spaces, special characters, and replacing spaces with hyphens.
//- Slugify module -> A Node.js package that already contains logic to convert strings into valid URL-safe slugs by removing spaces and special characters, so we don’t need to write the logic ourselves.
