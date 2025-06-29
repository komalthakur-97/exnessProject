import React from "react";
import { Button, Select, Tooltip, Space } from "antd";
import {
    PauseOutlined,
    RiseOutlined,
    PicLeftOutlined,
    BarChartOutlined,
    HighlightOutlined,
    FontSizeOutlined,
    SmileOutlined, DeleteOutlined
} from "@ant-design/icons";

const { Option } = Select;
const ICONS = [
    { icon: <PauseOutlined />, label: "Candle" },
    { icon: <RiseOutlined />, label: "Trend Line" },
    { icon: <PicLeftOutlined />, label: "Horizontal Line" },
    { icon: <BarChartOutlined />, label: "Polyline Tool" },
    { icon: <HighlightOutlined />, label: "Curve Tool" },
    { icon: <FontSizeOutlined />, label: "Text" },
    { icon: <SmileOutlined />, label: "Emoji" },
    { icon: <DeleteOutlined />, label: "Delete" },
];


const TradingTopBar = () => (
    <div
        style={{
            background: "rgb(20, 29, 38)",
            padding: "4px 12px",
            borderBottom: "1px solid #rgb(20, 29, 38)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 44,
            color: "#ccc",
            fontSize: 13,
        }}
    >
        {/* LEFT CONTROLS */}
        <Space size="middle">
            <Select
                defaultValue="1m"
                size="small"
                bordered={false}
                style={{ color: "#fff" }}
                dropdownStyle={{ background: "#1e1e1e", color: "#fff" }}
            >
                {["1m", "5m", "15m", "1h", "1d"].map((v) => (
                    <Option key={v} value={v}>{v}</Option>
                ))}
            </Select>

            <Space size={25}>
                {ICONS.map(({ icon, label }) => (
                    <Tooltip key={label} title={label}>
                        <span style={{ fontSize: 18, color: '#ccc', cursor: 'pointer' }}>
                            {icon}
                        </span>
                    </Tooltip>
                ))}
            </Space>

        </Space>

        {/* RIGHT: Sell/Buy */}
        <Space>
            <span>1.0</span>
            <Button
                size="small"
                style={{
                    background: "#CD5656",
                    borderColor: "#CD5656",
                    color: "#F1F5F9",
                    minWidth: 90,
                }}
            >
                Sell 144.382
            </Button>
            <Button
                size="small"
                type="primary"
                style={{
                    background: "#295F98",
                    borderColor: "#295F98",
                    minWidth: 90,
                }}
            >
                Buy 144.392
            </Button>
        </Space>
    </div>
);

export default TradingTopBar;
