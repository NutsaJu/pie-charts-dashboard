import { useState, useMemo, type JSX } from "react";
import styled from "styled-components";
import PieChartCard from "../components/PieChartCard";
import { websiteVisitorsDataset } from "../data/websiteVisitorsDataset";
import { websiteEngagementDataset } from "../data/websiteEngagementDataset";
import { useAppSelector } from "../store";
import Button from "../components/Button";
import Responsive from "../assets/config/Responsive";
import EmptyState from "../components/EmptyState";
import { MdOutlineInsights } from "react-icons/md";

const Dashboard = (): JSX.Element => {
  const { selectedDataset } = useAppSelector((root) => root.app);
  const [selectedPeriod, setSelectedPeriod] = useState("Last Month");

  const activeDataset = useMemo(() => {
    return selectedDataset === "visitors"
      ? websiteVisitorsDataset
      : websiteEngagementDataset;
  }, [selectedDataset]);

  const currentPeriod = activeDataset.periods.find(
    (p) => p.label === selectedPeriod
  );

  return (
    <PageContainer>
      <HeaderRow>
        <Title>{activeDataset.label}</Title>
        <PeriodFilter>
          {["Last Week", "Last Month", "Last Year"].map((period) => (
            <Button
              id={period}
              key={period}
              active={selectedPeriod === period}
              onClick={() => setSelectedPeriod(period)}
              title={period}
            />
          ))}
        </PeriodFilter>
      </HeaderRow>

      {currentPeriod ? (
        <ChartsGrid>
          <PieChartCard
            title={currentPeriod.chart1.title}
            data={currentPeriod.chart1.data}
          />
          <PieChartCard
            title={currentPeriod.chart2.title}
            data={currentPeriod.chart2.data}
          />
        </ChartsGrid>
      ) : (
        <EmptyState
          icon={<MdOutlineInsights />}
          title="No Period Selected"
          description="Please select a period above to display analytics data."
        />
      )}
    </PageContainer>
  );
};

export default Dashboard;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.PrimaryBaseBlack};

  ${Responsive.mobile} {
    font-size: 16px;
  }
`;

const PeriodFilter = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ChartsGrid = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 24px;

  ${Responsive.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;
