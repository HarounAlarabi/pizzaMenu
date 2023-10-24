import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
     <Footer/>
    </div>
  );
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );