import { ActionButton } from "src/common/button";
import GoBack from "src/common/go-back";
import "./styled.scss";
import { useParams } from "react-router-dom";
import elipsis from "src/utils/elipsis";
import Svgs from "src/assets/svgs";

const { AvatarIcon, starFilled, starEmpty } = Svgs;

const Seperator = () => {
  return <div className="seperator"></div>;
};

function ScrollToAbsoluteTop() {
  return window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function UserDetails({ data }) {
  const { userId }: any = useParams();
  ScrollToAbsoluteTop();

  const dataForThisuser = data.find((p: any) => p.id === userId);
  let documentData = dataForThisuser;

  if (dataForThisuser) {
    documentData = (
      <div className="user-details-container">
        <GoBack text="Back to Users " />
        <div className="user-details-container__header">
          <div className="heading-text">User Details</div>
          <div className="heading-buttons">
            <ActionButton generalColor="#E4033B" text="BLACKLIST USER" />
            <ActionButton generalColor="#39CDCC" text="ACTIVATE USER" />
          </div>
        </div>
        <div className="user-details-container__user-summary">
          <div className="credentials">
            <img
              className="credentials__avatar"
              src={AvatarIcon}
              alt="avatar"
            />
            <div className="credentials__name">
              <div>
                {documentData.profile.firstName} {documentData.profile.lastName}
              </div>
              <div>{documentData.userName} </div>
            </div>
            <Seperator />
            <div className="credentials__tier">
              <div>User's Tier</div>
              <div>
                <img src={starFilled} alt="star-empty" className="star" />
                <img src={starEmpty} alt="star-empty" className="star" />
                <img src={starEmpty} alt="star-empty" className="star" />
              </div>
            </div>
            <Seperator />
            <div className="credentials__name">
              <div>N{documentData.accountBalance}</div>
              <div>{documentData?.accountNumber}/Providus Bank </div>
            </div>
          </div>
          <div className="credentials tabs">
            <div className="active"> General Details</div>
            <div>Documents</div>
            <div>Bank Details</div>
            <div>Loans</div>
            <div>Savings</div>
            <div>App and System</div>
          </div>
        </div>
        <div className="user-details-container__full-details">
          <FullDetailsHeader text="Personal Information" />
          <div className="full-details-content-wrap">
            <FullDetailsContent
              header="full Name"
              content={`${documentData?.profile?.firstName} ${documentData?.profile?.lastName}`}
            />
            <FullDetailsContent
              header="Phone Number"
              content={documentData?.phoneNumber}
            />
            <FullDetailsContent
              header="Email Address "
              contentTitle={documentData?.email}
              content={elipsis(documentData?.email, 15)}
            />
            <FullDetailsContent
              header="Bvn"
              content={documentData?.profile?.bvn}
            />
            <FullDetailsContent
              header="Gender"
              content={documentData?.profile?.gender}
            />
          </div>
          <div className="full-details-content-wrap">
            <FullDetailsContent
              header="Marital status"
              content={
                !documentData?.profile?.maritalStatus
                  ? "Not provided"
                  : documentData?.profile?.maritalStatus
              }
            />
            <FullDetailsContent
              header="Children"
              content={
                !documentData?.profile?.number_of_children
                  ? "Not provided"
                  : documentData?.profile?.number_of_children
              }
            />
            <FullDetailsContent
              header="Type of residence"
              content="Parent’s Apartment"
            />
          </div>
          <div className="partition" />
          <FullDetailsHeader text="Education and Employment" />
          <div className="full-details-content-wrap">
            <FullDetailsContent
              header={documentData?.education?.level}
              content="level of education"
            />
            <FullDetailsContent
              header="employment status"
              content={documentData?.education?.employmentStatus}
            />
            <FullDetailsContent
              header="sector of employment"
              content={documentData?.education?.sector}
            />
            <FullDetailsContent
              header="Duration of employment"
              content={documentData?.education?.duration}
            />
          </div>
          <div className="full-details-content-wrap">
            <FullDetailsContent
              header="office email"
              contentTitle={documentData?.education?.officeEmail}
              content={elipsis(documentData?.education?.officeEmail, 15)}
            />
            <FullDetailsContent
              header="Monthly income"
              content={`
                ${documentData?.education?.monthlyIncome[0]} - ${documentData?.education?.monthlyIncome[1]}`}
            />
            <FullDetailsContent
              header="loan repayment"
              content={documentData?.education?.loanRepayment}
            />
          </div>
          <div className="partition" />
          <FullDetailsHeader text="Socials" />
          <div className="full-details-content-wrap">
            <FullDetailsContent
              header="Twitter"
              content={documentData?.socials?.twitter}
            />
            <FullDetailsContent
              header="Facebook"
              content={documentData?.socials?.facebook}
            />
            <FullDetailsContent
              header="Instagram"
              content={documentData?.socials?.instagram}
            />
          </div>
          <div className="partition" />
          <FullDetailsHeader text="Guarantor" />
          <div className="full-details-content-wrap">
            <FullDetailsContent
              header="full Name"
              content={documentData?.guarantor?.firstName}
            />
            <FullDetailsContent
              header="Phone Number"
              content={documentData?.guarantor?.phoneNumber}
            />
            <FullDetailsContent
              header="Email Address"
              content={
                !documentData?.guarantor?.email
                  ? "Not provided"
                  : documentData?.guarantor?.email
              }
            />
            <FullDetailsContent
              header="Relationship"
              content={
                !documentData?.guarantor?.relationship
                  ? "Not provided"
                  : documentData?.guarantor?.relationship
              }
            />
          </div>
          <div className="partition" />
          <div className="full-details-content-wrap">
            <FullDetailsContent header="full Name" content="Not provided" />
            <FullDetailsContent header="Phone Number" content="Not provided" />
            <FullDetailsContent header="Email Address" content="Not provided" />
            <FullDetailsContent header="Relationship" content="Not provided" />
          </div>
        </div>
      </div>
    );
  } else {
    documentData = <h2> Sorry. user doesn't exist </h2>;
  }

  return <>{documentData}</>;
}

type fDHeaderProps = {
  text?: string;
  header?: string;
  content?: string;
  headerTitle?: any;
  contentTitle?: any;
};

const FullDetailsHeader = ({ text }: fDHeaderProps) => {
  return <div className="full-details-header">{text}</div>;
};

const FullDetailsContent = ({
  header,
  content,
  headerTitle,
  contentTitle,
}: fDHeaderProps) => {
  return (
    <div className="full-details-content">
      <div title={headerTitle}>{header}</div>
      <div title={contentTitle}>{content}</div>
    </div>
  );
};

export default UserDetails;
