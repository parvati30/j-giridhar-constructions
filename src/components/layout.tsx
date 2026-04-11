// components/Layout.tsx
import React from "react";
// import "../globals.scss";
// import AdminNavigation from "./AdminNavigation";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className="min-h-screen bg-dashboard-bg">
            {/* <AdminNavigation /> */}

            {children}
        </div>

    );
};

export default Layout;
