import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HomeHeroFlipText() {
  const [arr] = useState([
    "Building",
    "Cleaning Maintenence",
    "Power Service",
    "FTTH Material Supply",
    "Uniform",
    "Event Organizer",
  ]);
  const [arrId, setArrId] = useState(0);

  useEffect(() => {
    const showArr = setInterval(() => {
      if (arrId >= arr.length - 1) {
        setArrId(0);
      } else {
        setArrId((prev) => prev + 1);
      }
    }, 5000);
    return () => clearInterval(showArr);
  }, [arrId, arr]);

  const variants = {
    initial: { rotateX: 90 },
    animate: { rotateX: 0, delay: 3 },
    exit: { rotateX: 90 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={arrId}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3 }}
          className=""
        >
          {arr[arrId]}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
