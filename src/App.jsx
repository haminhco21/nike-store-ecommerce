import Hero from "./components/Hero";
import Sales from "./components/Sales";
import { heroapi, popularsales, topratesales } from "./data/data.js";

function App() {
  return (
    <>
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} />
      <Sales endpoint={topratesales} />
    </>
  );
}

export default App;
