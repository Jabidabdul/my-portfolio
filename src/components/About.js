import { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaTrophy,
  FaCoffee,
  FaGamepad,
  FaBook,
  FaPlane,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const values = [
    {
      icon: FaCode,
      title: "AI-Driven Development",
      description:
        "Expert in AI-assisted development using LangChain, LangGraph, and advanced prompting techniques for enhanced productivity.",
    },
    {
      icon: FaRocket,
      title: "Scalable Solutions",
      description:
        "Built systems handling 10,000+ requests per minute with 99.9% uptime using modern cloud technologies.",
    },
    {
      icon: FaUsers,
      title: "Team Leadership",
      description:
        "Led technical teams and supervised infrastructure scaling for high-traffic applications across multiple companies.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "Created AI workflows and automated systems that helped customers save $800K+ through efficient solutions.",
    },
  ];

  const interests = [
    { icon: FaCode, name: "AI Development" },
    { icon: FaBook, name: "Learning" },
    { icon: FaRocket, name: "Innovation" },
    { icon: FaTrophy, name: "Sports" },
    { icon: FaUsers, name: "Team Building" },
    { icon: FaLightbulb, name: "Problem Solving" },
  ];

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="about-container"
            >
              <motion.h2 data-aos="fade-up">About Me</motion.h2>
              <motion.p
                data-aos="fade-up"
                data-aos-delay="200"
                className="about-intro"
              >
                Full stack developer with 4 years of experience building
                scalable applications and leading technical teams. Expert in
                ReactJS, NextJS, TypeScript, Node.js, AWS, and modern
                development practices.
              </motion.p>

              <Row className="about-content">
                <Col md={6}>
                  <motion.div
                    className="about-text"
                    variants={itemVariants}
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <h3>My Journey</h3>
                    <p>
                      My journey into software development began during my
                      Electronics and Telecommunication Engineering studies at
                      College of Engineering, Pune. What started as curiosity
                      about how digital systems work has evolved into a career
                      dedicated to building robust, scalable applications that
                      serve thousands of users.
                    </p>
                    <p>
                      Over the past 4 years, I've had the privilege of working
                      with diverse teams and technologies, from financial
                      applications at Kudos Finance to leading technical teams
                      at Compound LLC. Each project has taught me something new
                      and reinforced my belief that great software comes from
                      understanding both the technical and business aspects of
                      development.
                    </p>
                    <p>
                      I specialize in AI-assisted development using LangChain,
                      LangGraph, and advanced prompting techniques. When I'm not
                      coding, you'll find me exploring new AI technologies,
                      contributing to open-source projects, or sharing knowledge
                      with the developer community.
                    </p>
                  </motion.div>
                </Col>

                <Col md={6}>
                  <motion.div
                    className="about-image"
                    variants={itemVariants}
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <div className="image-container">
                      <div className="floating-elements">
                        <motion.div
                          className="floating-element react"
                          animate={{
                            y: [-10, 10, -10],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FaCode size={30} />
                        </motion.div>
                        <motion.div
                          className="floating-element node"
                          animate={{
                            x: [-5, 5, -5],
                            y: [-5, 5, -5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        >
                          <FaRocket size={25} />
                        </motion.div>
                        <motion.div
                          className="floating-element cloud"
                          animate={{
                            y: [0, -15, 0],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                          }}
                        >
                          <FaLightbulb size={28} />
                        </motion.div>
                      </div>
                      <div className="profile-placeholder">
                        <FaCode size={80} />
                      </div>
                    </div>
                  </motion.div>
                </Col>
              </Row>

              <motion.div
                className="values-section"
                variants={containerVariants}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <motion.h3 variants={itemVariants}>My Values</motion.h3>

                <Row>
                  {values.map((value, index) => (
                    <Col md={6} lg={3} key={index}>
                      <motion.div
                        className="value-card"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        data-aos="fade-up"
                        data-aos-delay={800 + index * 100}
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          padding: "20px",
                          marginBottom: "20px",
                          borderRadius: "10px",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <div className="value-icon">
                          <value.icon size={40} />
                        </div>
                        <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                          {value.title}
                        </h4>
                        <p style={{ color: "#b8b8b8" }}>{value.description}</p>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>

              <motion.div
                className="interests-section"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <h3>Beyond Code</h3>
                <p>
                  When I'm not building amazing applications, here's what I
                  enjoy:
                </p>
                <div className="interests-grid">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className="interest-item"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      data-aos="zoom-in"
                      data-aos-delay={1200 + index * 100}
                    >
                      <interest.icon size={24} />
                      <span>{interest.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="cta-section"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <h3>Let's Build Something Amazing Together</h3>
                <p>
                  I'm always excited to work on new projects and collaborate
                  with fellow developers. Whether you have a startup idea, need
                  help with an existing project, or just want to chat about
                  technology, I'd love to hear from you!
                </p>
                <motion.button
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById("connect");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <FaHeart size={20} />
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
