// import { useRef, useEffect, useCallback } from "react";

// const useTurnIcon = (duration = 1, delay = 0) => {
//   const element = useRef();

//   const onScroll = useCallback(
//     ([entry]) => {
//       const { current } = element;
//       if (entry.isIntersecting) {
//         current.style.opacity = 1;
//         current.style.transform = current.style.transitionDelay = `${delay}s`;
//         current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
//         current.style.transitionProperty = "all";
//       }
//     },
//     [delay, duration]
//   );
//   useEffect(() => {
//     let observer;

//     if (element.current) {
//       observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
//       observer.observe(element.current);
//     }

//     return () => observer && observer.disconnect();
//   }, [onScroll]);
//   return {
//       ref:element,
//       style: {opacity 0 , transform: use}
//   }
// };
// //
