import DatePickerCustomInput from "src/common/custom-datepicker";
import "./styled.scss";

type fDprops = {
  dropdownRef?: any;
  showDropdown?: boolean;
};

function FilterDropDown({ dropdownRef, showDropdown }: fDprops) {
  return (
    <div
      className="filter-dropdown"
      ref={dropdownRef}
      style={{ display: showDropdown ? "flex" : "none" }}>
      <div className="filter-dropdown__select-title">Organization</div>
      <div className="filter-dropdown__select">
        <select>
          <option selected> Select </option>
        </select>
      </div>
      <InputItem placeholder={`User`} title="Username" />
      <div className="filter-dropdown__select-title">Date</div>
      <DatePickerCustomInput />
      <InputItem placeholder={`Email`} title="Email" />
      <InputItem placeholder={`Phone Number`} title="Phone Number" />
      <div className="filter-dropdown__select-title">Status</div>
      <div className="filter-dropdown__select">
        <select>
          <option selected> Select </option>
        </select>
      </div>
      <div className="filter-dropdown__buttons">
        <div>Reset</div>
        <div>Filter</div>
      </div>
    </div>
  );
}

type iIprops = {
  title?: any;
  placeholder?: any;
};

const InputItem = ({ title, placeholder }: iIprops) => {
  return (
    <div className="filter-dropdown__item-wrap">
      <div>{title}</div>
      <div>
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FilterDropDown;
