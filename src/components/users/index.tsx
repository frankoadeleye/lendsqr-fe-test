import "./styled.scss";
import sampleData from "./data";
import DetailsCard from "src/common/details-card";

function Users() {
  return (
    <div className="users">
      <div className="users__title">Users</div>
      <div className="users__cards-row">
        <div className="users-row-wrap">
          {sampleData.map((item, index) => {
            return <DetailsCard data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;
