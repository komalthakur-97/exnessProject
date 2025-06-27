import React, { useState } from "react";
import { Badge, Tooltip, Typography, Empty } from "antd";
import { AppstoreOutlined, ExpandOutlined, MoreOutlined } from "@ant-design/icons";

const tabs = ["OPEN", "PENDING", "CLOSED"];

const ColBewlow = () => {
    const [activeTab, setActiveTab] = useState("OPEN");

    return (
        <div
            style={{
                background: "#1E293B",
                borderTop: "1px solid #1E293B",
                padding: "0 16px",
                display: "flex",
                flexDirection: "column",
                height: 140,
                color: "#999"
            }}
        >
            {/* Tabs */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: 36,
                    borderBottom: "1px solid #222",
                    position: "relative"
                }}
            >
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            marginRight: 24,
                            cursor: "pointer",
                            fontWeight: activeTab === tab ? "bold" : "normal",
                            color: activeTab === tab ? "#F1F5F9" : "#999",
                            position: "relative"
                        }}
                    >
                        {tab}{" "}
                        <Badge
                            count={0}
                            style={{
                                backgroundColor: "#666",
                                fontSize: 10,
                                marginLeft: 4
                            }}
                        />
                        {activeTab === tab && (
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: -8,
                                    left: 0,
                                    width: "100%",
                                    height: 2,
                                    backgroundColor: "#fadb14"
                                }}
                            />
                        )}
                    </div>
                ))}

                {/* Right icons */}
                <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
                    <Tooltip title="Grid View">
                        <AppstoreOutlined style={{ color: "#ccc", fontSize: 16, cursor: "pointer" }} />
                    </Tooltip>
                    <Tooltip title="Full screen">
                        <ExpandOutlined style={{ color: "#ccc", fontSize: 16, cursor: "pointer" }} />
                    </Tooltip>
                    <Tooltip title="More">
                        <MoreOutlined style={{ color: "#ccc", fontSize: 16, cursor: "pointer" }} />
                    </Tooltip>
                </div>
            </div>

            {/* Content area (placeholder) */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#666"
                }}
            > <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    styles={{ image: { height: 60 } }}
                    description={
                        <Typography.Text style={{color:"#F1F5F9"}}>
                            No Positions
                        </Typography.Text>
                    } />
            </div>
        </div>
    );
};

export default ColBewlow;
