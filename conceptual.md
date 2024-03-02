### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Callbacks, promises, and async/await syntax

- What is a Promise?
  An object representing the eventual completion or failure of an asynchronous operation
  
- What are the differences between an async function and a regular function?
  Async functions return a promise automatically and allow the use of await within them, whereas regular functions do not

- What is the difference between Node.js and Express.js?
  Node.js is a runtime environment for executing JavaScript code server-side. Express.js is a framework that provides features to develop web and mobile applications on top of Node.js

- What is the error-first callback pattern?
  Callbacks take an error object as their first parameter and a result as the second

- What is middleware?
  Middleware is software that acts as a bridge between an operating system or database and applications

- What does the `next` function do?
  The next function passes control to the next middleware function

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  Usernames are hardcoded. No error handling. Requests made in squence instead of Promise.all

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
