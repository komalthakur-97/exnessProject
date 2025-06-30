import React from "react";
import { Space } from "antd";
import { SignalFilled } from "@ant-design/icons";

const AccountStatusBar = () => {
    const stats = [
        { label: "Equity", value: "10,000.00 USD" },
        { label: "Free Margin", value: "10,000.00 USD" },
        { label: "Balance", value: "10,000.00 USD" },
        { label: "Margin", value: "0.00 USD" }
    ];

    return (
        <div
            style={{
                background: "#1F2937",
                borderTop: "1px solid #333",
                padding: "12px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#ccc",
                fontSize: 13
            }}
        >
            <Space size="large">
                {stats.map((stat, index) => (
                    <span key={index}>
                        <span style={{ color: "#999" }}>{stat.label}:</span>{" "}
                        <strong style={{ color: "#F1F5F9", fontWeight: 500 }}>{stat.value}</strong>
                    </span>
                ))}
            </Space>

            <SignalFilled style={{ color: "#00c853", fontSize: 18 }} />
        </div>
    );
};

export default AccountStatusBar;
