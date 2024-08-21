import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import tokenmetrics from "../assets/img/tokenmetrics.png";
import cloudnito from "../assets/img/cloudnito.png";
import clarks from "../assets/img/clarks.png";
import skugalerp from "../assets/img/skugalerp.png";
import postaira from "../assets/img/postaira.png";
import platoaistream from "../assets/img/platoaistream.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const titleCss = {
  color: "#fff",
  textDecoration: "none",
  outline: "none",
};
export const Projects = () => {
  const projects = [
    {
      title: (
        <a href="https://app.cloudnito.com" target="_blank" style={titleCss}>
          Cloudnito
        </a>
      ),
      description: (
        <p style={{ width: "100%" }}>
          Fullstack Development <br /> Teckstack: ReactJS, NodeJS, ExpressJS,
          MongoDB, AWS EC2, AWS Redshift, Step Functions, DynamoDB, S3, SQS, SES
          SNS, Cognito, Firebase, Lambda, etc
        </p>
      ),
      imgUrl: cloudnito,
    },
    {
      title: (
        <a href="https://app.tokenmetrics.com" target="_blank" style={titleCss}>
          Tokenmetrics
        </a>
      ),
      description: (
        <p style={{ width: "100%" }}>
          Fullstack Development <br /> Teckstack: ReactJS, NodeJS, ExpressJS,
          AWS EC2, AWS Redshift, Step Functions, DynamoDB, S3, SQS, SNS, SES
          Cognito, Stripe Payment Integration, Okta Authentication, Lambda, etc
        </p>
      ),
      imgUrl: tokenmetrics,
    },
    {
      title: (
        <a href="https://clarks.in" target="_blank" style={titleCss}>
          Clarks
        </a>
      ),
      description: (
        <p style={{ width: "100%" }}>
          Backend Development <br /> Teckstack: NodeJS, ExpressJS, AWS EC2, AWS
          Redshift, Step Functions, DynamoDB, S3, SQS, SNS, Apache kafka,
          Lambda, etc
        </p>
      ),
      imgUrl: clarks,
    },
    {
      title: (
        <a href="https://member.postaira.com/" target="_blank" style={titleCss}>
          Postaira
        </a>
      ),
      description: (
        <p style={{ width: "100%" }}>
          Lead Fullstack Development <br /> Teckstack: ReactJS, NodeJS,
          ExpressJS, AWS EC2, AWS Redshift, DynamoDB, S3, SQS, SES, SNS,
          Cognito, Stripe Payment Integration, Firebase Authentication, Lambda,
          etc
        </p>
      ),
      imgUrl: postaira,
    },
    {
      title: (
        <a href="https://platodata.io/" target="_blank" style={titleCss}>
          Plato AI Stream
        </a>
      ),
      description: (
        <p style={{ width: "100%" }}>
          Lead Fullstack Development <br /> Teckstack: ReactJS, NodeJS,
          ExpressJS, AWS EC2, DynamoDB, S3, SQS, SNS, Firestore, Stripe Payment
          Integration, Paypal Payment Integration, Lambda, etc
        </p>
      ),
      imgUrl: platoaistream,
    },
    {
      title: (
        <a href="https://erp.skugal.com" target="_blank" style={titleCss}>
          Skugal ERP
        </a>
      ),
      description: (
        <p style={{ width: "100%" }}>
          Lead Fullstack Development <br /> Teckstack: ReactJS, NodeJS,
          ExpressJS, AWS EC2, S3, SQS, SNS, SES, Cashfree Payment
          Integration,Firestore, Firebase Authentication, Lambda, etc
        </p>
      ),
      imgUrl: skugalerp,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p style={{ width: "80%" }}>
                    I have worked on below projects with the teckstack mentioned
                    in each project. In some projects I was the lead developer,{" "}
                    <br></br> where I used to do regular meetings, creted tasks,
                    discussed the tasks and also built the architechture of the
                    feature to be implemented
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
