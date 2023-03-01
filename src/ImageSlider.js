import img1 from "./images/1.png";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.png";
import img8 from "./images/8.jpeg";
import img9 from "./images/9.jpg";
import "./ImageSlider.css";
import { motion } from "framer-motion";
import { useState } from "react";
const images = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
  {
    url: img4,
  },
  {
    url: img5,
  },
  {
    url: img6,
  },
  {
    url: img7,
  },
  {
    url: img8,
  },
  {
    url: img9,
  },
];

const variants = {
  initial: {
    x: 400,
    opacity: 1,
  },
  animate: {
    x: 0,
    scaleX: 1.2,
  },
  exit: {
    x: 400,
  },
};
const variants2 = {
  initial: {
    x: 400,
    scale: 1,
  },
  animate: {
    x: 0,
    scale: 0.7,
  },
  exit: {
    x: 0,
  },
};

const ImageSlider = (props) => {
  const [animationStateCenter, setAnimationStateCenter] = useState("");
  const [animationStateSide, setAnimationStateSide] = useState("");
  const [animationStateLastSide, setAnimationStateLastSide] = useState("");
  const [firstPicture, setFirstPicture] = useState(0);
  const [secondPicture, setSecondPicture] = useState(1);
  const [thirdPicture, setThirdPicture] = useState(2);

  const goPrevious = () => {
    setAnimationStateSide({
      initial: {
        x: -400,
        scale: 1,
      },
      animate: {
        x: 0,
        scale: 0.7,
      },
      exit: {
        x: 0,
      },
      transition: { duration: 2 },
    });
    setAnimationStateCenter({
      initial: {
        x: -400,
        opacity: 1,
      },
      animate: {
        x: 0,
        scaleX: 1.2,
      },
      exit: {
        x: 400,
      },
      transition: { duration: 2 },
    });
    setAnimationStateLastSide({
      initial: {
        x: -400,
      },
      animate: {
        x: 0,
        scale: 0.7,
      },
      exit: {
        x: 0,
      },
      transition: { duration: 2 },
    });

    //   initial: {
    //     x: -400,
    //     // scaleX: 1,
    //   },
    //   animate: {
    //     x: 0,
    //     // scaleX: 0.7,
    //   },
    //   end: {
    //     x: 0,
    //   },
    // });
    setFirstPicture(firstPicture - 1);
    setSecondPicture(secondPicture - 1);
    setThirdPicture(thirdPicture - 1);

    console.log(firstPicture);
    if (firstPicture <= 0) {
      setFirstPicture(images.length - 1);
    }
    if (secondPicture <= 0) {
      setSecondPicture(images.length - 1);
    }
    if (thirdPicture <= 0) {
      setThirdPicture(images.length - 1);
      console.log(thirdPicture);
    }
  };

  const goSecond = () => {
    setAnimationStateSide({
      initial: {
        x: 400,
        scale: 1,
      },
      animate: {
        x: 0,
        scale: 0.7,
      },
      exit: {
        x: 0,
      },
      transition: { duration: 2 },
    });
    setAnimationStateCenter({
      initial: {
        x: 400,
        opacity: 1,
      },
      animate: {
        x: 0,
        scaleX: 1.2,
      },
      exit: {
        x: 400,
      },
      transition: { duration: 2 },
    });
    setAnimationStateLastSide({
      initial: {
        x: 400,
      },
      animate: {
        x: 0,
        scale: 0.7,
      },
      exit: {
        x: 0,
      },
      transition: { duration: 2 },
    });

    setFirstPicture(firstPicture + 1);
    setSecondPicture(secondPicture + 1);
    setThirdPicture(thirdPicture + 1);

    console.log(firstPicture);
    if (firstPicture > images.length - 2) {
      setFirstPicture(0);
    }
    if (secondPicture > images.length - 2) {
      setSecondPicture(0);
    }
    if (thirdPicture > images.length - 2) {
      setThirdPicture(0);
      console.log(thirdPicture);
    }
  };

  const renderImages = () => {
    console.log(
      "first" +
        firstPicture +
        " second" +
        secondPicture +
        " third" +
        thirdPicture
    );

    return (
      <div className="image-gallery__container">
        <div className="imgcontainer">
          <motion.img
            variants={animationStateSide}
            animate="animate"
            initial="initial"
            exit="exit"
            transition="transition"
            src={images[firstPicture].url}
            className="side-picture"
            key={Math.random()}
          />
        </div>
        <div className="imgcontainer">
          <motion.img
            variants={animationStateCenter}
            animate="animate"
            initial="initial"
            exit="exit"
            transition="transition"
            src={images[secondPicture].url}
            alt="bbz"
            className="center-picture"
            key={Math.random()}
          />
        </div>
        <div className="imgcontainer">
          <motion.img
            variants={animationStateLastSide}
            animate="animate"
            initial="initial"
            exit="exit"
            transition="transition"
            src={images[thirdPicture].url}
            alt="bbz"
            className="side-picture"
            key={Math.random()}
          />
        </div>
        <div className="leftArrow" onClick={goPrevious}>
          LEFT
        </div>
        <div className="rightArrow" onClick={goSecond}>
          RIGHT
        </div>
      </div>
    );
  };

  return renderImages();
};

export default ImageSlider;
// return images.map((img) => {
//   return (
//     <div className="imgcontainer">
//       <img src={img.url} key={img.url} alt="bbz" />
//     </div>
//   );
// });
