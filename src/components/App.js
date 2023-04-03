// import { useState } from "react";
import Screen from "./Screen";
import Button from "./Button";

function App() {
  const data = [
    1, 2, 3, 4,
    5, 6, 7, 8
  ]
  return (
    <div className="App">
      <Screen />
      <div className="btns">
      {
        data.map((value)=>{
          return(
            <Button value={value}/>
          )
        })}
        {/* <Button value={`C`} />
        <Button value={`+/-`} />
        <Button value={`%`} />
        <Button value={`/`} />
        <Button value={7} />
        <Button value={8} />
        <Button value={9} />
        <Button value={`X`} />
        <Button value={4} />
        <Button value={5} />
        <Button value={6} />
        <Button value={`+`} />
        <Button value={3} />
        <Button value={2} />
        <Button value={1} />
        <Button value={`-`} />
        <Button value={`.`} />
        <Button value={0} />
        <Button value={null} />
        <Button value={`=`} /> */}
      </div>
    </div>
  );
}

export default App;
