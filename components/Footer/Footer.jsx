import { useState, useEffect } from "react";
import Content from "./Content";
import ResponsiveFooter from "./ResponsiveFooter/ResponsiveFooter";

const Footer = () => {
    const [isTablet, setIsTablet] = useState(false);

    const windowResize = () =>
        window.innerWidth < 760 ? setIsTablet(true) : setIsTablet(false);

    useEffect(() => {
        windowResize();
        window.addEventListener("resize", windowResize);

        return () => {
            window.removeEventListener("resize", windowResize);
        };
    }, []);

    return !isTablet ? <Content /> : <ResponsiveFooter />;
};

export default Footer;
