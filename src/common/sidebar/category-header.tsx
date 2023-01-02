import Svgs from "src/assets/svgs";

const { briefcaseActive, categoryDropdownIcon } = Svgs;

type catHeaderProps = {
  name?: string;
  icon?: any;
};

const CategoryHeader = ({
  name = "Switch Organization",
  icon = briefcaseActive,
}: catHeaderProps) => {
  return (
    <div className="category-link">
      <img className="category-link__icon" src={icon} alt={`briefcase`} />
      <div className="category-link__name">{name}</div>
      <img
        className="category-link__icon--dropdown"
        src={categoryDropdownIcon}
        alt={`category-dropdown-icon`}
      />
    </div>
  );
};

export default CategoryHeader;
