import { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaRocket,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const experiences = [
    {
      id: 1,
      title: "Lead Software Engineer",
      company: "Compound LLC FZ, Dubai (Remote)",
      location: "Remote",
      duration: "May 2025 - Present",
      type: "work",
      description:
        "Leading technical team and supervising infrastructure scaling for high-traffic applications. Built entire product backend handling 10,000+ requests per minute.",
      achievements: [
        "Led and built entire product backend handling 10,000+ requests per minute using NodeJS, PostgreSQL, and AWS infrastructure",
        "Launched JavaScript based widgets for third-party seamless integration",
        "Created AI automated flow using LangChain, LangGraph, and self-hosted n8n with various workflows for lead generation and sales pipeline",
        "Helped customers create and action $800K+ of savings plans",
      ],
      technologies: [
        "ReactTS",
        "NextTS",
        "NodeJS",
        "PostgreSQL",
        "AWS",
        "LangChain",
        "LangGraph",
        "n8n",
      ],
      icon: FaRocket,
      color: "#AA367C",
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Skugal Tech, Delhi NCR (Remote)",
      location: "Remote",
      duration: "February 2022 - April 2025",
      type: "work",
      description:
        "Delivered 5+ major projects including Tokenmetrics, Platodata, and Clarks with data visualization focus, serving 50,000+ active users.",
      achievements: [
        "Delivered 5+ major projects including Tokenmetrics, Platodata, and Clarks with data visualization focus, serving 50,000+ active users",
        "Optimized system performance by 40% by implementing Redis caching and AWS Lambda functions, reducing server costs by 30%",
        "Built scalable backend APIs handling 5,000+ concurrent users with 99.8% uptime using Node.js and AWS services",
        "Integrated payment solutions processing 10,000+ transactions monthly with CashFree and Stripe APIs",
      ],
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "CashFree",
        "Stripe",
      ],
      icon: FaUsers,
      color: "#4A2FBD",
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Kudos Finance and Investment Pvt Ltd, Pune, India",
      location: "Pune, India",
      duration: "October 2021 - January 2022",
      type: "work",
      description:
        "Developed financial applications using MERN stack with secure payment integrations, processing 1,000+ transactions daily.",
      achievements: [
        "Developed financial applications using MERN stack with secure payment integrations, processing 1,000+ transactions daily",
        "Implemented Git workflows for efficient version control and collaboration, reducing deployment time by 50%",
        "Built secure authentication systems with JWT tokens and encrypted data storage for financial data compliance",
        "Created responsive UI components for mobile and desktop platforms",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "MERN Stack",
        "Payment Integration",
        "Git",
      ],
      icon: FaDatabase,
      color: "#ff6b6b",
    },
    {
      id: 4,
      title: "Bachelor of Engineering",
      company: "College of Engineering, Pune",
      location: "Pune, India",
      duration: "2017 - 2021",
      type: "education",
      description:
        "Bachelor's degree in Electronics and Telecommunication Engineering with focus on software engineering and modern development practices.",
      achievements: [
        "Graduated with 74.86% grade",
        "Completed Full Stack Web Development Bootcamp at Newton School (2021)",
        "College Best Athlete - Multiple gold medals",
        "Three-time consecutive Kho-Kho gold medalist in regional sports",
        "Led football team in regional competitions",
      ],
      technologies: [
        "JavaScript",
        "Python",
        "Java",
        "Electronics",
        "Telecommunication",
        "Data Structures",
        "Algorithms",
      ],
      icon: FaCode,
      color: "#96ceb4",
    },
  ];

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

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="experience-container"
            >
              <motion.h2 data-aos="fade-up">Professional Journey</motion.h2>
              <motion.p data-aos="fade-up" data-aos-delay="200">
                My career path showcases continuous growth from a fresh graduate
                to a lead developer, with each role building upon previous
                experiences and expanding technical expertise.
              </motion.p>

              <motion.div
                className="timeline-container"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <VerticalTimeline lineColor="#AA367C">
                  {experiences.map((exp, index) => (
                    <VerticalTimelineElement
                      key={exp.id}
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "#fff",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "15px",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgba(255, 255, 255, 0.1)",
                      }}
                      date={exp.duration}
                      dateClassName="timeline-date"
                      iconStyle={{
                        background: exp.color,
                        color: "#fff",
                        boxShadow: `0 0 0 4px ${exp.color}20`,
                      }}
                      icon={<exp.icon />}
                    >
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="timeline-header">
                          <h3 className="timeline-title">{exp.title}</h3>
                          <div className="timeline-company">
                            <FaBuilding size={14} />
                            <span>{exp.company}</span>
                          </div>
                          <div className="timeline-location">
                            <FaMapMarkerAlt size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="timeline-description">
                          {exp.description}
                        </p>

                        <div className="timeline-achievements">
                          <h4>Key Achievements:</h4>
                          <ul>
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="timeline-technologies">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </motion.div>

              <motion.div
                className="experience-stats"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="stat-card">
                  <FaCalendarAlt size={30} />
                  <h3>4+ Years</h3>
                  <p>Professional Experience</p>
                </div>
                <div className="stat-card">
                  <FaBuilding size={30} />
                  <h3>4+ Companies</h3>
                  <p>Worked With</p>
                </div>
                <div className="stat-card">
                  <FaRocket size={30} />
                  <h3>10+ Projects</h3>
                  <p>Successfully Delivered</p>
                </div>
                <div className="stat-card">
                  <FaUsers size={30} />
                  <h3>20+ Team Members</h3>
                  <p>Led & Mentored</p>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
