import { motion } from "motion/react";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    // bottom to top then top to bottom
    top: ["100%", "0%", "0%", "100%"],
    // top to bottom
    // top: "100%",
  },
  exit: {
    // bottom to top then top to bottom
    opacity: 0,
    // top to bottom
    // top: ["100%", "0%"],
  },
};
// calculation the reverse index
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

// // index wise color
// const colors = [
//   "#FF595E",
//   "#FFCA3A",
//   "#8AC926",
//   "#1982C4",
//   "#6A4C93",
//   "#FF9F1C",
// ];

export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            // // index wise color
            // style={{
            //   backgroundColor: colors[index],
            // }}

            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}
