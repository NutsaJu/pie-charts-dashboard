import React, { useMemo, useState } from "react";
import styled, { useTheme } from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { getChartColors } from "../assets/config/ChartColors";
import type { PieChartCardProps } from "../types/types";

const PieChartCard: React.FC<PieChartCardProps> = ({ title, data }) => {
  const theme = useTheme();
  const chartColors = getChartColors(theme);

  const [hiddenCategories, setHiddenCategories] = useState<string[]>([]);

  const filteredData = useMemo(
    () => data.filter((item) => !hiddenCategories.includes(item.name)),
    [data, hiddenCategories]
  );

  const total = useMemo(
    () => filteredData.reduce((sum, item) => sum + item.value, 0),
    [filteredData]
  );

  const toggleCategory = (name: string) => {
    setHiddenCategories((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        <Total>{total.toLocaleString()}</Total>
      </Header>

      <ChartWrapper>
        <ResponsiveContainer width="100%" height={244}>
          <PieChart>
            <Pie
              data={filteredData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={50}
              paddingAngle={1}
              stroke="none"
              labelLine={false}
              animationDuration={700}
            >
              {filteredData.map((_, i) => (
                <Cell
                  key={`cell-${i}`}
                  fill={chartColors[i % chartColors.length]}
                />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) =>
                active && payload && payload[0] ? (
                  <ToolTipWrapper>
                    <span>{payload[0].name}</span>: {payload[0].value}
                  </ToolTipWrapper>
                ) : null
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <Legend>
        {data.map((item, i) => {
          const color = chartColors[i % chartColors.length];
          const isHidden = hiddenCategories.includes(item.name);
          const percentage = total
            ? ((item.value / total) * 100).toFixed(0)
            : "0";

          return (
            <LegendItem
              key={i}
              onClick={() => toggleCategory(item.name)}
              $hidden={isHidden}
            >
              <ColorDot $color={color} />
              <LegendLabel $hidden={isHidden}>{item.name}</LegendLabel>
              <LegendValue $hidden={isHidden}>{percentage}%</LegendValue>
            </LegendItem>
          );
        })}
      </Legend>
    </Card>
  );
};

export default PieChartCard;

const Card = styled.div`
  background-color: ${({ theme }) => theme.PrimaryBaseWhite};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.PrimaryGray300};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 434px;
  width: 100%;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.PrimaryBaseBlack};
`;

const Total = styled.div`
  font-size: 30px;
  font-weight: 400;
  color: ${({ theme }) => theme.PrimaryBaseBlack};
`;

const ChartWrapper = styled.div`
  width: 100%;
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80%;
`;

const LegendItem = styled.div<{ $hidden?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  opacity: ${({ $hidden }) => ($hidden ? 0.4 : 1)};
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ColorDot = styled.span<{ $color: string }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;

const LegendLabel = styled.span<{ $hidden?: boolean }>`
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme, $hidden }) =>
    $hidden ? theme.PrimaryGray300 : theme.PrimaryGray600};
`;

const LegendValue = styled.span<{ $hidden?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $hidden }) =>
    $hidden ? theme.PrimaryGray300 : theme.PrimaryBaseBlack};
`;

const ToolTipWrapper = styled.div`
  background-color: ${({ theme }) => theme.PrimaryBaseWhite};
  padding: 8px;
  border: 0.5px solid ${({ theme }) => theme.PrimaryGray600};
  border-radius: 8px;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.PrimaryBaseBlack};
  }
`;