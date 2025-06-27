import React from "react";
import { Button, Select, Tooltip, Space } from "antd";

const { Option } = Select;
const ICONS = {
    candlestick: "https://img.icons8.com/ios-filled/24/ffffff/candlestick-chart.png",
    indicators: "https://img.icons8.com/ios-filled/24/2aa9ff/combo-chart--v1.png",
    layout: "https://img.icons8.com/ios-filled/24/ffffff/4-cells.png",
    undo: "https://img.icons8.com/ios-filled/24/ffffff/undo.png",
    redo: "https://img.icons8.com/ios-filled/24/ffffff/redo.png",
    save: "https://img.icons8.com/ios-filled/24/fadb14/save-close.png",
    download: "https://img.icons8.com/ios-filled/24/ff4d4f/download--v1.png",
    screenshot: "https://img.icons8.com/ios-filled/24/ffffff/camera.png",
    visibility: "https://img.icons8.com/ios-filled/24/ffffff/visible.png",
};

const TradingTopBar = () => (
    <div
        style={{
            background: "#1E293B",
            padding: "4px 12px",
            borderBottom: "1px solid #1E293B",
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
                style={{ width: 60, background: "#333", borderRadius: 4, color: "#0F172A" }}
                dropdownStyle={{ background: "#1e1e1e", color: "#0F172A" }}
            >
                {["1m", "5m", "15m", "1h", "1d"].map((v) => (
                    <Option key={v} value={v}>{v}</Option>
                ))}
            </Select>

            {Object.entries(ICONS).slice(0, 9).map(([key, url]) => (
                <Tooltip key={key} title={key.charAt(0).toUpperCase() + key.slice(1)}>
                    <img
                        src={url}
                        alt={key}
                        style={{ width: 20, height: 20, cursor: "pointer" }}
                    />
                </Tooltip>
            ))}
        </Space>

        {/* RIGHT: Sell/Buy */}
        <Space>
            <span>1.0</span>
            <Button
                size="small"
                style={{
                    background: "#cf1322",
                    borderColor: "#cf1322",
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
                    background: "#1890ff",
                    borderColor: "#1890ff",
                    minWidth: 90,
                }}
            >
                Buy 144.392
            </Button>
        </Space>
    </div>
);

export default TradingTopBar;
