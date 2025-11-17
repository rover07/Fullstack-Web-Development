const mainContainer = document.querySelector("#root");

function customRender(reactElement, mainContainer) {
  // // version 1 . issue: if there is another setAttribute that makes the html invalid it would cause problem. We are explicitly mentioning things which on mistype might cause error
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   mainContainer.appendChild(domElement);
  //
  // // version 2
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue; // to avoid creating children text again
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
const anotherElement = {};

// A method which will inject the above code in the html
customRender(reactElement, mainContainer);
