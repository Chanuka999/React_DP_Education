import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gsap = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(boxRef.current, {
      x: "100vw",
      duration: 10,
      rotation: 800,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 60%",
        end: "top 20%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <h1>Gsap</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "100px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          ref={boxRef}
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "25px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Box
        </div>
      </div>
    </>
  );
};
export default Gsap;
