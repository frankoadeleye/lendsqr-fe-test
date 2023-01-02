import "./styled.scss";
import Svgs from "src/assets/svgs";

const { dateIcon } = Svgs;

const DatePickerCustomInput = () => {
  return (
    <div className="date-picker-container">
      <img src={dateIcon} alt="date-icon" />
      <input type="date" className="date-picker-container__date-picker" />
    </div>
  );
};

export default DatePickerCustomInput;
