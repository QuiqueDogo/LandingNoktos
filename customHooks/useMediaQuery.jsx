import { useState, useEffect } from "react";

const useMediaQuery = (width) => {
    const [isWidth, setIsWidth] = useState(false);

    const windowResize = () =>
        window.innerWidth > width ? setIsWidth(true) : setIsWidth(false);

    useEffect(() => {
        windowResize();
        window.addEventListener("resize", windowResize);

        return () => {
            window.removeEventListener("resize", windowResize);
        };
    }, []);

    return [isWidth];
};

export default useMediaQuery;
