import React, { useState } from "react";
import { Tooltip } from "antd";
import {
  SplitCellsOutlined,
  RiseOutlined,
  DashOutlined,
  BranchesOutlined,
  HighlightOutlined,
  EditOutlined,
  FontSizeOutlined,
  SmileOutlined,
} from "@ant-design/icons";

// Beautified icons list with better semantic names
const tools = [
  { icon: <SplitCellsOutlined />, label: "Crosshair" },
  { icon: <RiseOutlined />, label: "Trend Line" },
  { icon: <DashOutlined />, label: "Horizontal Line" },
  { icon: <BranchesOutlined />, label: "Polyline Tool" },
  { icon: <HighlightOutlined />, label: "Curve Tool" },
  { icon: <EditOutlined />, label: "Brush" },
  { icon: <FontSizeOutlined />, label: "Text" },
  { icon: <SmileOutlined />, label: "Emoji" },
];

const TradeStatusBar = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <div
      style={{
        width: 56,
        height: '100%',
        background: '#1f2a38',
        borderRight: '1px solid #1E293B',
        overflowY: 'auto',
        scrollbarWidth: 'none', // for Firefox
        msOverflowStyle: 'none', // for IE/Edge
      }}
      className="no-scrollbar"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px 0',
          boxSizing: 'border-box',
        }}
      >
        {tools.map((tool, index) => (
          <Tooltip title={tool.label} placement="right" key={index}>
            <div
              onClick={() => setActiveIndex(index)}
              style={{
                margin: "12px 0",
                color: index === activeIndex ? "#4cf12c" : "#a3b1c2",
                fontSize: 20,
                cursor: "pointer",
                position: "relative",
                transition: "color 0.2s",
              }}
            >
              {tool.icon}
              {index === activeIndex && (
                <div
                  style={{
                    position: "absolute",
                    right: -6,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 4,
                    height: 24,
                    background: "#4cf12c",
                    borderRadius: "0 2px 2px 0",
                  }}
                />
              )}
            </div>
          </Tooltip>
        ))}

        <div
          style={{
            flexGrow: 1,
            width: "80%",
            borderTop: "1px solid #1E293B",
            marginTop: 16,
          }}
        />

        <Tooltip title="Measure Tool" placement="right">
          <div
            style={{
              marginTop: 16,
              color: "#a3b1c2",
              fontSize: 20,
              cursor: "pointer",
              transition: "color 0.2s",
            }}
          >
            <SmileOutlined />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default TradeStatusBar;
