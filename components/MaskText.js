import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export function MaskText({ children }) {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <div className="lineMask">
        <motion.div
          variants={animation}
          initial="initial"
          animate={inView ? "enter" : ""}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
