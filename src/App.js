import React, {useState} from "react";
import Display from "./components/Display"
import Button from "./components/Button"
import "./style.css";


export default function App() {
  const [num, setNum] = useState("");

  function handleClick(e) {
    if (num.length > 14) {
      alert("Can't enter more than 15 digits");
    } else {
      setNum(num + e.target.name);
    }
  }

  function handleClear() {
    setNum("");
  }

  function handleDelete() {
    setNum(num.slice(0, num.length - 1));
  }

  function handlePercentage() {
    setNum((eval(num) / 100).toString());
  }

  function handleResult() {
    setNum(eval(num).toString());
  }

  return (
    <div className="container">

      <Display className="display" value={num} />

      <Button className="button clear" name="C" onClick={handleClear} />
      <Button className="button" name="%" onClick={handlePercentage}/>
      <Button className="button op" name="/" onClick={handleClick} />
      <Button className="button"name="7" onClick={handleClick} />
      <Button className="button" name="8" onClick={handleClick} />
      <Button className="button" name="9" onClick={handleClick} />
      <Button className="button op " name="*" onClick={handleClick} />
      <Button className="button" name="4" onClick={handleClick} />
      <Button className="button" name="5" onClick={handleClick} />
      <Button className="button" name="6" onClick={handleClick}/>
      <Button className="button op " name="-" onClick={handleClick} />
      <Button className="button" name="1" onClick={handleClick} />
      <Button className="button" name="2" onClick={handleClick} />
      <Button className="button"name="3" onClick={handleClick}/>
      <Button className="button op " name="+" onClick={handleClick} />
      <Button className="button" name="0" onClick={handleClick} />
      <Button className="button" name="." onClick={handleClick} />
      <Button className="button" name="del" onClick={handleDelete}/>
      <Button className="button op equalto" name="=" onClick={handleResult} />
    </div>
  );
}
