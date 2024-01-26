//console.log("goutam gurjar ranvey")

//-----------------------
// The process object in Node.js is a global object that provides information about, and control over, the current Node.js process. It allows you to interact with the operating system, access environment variables, and manage the Node.js application's lifecycle.

// Here are some common tasks and properties associated with the process object in Node.js:

// Accessing Command Line Arguments:
// You can access command line arguments using process.argv. For example:
//  console.log(process.argv);
//  [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\HP\\Desktop\\node\\index.js'
//   ]

//-------------------------
//open terminal and write this->node index.js 5
// let n = process.argv.pop();
// //console.log(n);
// for(let i=1; i<=n; i++){
//     console.log(i);
// }

//----------------
//Note:
//to create a new file useing this cmd
//go on terminal and write it ->type nul > app.js


//-----------------------------

// REPL stands for "Read-Eval-Print Loop." It is an interactive programming environment that takes individual user inputs (or lines of code), evaluates them, prints the result, and then waits for the next input. The process continues in a loop, allowing users to experiment with code, test snippets, and get immediate feedback.

// Node.js comes with a built-in REPL environment that allows you to interact with the Node.js runtime directly from the command line. You can start the Node.js REPL by typing node in your terminal without specifying a script file. Once in the REPL, you can enter JavaScript code, and it will be immediately executed and the result will be displayed.

// Here's a simple example of using the Node.js REPL:

// Open your terminal.
// Type node and press Enter.
// You should see the Node.js REPL prompt (>), indicating that you can start entering JavaScript code:

// javascript
// Copy code
// > 2 + 2
// 4
// > const message = "Hello, REPL!"
// undefined
// > message
// 'Hello, REPL!'
// > function greet(name) {
// ...   return 'Hello, ' + name + '!';
// ... }
// undefined
// > greet('John')
// 'Hello, John!'
// > 

//In the example above, you can see that you can perform simple calculations, define variables, and even create functions on the fly. The REPL provides a quick way to experiment with code without the need to create a separate script.

//Uses of REPL

//1. js expression
//2. use variables
//3. Multiline code / Loops
//4. use (_) to get the last result
//5. we can use editor mode

//------------------
//Note:
//>fs
//first open Repl environment then press tab and fs

//press tab to open all the methods and properties 
//press fs (file-system) to open all the methods