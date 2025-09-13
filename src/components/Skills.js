import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaMongoDb,
  FaDatabase,
  FaGoogle,
  FaServer,
  FaCloud,
  FaCode,
  FaLaravel,
  FaPhp,
  FaAngular,
  FaSass,
  FaNpm,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJest,
  SiWebpack,
  SiBabel,
  SiVuedotjs,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("ai");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Trigger animation when active category changes
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [activeCategory, isInView, mainControls]);

  const skillCategories = {
    frontend: {
      title: "Frontend & Backend Technologies",
      skills: [
        { name: "React", level: 95, icon: FaReact, color: "#61dafb" },
        { name: "NextJS", level: 90, icon: SiNextdotjs, color: "#000000" },
        { name: "Bootstrap", level: 85, icon: FaBootstrap, color: "#7952b3" },
        { name: "Node.js", level: 95, icon: FaNodeJs, color: "#68a063" },
        { name: "Express.js", level: 90, icon: SiExpress, color: "#000000" },
        { name: "RESTful APIs", level: 95, icon: FaCode, color: "#ff6b6b" },
        { name: "PostgreSQL", level: 90, icon: SiPostgresql, color: "#336791" },
        { name: "MySQL", level: 85, icon: SiMysql, color: "#4479a1" },
        { name: "DynamoDB", level: 80, icon: FaDatabase, color: "#ffd93d" },
        { name: "Firebase", level: 85, icon: FaCode, color: "#ffca28" },
      ],
    },
    ai: {
      title: "AI & Development",
      skills: [
        { name: "LangChain", level: 90, icon: FaCode, color: "#00d4aa" },
        { name: "LangGraph", level: 85, icon: FaCode, color: "#00d4aa" },
        { name: "AI-assisted IDEs", level: 95, icon: FaCode, color: "#ff6b6b" },
        {
          name: "Advanced Prompting",
          level: 90,
          icon: FaCode,
          color: "#4ecdc4",
        },
        {
          name: "AI Workflow Automation",
          level: 85,
          icon: FaCode,
          color: "#ffd93d",
        },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Lambda", level: 90, icon: FaAws, color: "#ff9900" },
        { name: "AWS S3", level: 90, icon: FaAws, color: "#ff9900" },
        { name: "AWS EC2", level: 85, icon: FaAws, color: "#ff9900" },
        { name: "AWS Textract", level: 80, icon: FaAws, color: "#ff9900" },
        { name: "AWS RDS", level: 85, icon: FaAws, color: "#ff9900" },
        { name: "Docker", level: 85, icon: FaDocker, color: "#2496ed" },
        { name: "CloudFormation", level: 80, icon: FaCloud, color: "#4285f4" },
        { name: "Firebase", level: 85, icon: FaCode, color: "#ffca28" },
        { name: "MongoDB", level: 90, icon: SiMongodb, color: "#47a248" },
        { name: "DynamoDB", level: 90, icon: FaDatabase, color: "#ffd93d" },
        { name: "GCP", level: 70, icon: FaGoogle, color: "#4285f4" },
      ],
    },
    programming: {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 98, icon: FaJs, color: "#f7df1e" },

        { name: "TypeScript", level: 95, icon: SiTypescript, color: "#3178c6" },
        { name: "HTML", level: 98, icon: FaHtml5, color: "#e34f26" },
        { name: "CSS", level: 95, icon: FaCss3Alt, color: "#1572b6" },
        { name: "Python", level: 50, icon: FaPython, color: "#3776ab" },
        { name: "Java", level: 50, icon: FaCode, color: "#f89820" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, icon: FaGitAlt, color: "#f05032" },
        { name: "Redis", level: 85, icon: SiRedis, color: "#dc382d" },
        { name: "n8n", level: 80, icon: FaCode, color: "#00d4aa" },
        { name: "Mixpanel", level: 75, icon: FaCode, color: "#7856ff" },
        {
          name: "Payment Integration",
          level: 90,
          icon: FaCode,
          color: "#00d4aa",
        },
        { name: "JWT", level: 90, icon: FaCode, color: "#ff6b6b" },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const SkillBar = ({ skill, index }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (isInView) {
        // Reset width first, then animate
        setWidth(0);
        setTimeout(() => {
          setWidth(skill.level);
        }, index * 100);
      }
    }, [isInView, skill.level, index, activeCategory]);

    return (
      <motion.div
        className="skill-item"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="skill-header">
          <div className="skill-icon">
            <skill.icon size={24} style={{ color: skill.color }} />
          </div>
          <span className="skill-name">{skill.name}</span>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
        <div className="skill-bar-container">
          <motion.div
            className="skill-bar"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
              width: `${width}%`,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              ref={ref}
              className="skill-bx"
              variants={containerVariants}
              initial="hidden"
              animate={mainControls}
            >
              <motion.h2 data-aos="fade-up">Technical Skills</motion.h2>
              <motion.p data-aos="fade-up" data-aos-delay="200">
                With 4+ years of experience, I've mastered a comprehensive range
                of technologies and tools. Here's a breakdown of my expertise
                across different domains.
              </motion.p>

              <motion.div
                className="skill-categories"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    className={`category-btn ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {skillCategories[category].title}
                  </button>
                ))}
              </motion.div>

              <motion.div
                className="skills-grid"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>

              <motion.div
                className="skill-stats"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="stat-item">
                  <h3>4+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>20+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Technologies Mastered</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
