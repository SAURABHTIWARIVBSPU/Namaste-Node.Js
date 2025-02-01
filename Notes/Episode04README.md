# Episode 04: Module Export & Requirements

## Overview
This episode introduces the concept of **modular programming in Node.js**. Keeping all code in a single file is not a good practice for large projects, so we explore how to structure projects using **modules**, export and import functions, and understand **CommonJS vs. ES Modules**.

## Key Topics Covered

### 1. Understanding Modules in Node.js
- **Modules** allow breaking a large codebase into smaller, reusable files.
- In Node.js, different files are treated as **separate modules**.
- Use the `require()` function to import one module into another.

### 2. Using `require()`
- The `require()` function allows including external modules in your project.
- Example:
  ```js
  const xyz = require('./xyz');
  ```
- This imports and executes the `xyz.js` module inside `app.js`.

### 3. Exporting Functions and Variables
- By default, **modules do not expose their variables/functions** to other files.
- To make them accessible, use `module.exports`.
- Example:
  ```js
  let x = "export in Node";
  function calculateSum(a, b) {
      return a + b;
  }
  module.exports = { x, calculateSum };
  ```
- Now, `x` and `calculateSum` can be imported into another module.

### 4. Importing an Exported Module
- Import the exported function and variable using destructuring:
  ```js
  const { x, calculateSum } = require('./sum');
  ```
- **Note:** The `.js` extension can be omitted as Node.js automatically resolves it.

### 5. CommonJS vs. ES Modules (ESM)
- **CommonJS (CJS):** Uses `require()`, loads modules **synchronously**.
- **ES Modules (ESM):** Uses `import/export`, loads modules **asynchronously**.
- **Key Differences:**
  - CommonJS runs in **non-strict mode**, while ES modules run in **strict mode**.
  - ES modules allow for **better performance** and scalability.
  - Future JavaScript development will shift towards **ES Modules**.

### 6. Configuring ES Modules
- Create a `package.json` file with the following setting to use ES Modules:
  ```json
  {
    "type": "module"
  }
  ```
- **Syntax for ES Modules:**
  ```js
  // Export
  export const name = "NodeJS";
  export function sum(a, b) { return a + b; }
  
  // Import
  import { name, sum } from './sum.js';
  ```

### 7. Structuring Large Projects with Nested Modules
- **Organizing related functions into folders improves maintainability.**
- Example:
  ```
  /calculate
      ├── sum.js
      ├── multiply.js
      ├── index.js
  ```
- `index.js` can export everything from `sum.js` and `multiply.js`, simplifying imports.

### 8. Importing JSON Files
- JSON files can be imported directly using `require()`:
  ```js
  const data = require('./data.json');
  console.log(data);
  ```

### 9. Built-in Modules
- Node.js has several built-in modules like `util`.
- Example:
  ```js
  const util = require('node:util');
  ```

## Features & Highlights
✔ **Improved Code Organization:** Helps manage large projects effectively.
✔ **Reusable Modules:** Write once, use anywhere.
✔ **Support for CommonJS & ES Modules:** Choose based on project needs.
✔ **Built-in Module Support:** Utilize Node.js core functionalities efficiently.
✔ **Scalability:** Makes projects maintainable and readable.

## Conclusion
This episode teaches how to **export and import modules in Node.js**, understand **CommonJS vs. ES Modules**, and organize code efficiently for scalability. Mastering these concepts will enhance your ability to build structured and modular applications.

