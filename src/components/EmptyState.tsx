import React from "react";
import styled from "styled-components";
import type { EmptyStateProps } from "../types/types";

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title = "No Data Available",
  description = "Please select a period to view statistics",
}) => {
  return (
    <Wrapper>
      {icon && <Icon>{icon}</Icon>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};

export default EmptyState;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  background-color: ${({ theme }) => theme.PrimaryBaseWhite};
  border: 1px dashed ${({ theme }) => theme.PrimaryGray300};
  border-radius: 8px;
  padding: 32px;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.PrimaryBaseBlack};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.PrimaryGray600};
  max-width: 340px;
  line-height: 1.5;
  margin-top: 4px;
`;