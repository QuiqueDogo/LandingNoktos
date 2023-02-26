import Content from "./Content";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { checkIfSessionExist } from "utils/utils";

const LandingPageLayout = ({ title, url, keywords, description, children }) => {
  const router = useRouter();
  const { isAuthenticated } = useSelector(({ user }) => user);
  const { prevPath } = useSelector(
    ({ applicationReducer }) => applicationReducer
  );

  useEffect(() => {
    // SI ESTA AUTENTICADO SE VA A REDIRIGIR, PERO,
    // ESTO SOLO VA A SUCEDER UNA VEZ POR SESION
    if (!prevPath && isAuthenticated) checkIfSessionExist(router);
  }, []);

  return (
    <Content
      url={url}
      title={title}
      keywords={keywords}
      children={children}
      description={description}
    />
  );
};

export default LandingPageLayout;
