import {NextUIProvider} from "@nextui-org/react";
import './App.css';
import Navigation from "./Components/UI Components/Navigation";

function App() {
  return (
    <div className="App">
       <NextUIProvider>
        <Navigation />
    </NextUIProvider>
    </div>
  );
}

export default App;
