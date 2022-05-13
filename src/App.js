import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shop></Shop>
    </div>
  );
}

export default App;

// Question Answer

// 1. How does React work?
// Answer: React is a Javascript library that uses a declarative approach to make web applications easier to reason about to be both efficient and scalable. It creates simple views for each state in the project, and when data changes, React updates and renders the appropriate component quickly. The declarative perspective simplifies debugging and makes the code more reliable. React  Node.JS to use any dependencies packages.  React uses JSX to build the skeleton of our components. React renders an independent react DOM in the browser. As a result, without reloading the browser tab, we can easily render different components in a single-page web app.

// 2. Difference between Props and State?
// Answer: We use the state to pass data within a component, but we can't pass it to the child component. But PROPS can be used to pass data from a parent component to all its child components. The state is mutable but the PROPS is immutable. Basically, PROPS are read-only in the child components. By using PROPS we can pass functions as well, but the state can’t store functions.

// 3. How does useState work?
// Answer: useState is a Hook function that helps to set data for any state in react components. React uses batch updates for any state to maintain efficiency.  As a result, the update function doesn’t update the value right away. React re-renders the DOM if there are any changes in the dom, but if both values are the same, react doesn’t re-render its dom.
