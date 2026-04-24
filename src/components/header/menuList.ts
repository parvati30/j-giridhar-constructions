export const menuConfig = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Services",
        link: "/services",
        children: [
            {
                name: "Roads",
                link: "/",
                children: [
                    { name: "Concrete Roads", link: "/" },
                    { name: "Paver Block Roads", link: "/" },
                    {
                        name: "Asphalt Roads",
                        link: "/",
                        children: [
                            { name: "Earth work", link: "/" },
                            { name: "W Metal Beam Crash Barrier", link: "/" },
                            { name: "GSB WMM", link: "/" },
                            { name: "Traffic Signals", link: "/" },
                            { name: "Bitumen Concrete", link: "/" },
                            { name: "Thermoplastic Road Marking", link: "/" },
                        ],
                    },
                ],
            },
            {
                name: "Landscape Contractors",
                link: "/",
            },
        ],
    },
    { name: "Gallery", link: "/gallery" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
];