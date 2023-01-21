import { Button } from "react-bootstrap";
import { BsFillSkipStartCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="start-button-row">
        <Button
          size="lg"
          className="start-button"
          onClick={() => {
            navigate("/main");
          }}>
          <BsFillSkipStartCircleFill size={"30"} />
          {" Start"}
        </Button >
    </div>
  )
}