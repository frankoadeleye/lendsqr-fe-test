import "./styled.scss";
import { useSelector } from "react-redux";
import Svgs from "src/assets/svgs";
import { store } from "src/redux/store";
import moment from "moment";
import elipsis from "src/utils/elipsis";
import { useEffect, useRef, useState, useMemo } from "react";
import userStatuses from "./data";
import { useNavigate } from "react-router-dom";
import Pagination from "src/common/pagination";
import getTopMargin from "src/utils/getTopMargin";

const {
  filterIcon,
  seeMore,
  eyeIcon,
  userPlus,
  userChecked,
  categoryDropdownIcon,
} = Svgs;

let PageSize = 10;

function ScrollToTop() {
  return window.scrollTo({ top: 300, left: 0, behavior: "smooth" });
}

function UsersTable() {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSelection, setCurrentSelection] = useState(null);

  const handleCurrentPage = (currentPage) => {
    setCurrentPage(currentPage);
    ScrollToTop();
  };

  let navigate = useNavigate();

  const ref = useRef(null);

  interface RootState {
    allUsers: any;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let allUsers: any = [];

  const isGot = useSelector((state: RootState) => state.allUsers?.isGot);

  if (isGot) {
    allUsers = store.getState().allUsers?.response?.data;

    for (let i = 0; i < userStatuses.length; i++) {
      allUsers.forEach((item: any) => {
        allUsers[i].status = userStatuses[i];
      });
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMoreDetails(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allUsers.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allUsers]);

  const handleShowMoreDetails = (userId) => {
    setShowMoreDetails(true);
    setCurrentSelection(Number(userId));
  };

  useEffect(() => {
    if (currentSelection) {
      setCurrentSelection(currentSelection);
      console.log("this is userId", currentSelection);
    }
  }, [currentSelection]);

  let topMargin =
    460 + (10 * Number(`${getTopMargin(currentSelection)}0`)) / 1.75;

  return (
    <>
      <div className="users-table">
        <div className="users-table__rows-wrap">
          <div className="tab-view-row header">
            <div>
              ORGANIZATION <img src={filterIcon} alt="" />
            </div>
            <div>
              USERNAME <img src={filterIcon} alt="" />
            </div>
            <div>
              EMAIL <img src={filterIcon} alt="" />
            </div>
            <div>
              PHONE NUMBER <img src={filterIcon} alt="" />
            </div>
            <div>
              DATE JOINED <img src={filterIcon} alt="" />
            </div>
            <div>
              STATUS <img src={filterIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="users-table__rows-wrap">
          {!isGot
            ? ""
            : currentTableData.map((data, index) => {
                return (
                  <div key={data.id}>
                    <div className="tab-view-row">
                      <div title={data.orgName}>{data.orgName}</div>
                      <div title={data.userName}>{data.userName}</div>
                      <div title={data.email}>{elipsis(data.email, 15)}</div>
                      <div title={data.profile.phoneNumber}>
                        {data.profile.phoneNumber}
                      </div>
                      <div
                        title={moment(data.createdAt).format("ll h:mm a")}
                        style={{ textTransform: "uppercase" }}>
                        {moment(data.createdAt).format("ll h:mm a")}
                      </div>
                      <div className={data.status}>
                        <span title={data.status}>{data.status}</span>{" "}
                        <img
                          src={seeMore}
                          alt="see-more"
                          onClick={() => handleShowMoreDetails(data.id)}
                        />
                      </div>
                    </div>
                    <div
                      className="see-more-container"
                      ref={ref}
                      style={{
                        display: showMoreDetails ? "flex" : "none",
                        top: topMargin,
                        position: "absolute",
                      }}
                      key={index + allUsers.length}>
                      <div
                        onClick={() => navigate(`users/${currentSelection}`)}>
                        <img src={eyeIcon} alt="eye" /> View Details
                      </div>
                      <div>
                        <img src={userPlus} alt="eye" /> Blacklist User
                      </div>
                      <div>
                        <img src={userChecked} alt="eye" /> Activate User
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <div className="pagination-wrap">
        <div className="pagination-desc">
          Showing{" "}
          <div className="pagination-desc__current">
            {currentPage}{" "}
            <img src={categoryDropdownIcon} alt="category-dropdown-icon" />
          </div>
          out of {PageSize}
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={allUsers.length}
          pageSize={PageSize}
          onPageChange={(page) => handleCurrentPage(page)}
        />
      </div>
    </>
  );
}

export default UsersTable;
