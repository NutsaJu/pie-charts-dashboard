import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";
import { toggleTheme, setSelectedDataset } from "../../store/slices/appSlice";
import { dataSetMenu } from "../../data/dataSetMenu";
import { FiSun, FiMoon } from "react-icons/fi";
import Responsive from "../../assets/config/Responsive";
import { IoPieChartSharp } from "react-icons/io5";
import { lightTheme } from "../../assets/config/theme";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { theme, selectedDataset } = useAppSelector((root) => root.app);

  return (
    <HeaderWrapper>
      <TopRow>
        <Title>
          <IoPieChartSharp />
          <span>Pie Charts Dashboard</span>
        </Title>

        <ThemeToggle onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
        </ThemeToggle>
      </TopRow>

      <DataSetRow>
        {dataSetMenu.map((item) => {
          const isActive = selectedDataset === item.slug;
          return (
            <DatasetChip
              key={item.id}
              $active={isActive}
              onClick={() => dispatch(setSelectedDataset(item.slug))}
            >
              {item.label}
            </DatasetChip>
          );
        })}
      </DataSetRow>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.PrimaryBaseWhite};
  border: 1px solid ${({ theme }) => theme.PrimaryGray300};
  padding: 32px;
  position: sticky;
  border-radius: 8px;
  top: 24px;
  z-index: 100;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease;
  ${Responsive.tablet} {
    padding: 24px;
  }
  ${Responsive.mobile} {
    padding: 16px;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.PrimaryBaseBlack};

  ${Responsive.tablet} {
    font-size: 24px;
  }
  ${Responsive.mobile} {
    font-size: 18px;
  }
`;

const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.PrimaryGray300};
  color: ${({ theme }) =>
    theme.name === "light" ? theme.PrimaryBaseBlack : lightTheme.PrimaryBaseWhite};
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({ theme }) => theme.PrimaryBlue600};
    color: ${({ theme }) => theme.PrimaryBaseWhite};
    transform: scale(1.05);
  }
`;

const DataSetRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DatasetChip = styled.button<{ $active: boolean }>`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.PrimaryBlue600 : theme.PrimaryGray300};
  background-color: ${({ theme, $active }) =>
    $active ? theme.PrimaryBlue600 : "transparent"};
  color: ${({ theme, $active }) => ($active ? lightTheme.PrimaryBaseWhite : theme.PrimaryBaseBlack)};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.PrimaryBlue600 : theme.PrimaryGray300};
  }
`;
