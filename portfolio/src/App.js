import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
