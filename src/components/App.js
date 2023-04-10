import { useState } from "react";
import Screen from "./Screen";
import Button from "./Button";

function App() {
  const [btn, setbtn] = useState("")
  const data = [
    "C", "+/-", "%", "/",
    7, 8, 9, "*",
    4, 5, 6, "+",
    1, 2, 3, "-",
    ".", 0, null, "=",
  ]
  const handleClick = (e)=>{
    e.preventDefault();
    const btnValue = e.target.value;
    setbtn(btn+btnValue);
  }
  const resetHandle = (e)=>{
    e.preventDefault();
    setbtn("");
  }
  const changesign = (e)=>{
    e.preventDefault();
    setbtn("");
  }
  const equalto = (e)=>{
    e.preventDefault();
    const total = eval(btn);
    setbtn(total);
  }
  return (
    <div className="App">
      <Screen value={btn} />
      <div className="btns">
      {
        data.map((value)=>{
          return(
            <Button value={value} onClick={
              value==="="?equalto:
              value==="+/-"?changesign:
              value==="C"?resetHandle:handleClick}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
