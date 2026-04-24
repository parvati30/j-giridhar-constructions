import Link from "next/link";
const renderMenu = (items: any[]) => {
    return items.map((item, index) => (
        <li
            key={index}
            className={`nav-item ${item.children ? "submenu" : ""}`}
        >
            <Link className="nav-link" href={item.link}>
                {item.name}
            </Link>

            {item.children && (
                <ul>
                    {renderMenu(item.children)}
                </ul>
            )}
        </li>
    ));
};

export default renderMenu;