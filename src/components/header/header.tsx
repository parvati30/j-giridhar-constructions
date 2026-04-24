import Image from "next/image";
import Link from "next/link";
import { menuConfig } from "./menuList";
import renderMenu from "./renderMenu";
// import "./header.scss"

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">

                        {/* Logo */}
                        <Link href="/" className="navbar-brand">
                            <Image src="/images/logo.JPG" alt="Logo" width={70} height={70} />
                        </Link>

                        {/* Menu */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    {renderMenu(menuConfig)}
                                </ul>
                            </div>

                        </div>

                        <div className="navbar-toggle"></div>
                    </div>
                </nav>

                <div className="responsive-menu"></div>
            </div>
        </header>
    );
};

export default Header;