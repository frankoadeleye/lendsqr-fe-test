import "./styled.scss";

type detailsCardProps = {
  data: {
    icon: any;
    title: any;
    count: any;
  };
};

function DetailsCard({ data }: detailsCardProps) {
  const { icon, title, count } = data;
  return (
    <div className="details-card">
      <img className="details-card__icon" src={icon} alt="icon" />
      <div className="details-card__title">{title}</div>
      <div className="details-card__count">{count}</div>
    </div>
  );
}

export default DetailsCard;
