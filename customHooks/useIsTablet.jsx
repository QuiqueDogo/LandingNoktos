import { useState, useEffect } from "react";

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  const windowResize = () =>
    window.innerWidth >= 760 ? setIsTablet(true) : setIsTablet(false);

  useEffect(() => {
    windowResize();
    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return [isTablet];
};

export default useIsTablet;
