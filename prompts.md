# 📚 ShopZone — Learning Prompts

This document contains the prompts used during the development of the ShopZone project for learning, understanding, debugging, and improving React development concepts.

The prompts were focused on understanding concepts and solving development issues rather than directly generating the application's core business logic.

---

## 1. Understanding React Routing

> Explain client-side routing in React in simple terms. What problem does React Router solve, and how is it different from traditional browser navigation?

---

## 2. Understanding BrowserRouter

> Explain how BrowserRouter works in React and why it is commonly used for Single Page Applications. Explain it in a beginner-friendly way with a small example.

---

## 3. Understanding Routes and Route

> Explain the difference between Routes and Route in react-router-dom. How does React decide which component to display for a particular URL?

---

## 4. Understanding Dynamic Routes

> Explain dynamic routing in React Router using a simple example such as `/product/:id`. What does `:id` represent?

---

## 5. Understanding useParams

> Explain the useParams hook in React Router. How can it be used to read a dynamic value from a URL? Please explain without assuming advanced React knowledge.

---

## 6. Understanding API Fetching

> Explain how fetching data from a REST API works in a React application. What are the basic steps from making the request to displaying the response?

---

## 7. Understanding async and await

> Explain async and await in JavaScript in simple terms. Why are they useful when working with APIs?

---

## 8. Understanding JSON

> What is JSON and why is it commonly used when working with REST APIs? Show a simple example of JSON data and explain its structure.

---

## 9. Understanding useEffect

> Explain the purpose of the useEffect hook in React. When would I use it when fetching data from an API?

---

## 10. Understanding Loading and Error States

> Why should a React application have loading and error states when fetching data from an API? Explain with a simple real-world example.

---

## 11. Understanding Context API

> Explain React Context API in beginner-friendly language. What problem does it solve and when should Context be preferred over passing props?

---

## 12. Understanding Prop Drilling

> What is prop drilling in React? Explain with a simple example and explain how Context API can help avoid unnecessary prop passing.

---

## 13. Understanding Global State

> Explain the difference between local component state and global application state in React. Give examples of data that might need global state in an e-commerce application.

---

## 14. Understanding Cart State

> In an e-commerce application, why would shopping cart data be a good use case for global state? Explain the concept without providing the complete implementation.

---

## 15. Understanding Context Providers

> Explain what a Context Provider does in React and why an application needs to be wrapped with a Provider before components can access the Context.

---

## 16. Understanding useContext

> Explain the useContext hook in React. How does it allow a component to access data from a Context without receiving that data through props?

---

## 17. Understanding Derived Data

> Explain what derived data means in React. For an e-commerce cart, how can values such as total items and total price be considered derived data?

---

## 18. Understanding LocalStorage

> Explain browser localStorage in simple terms. How is it different from React state, and why might an application use both?

---

## 19. Understanding State Persistence

> Why does React state normally disappear after a browser refresh? Explain how localStorage can be used to persist application data.

---

## 20. Understanding Authentication

> Explain authentication in a web application in simple terms. What is the difference between being authenticated and being authorized?

---

## 21. Understanding Mock Authentication

> What is mock authentication? Explain why a frontend project might use a simple guest-login system when a real backend authentication system is not part of the project scope.

---

## 22. Understanding Protected Routes

> Explain the concept of a protected route in React. Why would an e-commerce checkout page need route protection?

---

## 23. Understanding Redirects

> Explain how navigation and redirects work in React Router. When would an application redirect a user from one route to another?

---

## 24. Understanding Reusable Components

> Explain why components such as Navbar and Footer are commonly created as reusable React components instead of writing the same markup on every page.

---

## 25. Understanding Responsive Design

> Explain how CSS media queries help make a React application responsive. What should I consider when designing an e-commerce interface for desktop, tablet, and mobile?

---

## 26. Understanding CSS Organization

> What is a good way to organize CSS files in a React project with multiple pages and reusable components? Explain the advantages of keeping page-specific styles separate.

---

## 27. Understanding Vite

> Explain what Vite does in a React project. What happens when I run `npm run dev` and when I run `npm run build`?

---

## 28. Understanding Production Builds

> Explain the difference between a development server and a production build in a Vite React application.

---

## 29. Understanding Build Errors

> How should I approach debugging a Vite production build error? Explain a systematic process for identifying whether the problem comes from JavaScript, CSS, imports, dependencies, or configuration.

---

## 30. Understanding Git Changes

> Explain what the M, U, and other file status indicators in VS Code mean when working with Git.

---

## 31. Understanding Git Status

> Explain what `git status` shows and how it helps me understand which files have changed before making a commit.

---

## 32. Understanding Git Add, Commit and Push

> Explain the difference between `git add`, `git commit`, and `git push` in Git. Explain the typical workflow for sending local project changes to GitHub.

---

## 33. Understanding Vercel Deployment

> Explain how a Vite React project is deployed to Vercel from a GitHub repository. What happens after I connect the repository?

---

## 34. Understanding Deployment Errors

> My Vercel deployment failed during `npm run build`. Explain how I can reproduce the production build locally and use the error message to locate the problem.

---

## 35. Understanding BrowserRouter Deployment

> Why can applications using BrowserRouter sometimes show a 404 error when directly refreshing a nested route after deployment? Explain the reason conceptually.

---

## 36. Understanding E-Commerce Architecture

> Explain the typical frontend architecture of a small React e-commerce application. What responsibilities should the pages, reusable components, Context, API layer, and routing system have?

---

## 37. Understanding API-Based Product Data

> Explain how an e-commerce frontend can consume product information from a public REST API. What fields would normally be needed to display a product card and product details?

---

## 38. Understanding Project Structure

> What is a clean folder structure for a React e-commerce project containing pages, reusable components, Context providers, and CSS files? Explain why each folder exists.

---

## 39. Understanding Debugging React Applications

> Give me a beginner-friendly checklist for debugging a React application when a page is blank, a route does not work, or a component throws an error.

---

## 40. Learning Review

> Based on a React e-commerce SPA project using React Router, Context API, REST API integration, localStorage, and protected routes, give me a list of concepts I should be able to explain confidently in an internship review or project demonstration.

---

## 🎯 Purpose of These Prompts

The prompts above were used as learning and reference material to understand:

- React fundamentals
- Client-side routing
- Dynamic routing
- API integration concepts
- React hooks
- Context API
- Global state management
- Prop drilling
- LocalStorage
- Authentication concepts
- Protected routes
- Responsive design
- Git and GitHub workflow
- Vite production builds
- Vercel deployment
- Debugging techniques
- React project architecture

The goal was to use AI as a learning assistant to understand the concepts involved in building the ShopZone application and to troubleshoot development and deployment issues.
