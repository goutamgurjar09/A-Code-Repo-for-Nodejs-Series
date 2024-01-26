//In Node.js, npm (Node Package Manager) is the default package manager used for installing, managing, and sharing JavaScript libraries and tools.
// It simplifies the process of adding third-party packages-> means jo kise baba ne already bhot sara code likh kr rkha hai and usko cloud me store kr diya hai jisko hm log use kr ske (also known as modules or libraries) to your Node.js projects.

//Here are some key points about npm:

//Package Management: npm allows you to install, update, and manage dependencies for your Node.js projects. A package in npm is a collection of JavaScript code bundled together and made available for reuse.

//Command-Line Interface (CLI)->(CMD): npm is accessed through the command line using the npm command. You can use commands like npm install, npm init, npm update, and others to interact with the package manager.

//Dependency Resolution: npm helps manage dependencies by tracking which packages your project depends on and ensuring that the correct versions are installed.


//---------------
// Here are some commonly used npm commands:

// npm install: Installs dependencies listed in the package.json file.
// npm install package-name: Installs a specific package.
// npm init: Initializes a new package.json file.
// npm update: Updates packages to their latest versions.
// npm uninstall package-name: Uninstalls a specific package.
// npm search package-name: Searches for packages in the npm registry.


//--------------

//hum koi package backend environment pr install krte hai (means third party ka cloud me se)  to use hm npm ki help se install krte hai
//and jo package already node module me present hai like (fs,path module) 

//hm package install backend ke ander krte hai and hm package direct install nhi krte
// phle hm hmare project ko backend ka environment dete hai then hm packages install krte hai

//jb bhi hme backend ka environment/project create krne ke liye hme -> npm init  cmd ka use krna pdega
//jo ki ek backend ka project initialiged krega 


//-------------------
//jb bhi aap new project create kroge tb aapko first npm init se ek node js ka env create krna pdega

// PS C:\Users\HP\Desktop\node\Lec-3> mkdir npm_basic

// PS C:\Users\HP\Desktop\node\Lec-3> cd npm_basic

// PS C:\Users\HP\Desktop\node\Lec-3\npm_basic> npm init

//then enter-enter press krna hai and last me yes type krna hai


//or you can run-> npm -y   ye aapke sare defaults ko yes kr dega mtlb apko itni baar enter nhi krna pdega 
// PS C:\Users\HP\Desktop\node\Lec-3\npm_basic> npm init -y