import {NextUIProvider} from "@nextui-org/react";
import './App.css';
import Navigation from "./Components/UI Components/Navigation";
import Home from "./Components/Pages/Home";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState()
  console.log("appp", isActive)
  return (
    <div className="App">
       <NextUIProvider>
        <Navigation isActive={isActive} setIsActive={setIsActive} />
        <Home />
    </NextUIProvider>
    </div>
  );
}

export default App;
