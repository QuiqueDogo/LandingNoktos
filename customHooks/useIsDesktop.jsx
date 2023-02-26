import { useState, useEffect } from "react";

const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    const windowResize = () =>
        window.innerWidth > 1024 ? setIsDesktop(true) : setIsDesktop(false);

    useEffect(() => {
        windowResize();
        window.addEventListener("resize", windowResize);

        return () => {
            window.removeEventListener("resize", windowResize);
        };
    }, []);

    return [isDesktop];
};

export default useIsDesktop;
