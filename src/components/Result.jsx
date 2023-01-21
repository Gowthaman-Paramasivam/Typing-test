import { Button, Row } from "react-bootstrap";
import { VscDebugRestart } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Result = () => {

  const navigate = useNavigate();

  let data = useSelector(state => state.reducer);

  return (
    <div className="result-root">
      <div className="result-div">
        <div className="error-div">
          <Row className="fonts-color">ERRORS</Row>
          <Row className="error-font">{data.error}</Row>
        </div>
        <div className="wpm-div">
          <Row className="fonts-color">WPM</Row>
          <Row>{data.wpm}</Row>
        </div>
        <div className="time-div">
          <Row className="fonts-color">TIME(s)</Row>
          <Row>{Math.ceil(data.timer)}</Row>
        </div>
        <div className="accuracy-div">
          <Row className="fonts-color">ACCURACY(%)</Row>
          <Row>{Math.floor(100 - (data.error / data.typed) * 100)}</Row>
        </div>
      </div>
      <div className="restart-button">
        <Button
          onClick={() => {
            navigate("/main");
          }}
        >
          <VscDebugRestart
            size={"30"}
          />Restart</Button>
      </div>
    </div>
  )
}

export default Result;