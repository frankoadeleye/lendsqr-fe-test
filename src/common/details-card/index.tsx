import "./styled.scss";

type detailsCardProps = {
  icon: any;
  title: string;
  count: string | number;
};

function DetailsCard({ icon, title, count }: detailsCardProps) {
  return (
    <div className="details-card">
      <img className="details-card__icon" src={icon} alt="icon" />
      <div className="details-card__title">{title}</div>
      <div className="details-card__count">{count}</div>
    </div>
  );
}

export default DetailsCard;
