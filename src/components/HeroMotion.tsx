import { motion } from "framer-motion";

const Hero = () => {
  return (<>
  <div className="lg:ms-8">
    <div className="atropos relative">
      <div className="atropos-scale">
        <motion.div
          className="container"
          initial={{  scale: 0.9 }}
          animate={{  scale: 1 }}
          transition={{repeat: Infinity, repeatType: "mirror", duration: 2}}
        >
          <img src="assets/images/hik.webp"
          alt ="Top Hikvision dealer in Dubai"
          loading="lazy"
          />
          
        </motion.div>
      </div>
    </div>
  </div></>)
};
export default Hero;
