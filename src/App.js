import Slider from "./slider";
import Table from "./table";
import { useState } from "react";

function App() {

  const [jobLength, setJobLength] = useState('1') 

  return (
    <div className="App">
      <Slider jobLength={jobLength} setJobLength={setJobLength}/>
      <Table length={jobLength}/>
    </div>
  );
}

export default App;
