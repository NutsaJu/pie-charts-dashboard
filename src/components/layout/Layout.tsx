import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Responsive from "../../assets/config/Responsive";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.PrimaryBaseWhite};
  ${Responsive.mobile}{
    height: 85vh;
  }
`;

const Content = styled.main`
  flex: 1;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.PrimaryBaseWhite};
  border: 1px solid ${({ theme }) => theme.PrimaryGray300};
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  
  ${Responsive.tablet} {
    padding: 24px;
  }
  ${Responsive.mobile} {
    padding: 16px;
  }
`;
