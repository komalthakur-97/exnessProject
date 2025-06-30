import React, { useState } from "react";
import { Tooltip } from "antd";
import {
  PlusOutlined,
  RiseOutlined,
  PicLeftOutlined,
  BarChartOutlined,
  HighlightOutlined,
  FontSizeOutlined,
  SmileOutlined, DeleteOutlined
} from "@ant-design/icons";

const tools = [
  { icon: <PlusOutlined />, label: "Cross" },
  { icon: <RiseOutlined />, label: "Trend Line" },
  { icon: <PicLeftOutlined />, label: "Horizontal Line" },
  { icon: <BarChartOutlined />, label: "Polyline Tool" },
  { icon: <HighlightOutlined />, label: "Curve Tool" },
  { icon: <FontSizeOutlined />, label: "Text" },
  { icon: <SmileOutlined />, label: "Emoji" },
  { icon: <DeleteOutlined />, label: "Delete" },
];

const TradeStatusBar = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <div
      style={{
        width: 56,
        height: '100%',
        background: '#1F2937',
        borderRight: '1px solid #1F2937',
        overflowY: 'auto',
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
                color: index === activeIndex ? "#FBBF24" : "#a3b1c2",
                fontSize: 20,
                cursor: "pointer",
                position: "relative",
                transition: "color 0.2s",
              }}
            >
              {tool.icon}
            </div>
          </Tooltip>
        ))}

        <div
          style={{
            flexGrow: 1,
            width: "80%",
            borderTop: "1px solid #1F2937",
            marginTop: 16,
          }}
        />
      </div>
    </div>
  );
};

export default TradeStatusBar;
