import Slider from "./components/slider";
import Table from "./components/table";
import { useState } from "react";

function App() {

  const [jobLength, setJobLength] = useState(1) 

  return (
    <div className="App">
      <Slider jobLength={jobLength} setJobLength={setJobLength}/>
      <Table length={jobLength}/>
    </div>
  );
}

export default App;
