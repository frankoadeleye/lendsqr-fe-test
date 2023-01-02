import "./styled.scss";
import { useNavigate } from "react-router-dom";
import Svgs from "src/assets/svgs";

const { backArrow } = Svgs;

type gBProps = {
  text?: string;
};

function GoBack({ text }: gBProps) {
  let navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="go-back" onClick={goBack}>
      <img src={backArrow} alt="back-icon" className="go-back__icon" />
      <div className="go-back__text">{text}</div>
    </div>
  );
}

export default GoBack;
