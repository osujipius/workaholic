import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

export const FadeIn = ({ children }) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 400,
    to: {
      y: !inView ? 23 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};
