import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formDetails.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formDetails.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formDetails.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formDetails.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formDetails.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formDetails.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formDetails.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });

    // Clear error when user starts typing
    if (errors[category]) {
      setErrors({
        ...errors,
        [category]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setButtonText("Sending...");

    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      let result = await response.json();

      if (result.code == 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails(formInitialDetails);
        setErrors({});
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
      setButtonText("Send Message");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
    <section className="contact" id="connect">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="contact-container"
        >
          <motion.h2 data-aos="fade-up">Get In Touch</motion.h2>
          <motion.p
            data-aos="fade-up"
            data-aos-delay="200"
            className="contact-intro"
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Let's create something amazing together!
          </motion.p>

          <Row className="contact-content">
            <Col md={6}>
              <motion.div
                className="contact-info"
                variants={itemVariants}
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <h3>Let's Connect</h3>
                <p>
                  I'm always excited to work on new projects and collaborate
                  with fellow developers. Whether you have a startup idea, need
                  help with an existing project, or just want to chat about
                  technology, I'd love to hear from you!
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <FaEnvelope size={20} />
                    <div>
                      <h4>Email</h4>
                      <p>jabidabdul72@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <FaPhone size={20} />
                    <div>
                      <h4>Phone</h4>
                      <p>+91 7002252043</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <FaMapMarkerAlt size={20} />
                    <div>
                      <h4>Location</h4>
                      <p>Remote / Available Worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-icons">
                    <a
                      href="https://github.com/Jabidabdul"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jabid-abdul-hamid-955028194/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://twitter.com/jabidabdul"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href="https://instagram.com/jabidabdul"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div
                className="contact-form-container"
                variants={itemVariants}
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <form onSubmit={handleSubmit} className="contact-form">
                  <Row>
                    <Col size={12} sm={6} className="form-group">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                        className={errors.firstName ? "error" : ""}
                      />
                      {errors.firstName && (
                        <div className="error-message">
                          <FaExclamationCircle size={14} />
                          {errors.firstName}
                        </div>
                      )}
                    </Col>

                    <Col size={12} sm={6} className="form-group">
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                        className={errors.lastName ? "error" : ""}
                      />
                      {errors.lastName && (
                        <div className="error-message">
                          <FaExclamationCircle size={14} />
                          {errors.lastName}
                        </div>
                      )}
                    </Col>

                    <Col size={12} sm={6} className="form-group">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                        className={errors.email ? "error" : ""}
                      />
                      {errors.email && (
                        <div className="error-message">
                          <FaExclamationCircle size={14} />
                          {errors.email}
                        </div>
                      )}
                    </Col>

                    <Col size={12} sm={6} className="form-group">
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone Number"
                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                        className={errors.phone ? "error" : ""}
                      />
                      {errors.phone && (
                        <div className="error-message">
                          <FaExclamationCircle size={14} />
                          {errors.phone}
                        </div>
                      )}
                    </Col>

                    <Col size={12} className="form-group">
                      <textarea
                        rows="6"
                        value={formDetails.message}
                        placeholder="Your Message"
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                        className={errors.message ? "error" : ""}
                      ></textarea>
                      {errors.message && (
                        <div className="error-message">
                          <FaExclamationCircle size={14} />
                          {errors.message}
                        </div>
                      )}
                    </Col>

                    <Col size={12} className="form-group">
                      <motion.button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="spinner" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane size={18} />
                            {buttonText}
                          </>
                        )}
                      </motion.button>
                    </Col>

                    {status.message && (
                      <Col size={12}>
                        <div
                          className={`status-message ${
                            status.success ? "success" : "error"
                          }`}
                        >
                          {status.success ? (
                            <FaCheckCircle size={20} />
                          ) : (
                            <FaExclamationCircle size={20} />
                          )}
                          {status.message}
                        </div>
                      </Col>
                    )}
                  </Row>
                </form>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};
