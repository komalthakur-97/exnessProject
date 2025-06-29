import React from "react";
import { Button, Select, Tooltip, Space, Tag, Row } from "antd";
import {
    SlidersOutlined,
    RiseOutlined,
    DownOutlined,
    NodeIndexOutlined,
    DoubleLeftOutlined,
    LeftOutlined,
    RightOutlined, AppstoreOutlined, EyeOutlined, ExpandOutlined, ArrowUpOutlined, CameraOutlined
} from "@ant-design/icons";

const { Option } = Select;
const ICONS = [
    { icon: <SlidersOutlined />, label: "Candle" },
    { icon: <NodeIndexOutlined />, label: "Indicators & Strategies" },
    { icon: <AppstoreOutlined />, label: "Indicator Templates" },
    { icon: <DoubleLeftOutlined />, label: "Bar Reply" },
    { icon: <LeftOutlined /> },
    { icon: <RightOutlined /> },
];
const ICONSRIGHT = [
    { icon: <DownOutlined />, label: "Manage Layouts" },
    { icon: <CameraOutlined />, label: "Take a Snapshot" },
    { icon: <Tag color="green" icon={<ArrowUpOutlined />} />, label: "IntraDay" },
    { icon: <ExpandOutlined />, label: "Fullscreen Mode" },
    { icon: <EyeOutlined />, label: "Show on Chart" },
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
                        <span style={{ fontSize: 20, color: '#ccc', cursor: 'pointer' }}>
                            {icon}
                        </span>
                    </Tooltip>
                ))}
            </Space>

        </Space>

        {/* RIGHT: Sell/Buy */}
        <Row>  <Space size={25}>
            <Button
                style={{
                    background: 'rgb(20, 29, 38)',
                    border: '1px solid rgb(20, 29, 38)',
                    color: '#fff',
                    padding: '4px 12px',
                    textAlign: 'center',
                    height: 'auto',
                    lineHeight: 1.2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <span style={{ color: '#fff', fontSize: 13 }}>Save</span>
                <span style={{ color: 'yellow', fontSize: 13 }}>Save</span>
            </Button>
            {ICONSRIGHT.map(({ icon, label }) => (
                <Tooltip key={label} title={label}>
                    <span style={{ fontSize: 20, color: '#ccc', cursor: 'pointer' }}>
                        {icon}
                    </span>
                </Tooltip>
            ))}
        </Space>
            <Space>
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
                <span>0.9</span>
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
            </Space></Row>
    </div>
);

export default TradingTopBar;
