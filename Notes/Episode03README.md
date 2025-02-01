# Episode 03: Writing Code in Node.js

## Overview
This episode provides a step-by-step guide on writing and executing JavaScript code using **Node.js**. It covers installing Node.js, verifying installations, using the **Node REPL**, writing code in **VS Code**, and understanding **global objects** in Node.js.

## Key Topics Covered

### 1. Installing Node.js
- Download and install Node.js from [Node.js Official Website](https://nodejs.org/en).

### 2. Verifying Installation
- Check if Node.js is installed correctly:
  ```sh
  node -v
  ```
- Check if NPM (Node Package Manager) is installed:
  ```sh
  npm -v
  ```
- If the above commands return a version number, the installation is successful. Otherwise, troubleshoot installation issues.

### 3. Using Node REPL (Read-Evaluate-Print Loop)
- Open the terminal and type:
  ```sh
  node
  ```
- You can now write and execute JavaScript code interactively.
- The Node REPL is similar to a browser console but runs in the **Node.js runtime environment**.

### 4. Writing Code in VS Code
- **Step 1:** Create a new folder (e.g., `my-nodejs-project`).
- **Step 2:** Open the folder in **VS Code** (`File > Open Folder`).
- **Step 3:** Create a new file named `app.js` inside the folder.
- **Step 4:** Write JavaScript code inside `app.js`:
  ```js
  let name = "Node JS 03";
  let a = 5;
  let b = 10;
  let c = a + b;
  console.log(name);
  console.log(c);
  ```
- **Step 5:** Open the terminal (`Ctrl + `) and run the file:
  ```sh
  node app.js
  ```

### 5. Understanding Global Objects in Node.js
- Unlike browsers where the **window** object is global, in **Node.js**, the global object is `global`.
- `global` provides functionalities like:
  - `setTimeout()`
  - `setInterval()`
- **Important Note:**
  ```js
  console.log(this); // Outputs: {}
  ```
  - At the global level in Node.js, `this` refers to an empty object (`{}`).
  - `globalThis` is a standardized way (introduced in ECMAScript 2020) to access the global object across different environments.
  - In **browsers**, `globalThis` is equivalent to `window`.
  - In **Node.js**, `globalThis` is equivalent to `global`.

## Features & Highlights
✔ **Step-by-step guide** for setting up and running Node.js.
✔ **Hands-on coding experience** with Node REPL and VS Code.
✔ **Deep dive into Node.js global objects** and how they differ from browsers.
✔ **Practical examples and commands** for smooth execution.
✔ **Introduction to ECMAScript 2020 standards** for `globalThis`.

## Conclusion
This episode provides a solid introduction to writing JavaScript code in Node.js, setting up an environment, and understanding global objects. Mastering these concepts will help developers transition from browser-based JavaScript to full-stack development using Node.js.

