import { useEffect } from "react";
import { animateClasses } from "utils/animateClasses";

export const useAnimate = (container, refs) => {
    useEffect(() => {
        const options = {
            threshold: [0, 0.3, 1],
        };

        // TO HIDE ELEMENT
        refs.map(({ ref }) => ref.current.classList.add("no-visible"));

        const callback = (entries, observer) => {
            if (entries[0].intersectionRatio >= 0.3) {
                for (let i = 0; i < refs.length; i++) {
                    const { ref, classes } = refs[i];
                    ref.current.classList.add("visible");
                    ref.current.classList.add(animateClasses["primary"]);
                    for (let j = 0; j < classes.length; j++)
                        ref.current.classList.add(animateClasses[classes[j]]);
                }
            }
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(container.current);

        return () => {
            observer.unobserve(container.current);
        };
    }, []);

    return null;
};

/*
** EJEMPLO DEL OBJETO QUE LLEGA EN 'REFS'
** NOTA: EL PRIMERO OBJETO DEBE SER EL CONTENEDOR
[
    {
        ref: refButton,
        classes: ["left", "leftFaste"]
    }
]
*/
