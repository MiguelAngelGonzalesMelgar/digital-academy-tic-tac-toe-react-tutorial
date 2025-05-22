# React Research

## What are React components and how are they reused?

- React components are the building blocks of any React application. 

- They are JavaScript functions or classes that return elements describing what should appear on the screen. 

- Components make it easy to split the UI into independent, reusable pieces.

- You can reuse components by importing them into different parts of your app and passing different props to customize their behavior or appearance. 
- This promotes consistency, reduces duplication, and improves maintainability. 

- React encourages the use of small, focused components that do one job well. 

- By composing components together, you can build complex UIs in a structured and efficient way.

## What is state in React and how does it work under the hood?

- State in React is a built-in object used to store dynamic data that determines how a component behaves or renders. 

- When state changes, React automatically re-renders the component to reflect those changes.

- Under the hood, React uses hooks like `useState` (in functional components) to manage state in memory and trigger re-renders efficiently.

- React batches state updates and uses a virtual DOM to compare the new state with the previous one, applying only the necessary changes to the real DOM. This makes updates fast and efficient.

- Each component manages its own local state, which helps keep logic organized. 

- State is essential for handling user input, API data, toggling UI elements, and more.

## What is "lifting state up" and when should you use it?

- "Lifting state up" is a React pattern where you move shared state to the nearest common ancestor of the components that need access to it. 

- Instead of duplicating the same piece of state in multiple sibling components, you place it in their parent and pass it down via props.

- This approach ensures that all components are using the same, consistent data source. 

- You should use it when two or more components need to communicate or share state. 

- Lifting state up helps avoid inconsistencies and makes the flow of data more predictable. It also simplifies debugging, as you can track the state in one central place.

## What are keys in lists, and why are they important in React?

- Keys are special attributes you add to elements in a list to help React identify which items have changed, been added, or removed. 

- They should be unique and stable for each list item, often based on an ID or any other unique attribute.

- React uses keys to optimize the re-rendering process by comparing previous and current versions of elements. Without proper keys, React may unnecessarily re-render or misplace elements, leading to bugs and performance issues. 

- Using keys correctly helps maintain efficient updates and a smooth user experience. 

- Keys don’t get passed to components as props, but they are essential for React’s internal diffing algorithm. Always choose stable values for keys to ensure predictable behavior.
