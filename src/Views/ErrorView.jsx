import React from "react";
import styled from "styled-components";
import { FiAlertCircle } from "react-icons/fi";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #495057;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  color: #dc3545;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #6c757d;
`;

const ErrorView = () => {
  return (
    <ErrorContainer>
      <IconWrapper>
        <FiAlertCircle />
      </IconWrapper>
      <Title>Something Went Wrong</Title>
      <Message>We encountered an error. Please try again later.</Message>
    </ErrorContainer>
  );
};

export default ErrorView;
