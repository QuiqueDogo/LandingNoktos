export const animateClasses = {
    primary: "animate__animated",
    up: "animate__fadeInUp",
    down: "animate__fadeInDown",
    left: "animate__fadeInLeft",
    right: "animate__fadeInRight",
    fadeIn: "animate__fadeIn",
    rightIn: "animate__slideInRight",
    leftIn: "animate__slideInLeft",
    left2: "animate__delay-1s",
    left3: "animate__delay-2s",
};

// useEffect(() => {
//     const options = {
//         threshold: [0, 0.5, 1],
//     };

//     title.current.classList.add("no-visible");
//     item1.current.classList.add("no-visible");
//     item3.current.classList.add("no-visible");

//     const callback = (entries, observer) => {
//         if (entries[0].intersectionRatio >= 0.5) {
//             const { primary, down, left, right } = animateClasses;
//             title.current.classList.add("visible", primary, down);
//             item1.current.classList.add("visible", primary, left);
//             item3.current.classList.add("visible", primary, right);
//         }
//     };
//     const observer = new IntersectionObserver(callback, options);
//     observer.observe(container.current);

//     return () => {
//         observer.unobserve(container.current);
//     };
// }, []);
