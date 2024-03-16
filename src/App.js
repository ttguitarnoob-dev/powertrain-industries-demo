import {NextUIProvider} from "@nextui-org/react";
import './App.css';
import Navigation from "./Components/UI Components/Navigation";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div className="App">
       <NextUIProvider>
        <Navigation />
        <Home />
    </NextUIProvider>
    </div>
  );
}

export default App;
