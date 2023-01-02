import Svgs from "src/assets/svgs";
import "./styled.scss";
import { useSelector } from "react-redux";
import { store } from "src/redux/store";
import elipsis from "src/utils/elipsis";

const { dropdownArrow, AvatarIcon } = Svgs;

type userAvatar = {
  image?: any;
};

function UserAvatar({ image = AvatarIcon }: userAvatar) {
  interface RootState {
    loginUser: any;
  }

  const isLoggedIn = useSelector(
    (state: RootState) => state.loginUser.isLoggedIn
  );

  let email: string;

  if (isLoggedIn) {
    email = store.getState().loginUser.response;
  }
  return (
    <div className="avatar-block">
      <img src={image} alt="avatar" className="avatar-block__avatar" />
      <div className="avatar-block__name" title={email}>
        {elipsis(email, 10)}
      </div>
      <img className="avatar-block__icon" src={dropdownArrow} alt="dropdown" />
    </div>
  );
}

export default UserAvatar;
