import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
