// components/Layout.tsx
import React from "react";
import Header from "./header/header";
// import "../globals.scss";
// import AdminNavigation from "./AdminNavigation";
import { Inter_Tight } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CustomCursor from "@/components/CustomCursor";

const interTight = Inter_Tight({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className={interTight.className}>
            <CustomCursor />
            {/* <AdminNavigation /> */}
            <Header />

            {children}
        </div>

    );
};

export default Layout;
