import "./App.css";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeatureCard from "./FeatureCard";
import { COLORS, OPTION } from "./colors";
import { lightenColor } from "./FeatureCard";

let textColor = COLORS[OPTION].text;
let backgroundColor = COLORS[OPTION].back;
let primaryColor = COLORS[OPTION].primary;
let secondaryColor = COLORS[OPTION].secondary;
let accentColor = COLORS[OPTION].accent;

let boxHeight = "180px";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const toggleLogin = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <div style={{ height: "100%", fontFamily: "Arial" }}>
        <Navbar sticky="top" style={{ backgroundColor: primaryColor }}>
          <Stack direction="horizontal" gap={3} className="w-100">
            <div className="flex-grow-1" style={{ marginLeft: "8px" }}>
              {" "}
              <img
                src="/img/logo-light.svg"
                width="200"
                height="50"
                className="d-inline-block align-top"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                paddingRight: "48px",
              }}
            >
              {" "}
              {isLoggedIn ? (
                <>
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: "#fafafa",
                      marginRight: "8px",
                    }}
                  >
                    Hey Human!
                  </h3>
                  <Button
                    onClick={toggleLogin}
                    variant="danger"
                    style={{
                      width: "100px",
                      marginRight: "8px",
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="light"
                    style={{
                      width: "100px",
                      backgroundColor: secondaryColor,
                      borderColor: secondaryColor,
                      marginRight: "8px",
                      color: textColor,
                    }}
                  >
                    Sign up
                  </Button>
                  <Button
                    onClick={toggleLogin}
                    variant="light"
                    style={{
                      width: "100px",
                      backgroundColor: accentColor,
                      borderColor: accentColor,
                      marginRight: "8px",
                      color: textColor,
                    }}
                  >
                    Login
                  </Button>
                </>
              )}
            </div>
          </Stack>
        </Navbar>

        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "32px",
              backgroundColor: backgroundColor,
              flex: 1,
              color: textColor,
            }}
          >
            <h1 style={{ fontWeight: "bold", fontSize: "64px" }}>
              Welcome to IntelliAssist
            </h1>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "34px",
                color: lightenColor(textColor, 0.4),
              }}
            >
              Your 24/7 Virtual Customer Support Partner
            </h2>

            <Stack direction="horizontal" gap={3}>
              <div style={{ padding: "8px", width: "50%" }}>
                <h4>
                  Experience real-time support like never before with
                  IntelliAssist, your personal assistant for all your queries.
                  Say goodbye to long waiting times and hello to instant
                  solutions.
                </h4>
                <br></br>
                <br></br>
                <h4>
                  IntelliAssist is dedicated to revolutionizing customer service
                  through the power of AI. Our mission is to make support
                  accessible, instant, and more efficient than ever before. With
                  IntelliAssist, we promise a new era of customer service where
                  waiting is a thing of the past.
                </h4>
              </div>

              <div style={{ padding: "8px", width: "50%" }}>
                <h2
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  Why Choose IntelliAssist?
                </h2>
                <Container>
                  <Row>
                    <Col>
                      <FeatureCard
                        title={"Instant Support"}
                        description={
                          "Get answers to your questions instantly, anytime, anywhere."
                        }
                        boxHeight={boxHeight}
                      ></FeatureCard>
                    </Col>
                    <Col>
                      <FeatureCard
                        title={"Smart Assistance"}
                        description={
                          "Powered by cutting-edge AI to provide you with accurate and helpful responses."
                        }
                        boxHeight={boxHeight}
                      ></FeatureCard>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeatureCard
                        title={"Always Available"}
                        description={
                          "Our virtual assistant is here for you 24/7, ensuring you get support when you need it the most."
                        }
                        boxHeight={boxHeight}
                      ></FeatureCard>
                    </Col>
                    <Col>
                      <FeatureCard
                        title={"User Friendly"}
                        description={
                          "Easy to use interface that makes getting support as simple as having a conversation."
                        }
                        boxHeight={boxHeight}
                      ></FeatureCard>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Stack>
          </div>
        </div>

        <Navbar
          fixed="bottom"
          style={{
            backgroundColor: secondaryColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack gap={3}>
            {isLoggedIn && (
              <div style={{ textAlign: "center", height: "90px" }}>
                <Container fluid>
                  <Button
                    variant="primary"
                    style={{
                      width: "25%",
                      height: "100px",
                      textSizeAdjust: "50px",
                      backgroundColor: primaryColor,
                      borderColor: primaryColor,
                      fontSize: "36px",
                    }}
                  >
                    Chat
                  </Button>{" "}
                  <Button
                    variant="primary"
                    style={{
                      width: "25%",
                      height: "100px",
                      backgroundColor: primaryColor,
                      borderColor: primaryColor,
                      fontSize: "36px",
                    }}
                  >
                    Voice
                  </Button>{" "}
                  <Button
                    variant="primary"
                    style={{
                      width: "25%",
                      height: "100px",
                      backgroundColor: primaryColor,
                      borderColor: primaryColor,
                      fontSize: "36px",
                    }}
                  >
                    Video
                  </Button>{" "}
                </Container>
              </div>
            )}
            <div style={{ textAlign: "center" }}>
              <h7>© IntelliAssist 2024. All rights reserved.</h7>
            </div>
          </Stack>
        </Navbar>
      </div>
    </>
  );
}

export default App;
