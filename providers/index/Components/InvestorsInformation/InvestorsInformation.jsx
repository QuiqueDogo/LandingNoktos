import styles from "./styles.module.scss";
import { useAnimate } from "customHooks/useAnimate";
import useIsDesktop from "customHooks/useIsDesktop";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "customHooks/useMediaQuery";

const InvestorsInformation = () => {
  const [isDesktop] = useIsDesktop();
  const [isMedia] = useMediaQuery(1390);
  const [items, setItems] = useState(1);
  // REFERENCES
  const content = useRef();
  const container = useRef();

  const dataRefs = [
    {
      ref: content,
      classes: ["down"],
    },
  ];

  useAnimate(container, dataRefs);

  useEffect(() => {
    if (isMedia) setItems(3);
    else if (isDesktop) setItems(2);
    else setItems(1);
  }, [isDesktop, isMedia]);

  return (
    <section ref={container}>
      <div
        className="bg-dark d-flex flex-column align-items-center p-3"
        ref={content}
      >
        <img className="w-25" src="/icons/techstars_logo.png" alt="Techstars" />
        <p className="text-center text-white mt-1">
          Noktos, a Techstars Anywhere Accelerator portfolio company
        </p>
      </div>
    </section>
  );
};

export default InvestorsInformation;
