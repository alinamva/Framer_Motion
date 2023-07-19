import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeatType: "reverse",
        repeat: Infinity,

        duration: 0.5,
      },
      y: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="w-[10px] h-[10px] m-[40px] rounded-full bg-white"
      ></motion.div>
      <div className="cursor-pointer" onClick={() => cycleAnimation()}>
        <span>Cycle Animation</span>
      </div>
    </>
  );
};

export default Loader;
