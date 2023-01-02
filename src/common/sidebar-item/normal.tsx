import "./styled.scss";

type SBItemProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  specialClassName?: string;
  name?: string;
  icon: any;
};

function NormalItem({ onClick, name, icon, specialClassName }: SBItemProps) {
  return (
    <div onClick={onClick}>
      <div className="nav-link">
        <>
          <img className="nav-link__icon" src={icon} alt={name} />
          <div className={`nav-link__name--${specialClassName}`}>{name}</div>
        </>
      </div>
    </div>
  );
}
export default NormalItem;
