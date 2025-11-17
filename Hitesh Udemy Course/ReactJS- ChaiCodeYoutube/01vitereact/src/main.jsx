import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { jsx as _jsx } from "react/jsx-runtime.js";

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
const anotherUser = "Vaibhav";

const AnotherElement = React.createElement(
  "a",
  { href: "google.com", target: "_blank" },
  "Visit Google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  AnotherElement
  // <App />
);
