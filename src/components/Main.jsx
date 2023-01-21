import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import UserInput from "./UserInput";
import { quotes } from "./sampleData";
import { countError, countLetterTyped, countWpm, timer } from "../store/action";

let error = 0;
let wpm = 0;

export const Main = () => {

  const dispatch = useDispatch();

  const [sampleData, setSampleData] = useState("");

  const [inputData, setInput] = useState("");

  const [colorArray, setColorArray] = useState([]);

  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (sampleData.split('').length === 0) {
      const index = Math.floor(Math.random() * quotes.length);
      setSampleData(quotes[index]);
      setCurrentTime(new Date());
    }

    if (inputData.split('').length > 0 &&
      sampleData.split('').length === inputData.split('').length) {
      const time = new Date();
      dispatch(timer(Math.abs(currentTime.getTime() - time.getTime()) / 1000));
      navigate("/result");
    }

    processText();
  }, [sampleData, inputData])

  const processText = () => {
    error = 0;
    wpm = 0;
    for (var index in inputData.split('')) {
      if (inputData.charAt(index) === sampleData.charAt(index)) {
        colorArray[index] = "correct";
        if (sampleData.charAt(index) === ' ' || sampleData.charAt(index) === '.') {
          wpm = wpm + 1;
          dispatch(countWpm(wpm));
        }
      } else {
        error = error + 1;
        dispatch(countError(error));
        colorArray[index] = "wrong";
      }
      dispatch(countLetterTyped(inputData.split('').length));
      setColorArray([...colorArray])
    }

    for (var i = inputData.split('').length; i < sampleData.split('').length - 1; i++) {
      colorArray[i] = "";
      setColorArray([...colorArray]);
    }
  }

  return (
    <Container>
      <div className="content-display">
        {sampleData.split('').map((result, index) => {
          return <span className={colorArray[index] + "-input"}>{result}</span>
        })}
      </div>
      <UserInput data={inputData} setInput={(data) => {
        setInput(data)
      }} />
    </Container>
  )
}

export default Main;