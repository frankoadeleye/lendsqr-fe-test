import "./styled.scss";
import Sidebar from "src/common/sidebar";
import Navbar from "src/common/navbar";
import MobileSidebar from "src/common/mobile-sidebar";
import { useState } from "react";

type LayoutProp = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: LayoutProp) {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar />
      <MobileSidebar
        onCloseIconClick={() => setSidebarOpen(!sidebarIsOpen)}
        open={sidebarIsOpen}
      />
      <div className="layout__content">
        <div className="layout__navbar-wrap">
          <Navbar onIconClick={() => setSidebarOpen(!sidebarIsOpen)} />
        </div>
        <div className="layout__dynamic-section-wrap">
          <div className="layout-dynamic-section">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
