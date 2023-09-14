import React from "react";
import styled from "styled-components";
import FormContainer from "./FormContainer";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Validate email and password here
    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    if (email && password) {
    }
  };

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <Sub>
            <StyledLink to="/"><img
              src="../logo.png"
              width="200px"
              height="200px"
              position="relative"
            ></img></StyledLink>

            <h1>
              Shabab <span>Al</span> Burhan
            </h1>
          </Sub>
        </HeaderContainer>
      </Header>
      <FormContainer>
        <StyledHeading>Sign Up</StyledHeading>

        <Form onSubmit={submitHandler}>
          <Form.Group className="my-4" controlId="email">
            <StyledFormLabel>Email Address</StyledFormLabel>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-4" controlId="password">
            <StyledFormLabel>Password</StyledFormLabel>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <StyledButton type="submit" variant="inherit" className="mt-3">
            Sign Up
          </StyledButton>

          <Row className="py-4">
            <StyledCol>
              Already have an account?{" "}
              <StyledLink to="/login">Login</StyledLink>
            </StyledCol>
          </Row>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #fff, #bce6ff, #6c5b7c);
  background-size: 200% 100%;
  overflow: hidden;
`;

const Header = styled.header`
  width: 100vw;
  height: 5rem;
  padding: 1rem 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

// sub header
const Sub = styled.div`
  display: flex;
  align-items: center;
  margin-top: -4rem;
  margin-left: -1rem;

  h1 {
    font-size: 2rem;
    color: #6c5b7c;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-left: -1rem;

    span {
      color: #2d82b5;
    }
  }

  @media screen and (max-width: 400px) {
    margin-top: -2rem;

    h1 {
      font-size: 1.4rem;
      margin-left: 2rem;
    }

    img {
      width: 120px;
      height: 120px;
    }
  }
`;

const StyledHeading = styled.h1`
  font-size: 30px;
  color: #2d82b5;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const StyledFormLabel = styled(Form.Label)`
  font-size: 18px;
  color: #6c5b7c;
`;

const StyledButton = styled(Button)`
  width: 30%;
  padding: 12px 10px;
  border-radius: 15px !important;
  background-color: #2d82b5 !important;
  color: #fff !important;
  font-size: 20px;
  box-shadow: 2px 0px 15px rgba(108, 91, 124, 1);

  &:hover {
    cursor: pointer;
    background-color: #a2a8d3 !important;
    color: white;
  }
`;

const StyledCol = styled(Col)`
  padding: 10px;
  color: #2d82b5;
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  color: #6c5b7c;
  text-decoration: none;
  font-size: 18px;
`;

export default SignUp;