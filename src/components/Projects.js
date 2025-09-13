import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaMobile,
  FaDesktop,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const projects = [
    {
      id: 1,
      title: "Compound",
      description:
        "Complete system using ReactTS/NextTS frontend, NodeJS backend, PostgreSQL database, and AWS infrastructure with AI workflow automation.",
      longDescription:
        "Architected complete system using ReactTS/NextTS frontend, NodeJS backend, PostgreSQL database, and AWS infrastructure (EC2, S3, Lambda, RDS). Integrated self-hosted n8n using Docker for AI workflow automation and created embeddable widgets for third-party integration.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      liveUrl: "https://compound.com",
      githubUrl: "https://github.com/Jabidabdul/compound",
      category: "fullstack",
      role: "Lead Software Engineer",
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
      features: [
        "AI Workflow Automation",
        "Third-party Integration",
        "Real-time Analytics",
        "Lead Generation",
      ],
      duration: "May 2025 - Present",
      teamSize: "Lead Developer",
    },
    {
      id: 2,
      title: "Shoorah (Contract Work)",
      description:
        "Full-stack mental health application using React.js frontend, Node.js backend, and MongoDB database with comprehensive wellness features.",
      longDescription:
        "Developed full-stack mental health application using React.js frontend, Node.js backend, and MongoDB database. Built comprehensive wellness features including self-assessment tools, instant support chat, and multi-user authentication with JWT.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      liveUrl: "https://shoorah.com",
      githubUrl: "https://github.com/Jabidabdul/shoorah",
      category: "fullstack",
      role: "Contract Developer",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "JWT",
        "Mental Health",
        "Wellness",
      ],
      features: [
        "Self-assessment Tools",
        "Instant Support Chat",
        "Multi-user Authentication",
        "Wellness Programs",
      ],
      duration: "February 2025 - May 2025",
      teamSize: "Contract Work",
    },
    {
      id: 3,
      title: "DebitMyData",
      description:
        "AI-powered NFT marketplace using NextJS frontend, NodeJS backend, Python3 for AI processing, and AWS services.",
      longDescription:
        "Created AI-powered NFT marketplace using NextJS frontend, NodeJS backend, Python3 for AI processing, and AWS services (Lambda, S3, DynamoDB). Built automated NFT creation and sales functionality with AI agents executing tasks based on user instructions.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "https://debitmydata.com",
      githubUrl: "https://github.com/Jabidabdul/debitmydata",
      category: "fullstack",
      role: "Full-Stack Developer",
      technologies: [
        "NextJS",
        "NodeJS",
        "Python3",
        "AWS Lambda",
        "S3",
        "DynamoDB",
      ],
      features: [
        "AI-powered NFT Creation",
        "Automated Sales",
        "AI Agents",
        "Serverless Architecture",
      ],
      duration: "December 2024 - April 2025",
      teamSize: "Solo Project",
    },
    {
      id: 4,
      title: "Revitpay",
      description:
        "Scalable data processing platform using React.js frontend, Node.js backend, AWS Textract for OCR, Lambda for processing, S3 for storage, and DynamoDB for metadata.",
      longDescription:
        "Built scalable data processing platform using React.js frontend, Node.js backend, AWS Textract for OCR, Lambda for processing, S3 for storage, and DynamoDB for metadata. Processed 100,000+ documents including PDFs and images with 95% accuracy using AWS Textract integration.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveUrl: "https://revitpay.com",
      githubUrl: "https://github.com/Jabidabdul/revitpay",
      category: "backend",
      role: "Full-Stack Developer",
      technologies: [
        "React.js",
        "Node.js",
        "AWS Textract",
        "Lambda",
        "S3",
        "DynamoDB",
      ],
      features: [
        "Document Processing",
        "OCR Integration",
        "Data Extraction",
        "Scalable Architecture",
      ],
      duration: "June 2024 - December 2024",
      teamSize: "Solo Project",
    },
    {
      id: 5,
      title: "Clarks",
      description:
        "Backend automation using AWS Lambda and Step Functions to convert retail product information into JSON format.",
      longDescription:
        "Developed backend automation using AWS Lambda and Step Functions to convert retail product information into JSON format. Built automated data processing pipeline handling 50,000+ product records with 99.5% accuracy.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      liveUrl: "https://clarks.com",
      githubUrl: "https://github.com/Jabidabdul/clarks",
      category: "backend",
      role: "Backend Developer",
      technologies: [
        "AWS Lambda",
        "Step Functions",
        "Node.js",
        "JSON Processing",
        "Automation",
      ],
      features: [
        "Data Automation",
        "Product Processing",
        "High Accuracy",
        "Scalable Pipeline",
      ],
      duration: "March 2023 - May 2024",
      teamSize: "Team Project",
    },
    {
      id: 6,
      title: "Tokenmetrics",
      description:
        "Backend automation services using Node.js and Express.js for live cryptocurrency pricing and watchlist functionality.",
      longDescription:
        "Developed backend automation services using Node.js and Express.js for live cryptocurrency pricing and watchlist functionality. Built responsive React.js UI application with real-time data updates and integrated Mixpanel for user behavior analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "https://tokenmetrics.com",
      githubUrl: "https://github.com/Jabidabdul/tokenmetrics",
      category: "fullstack",
      role: "Full-Stack Developer",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Cryptocurrency",
        "Mixpanel",
        "Real-time Data",
      ],
      features: [
        "Live Pricing",
        "Watchlist",
        "Real-time Updates",
        "User Analytics",
      ],
      duration: "February 2022 - February 2023",
      teamSize: "Team Project",
    },
    {
      id: 7,
      title: "Skugal ERP",
      description:
        "Comprehensive school data systems using Firebase ecosystem and AWS Lambda with scalable backend APIs.",
      longDescription:
        "Managed comprehensive school data systems using Firebase ecosystem (Firestore, Authentication, Cloud Functions) and AWS Lambda. Developed scalable backend APIs using Node.js and Express.js, serving 5,000+ students and staff members. Integrated CashFree payment solutions processing 2,000+ monthly transactions for school fees and services.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "https://erp.skugal.com",
      githubUrl: "https://github.com/Jabidabdul/skugal-erp",
      category: "fullstack",
      role: "Full-Stack Developer",
      technologies: [
        "Firebase",
        "Firestore",
        "AWS Lambda",
        "Node.js",
        "Express.js",
        "CashFree",
        "School Management",
      ],
      features: [
        "Student Management",
        "Payment Processing",
        "Real-time Data",
        "Scalable APIs",
      ],
      duration: "February 2022 - February 2025",
      teamSize: "Team Project",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full-Stack" },
    { key: "backend", label: "Backend" },
    { key: "frontend", label: "Frontend" },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        variants={itemVariants}
        className="project-card-wrapper"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <Tilt
          tiltMaxAngleX={0.5}
          tiltMaxAngleY={0.5}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
        >
          <motion.div
            className="project-card"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <div className="project-category">{project.category}</div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-role">{project.role}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-tag more">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <div className="project-features">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    <FaCode size={12} /> {feature}
                  </span>
                ))}
              </div>

              <div className="project-meta">
                <div className="meta-item">
                  <FaDesktop size={14} />
                  <span>{project.duration}</span>
                </div>
                <div className="meta-item">
                  <FaServer size={14} />
                  <span>{project.teamSize}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="projects-container"
            >
              <motion.h2 data-aos="fade-up">Featured Projects</motion.h2>
              <motion.p data-aos="fade-up" data-aos-delay="200">
                A showcase of my most impactful projects, demonstrating
                expertise in full-stack development, cloud architecture, and
                modern web technologies. Each project represents a unique
                challenge and innovative solution.
              </motion.p>

              <motion.div
                className="project-filters"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    className={`filter-btn ${
                      activeFilter === filter.key ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter.key)}
                  >
                    {filter.label}
                  </button>
                ))}
              </motion.div>

              <motion.div
                className="projects-grid"
                variants={containerVariants}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
