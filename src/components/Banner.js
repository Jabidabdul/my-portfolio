import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import {
  ArrowRightCircle,
  Github,
  Linkedin,
  CodeSlash,
  Server,
  Cloud,
} from "react-bootstrap-icons";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const toRotate = [
    "Full-Stack Developer",
    "MERN Stack Expert",
    "DevOps Engineer",
    "Cloud Solutions Architect",
    "React Specialist",
    "Node.js Developer",
  ];
  const period = 2000;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleScrollToConnect = () => {
    const element = document.getElementById("connect");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="banner" id="home">
      {/* Animated Background Particles */}
      <div className="particles-container">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={mainControls}
              className="banner-content"
            >
              <motion.div variants={itemVariants} className="tagline-container">
                <span
                  className="tagline"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Welcome to my Portfolio
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span className="greeting">Hi! I'm Jabid, a</span>
                <br />
                <span className="typing-text">
                  <ReactTyped
                    strings={toRotate}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={2000}
                    loop
                    showCursor={true}
                    cursorChar="|"
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Passionate full-stack developer with 4+ years of experience
                building scalable web applications. I specialize in modern
                JavaScript frameworks, cloud architecture, and creating seamless
                user experiences. Let's build something amazing together!
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="banner-buttons"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <motion.button
                  className="primary-btn"
                  onClick={handleScrollToConnect}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect <ArrowRightCircle size={25} />
                </motion.button>

                <motion.button
                  className="secondary-btn"
                  onClick={() =>
                    window.open("https://github.com/Jabidabdul", "_blank")
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} /> View GitHub
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="social-links"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <a
                  href="https://www.linkedin.com/in/jabid-abdul-hamid-955028194/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Jabidabdul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
              </motion.div>
            </motion.div>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <motion.div
              className="banner-image"
              variants={floatingVariants}
              animate="animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="image-container">
                <img src={headerImg} alt="Header Img" />
                <div className="floating-icons">
                  <motion.div
                    className="floating-icon react-icon"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <CodeSlash size={30} />
                  </motion.div>
                  <motion.div
                    className="floating-icon node-icon"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Server size={25} />
                  </motion.div>
                  <motion.div
                    className="floating-icon cloud-icon"
                    animate={{ x: [-5, 5, -5] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Cloud size={28} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
