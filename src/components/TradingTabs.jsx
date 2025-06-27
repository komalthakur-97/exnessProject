import React, { useState } from 'react';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';

const symbolFlags = {
    'EUR/USD': ['eu', 'us'],
    'USD/JPY': ['us', 'jp'],
    'GBP/USD': ['gb', 'us'],
    'XAU/USD': ['us'], // Gold has no flag
};

const TradingTabs = () => {
    const [tabs, setTabs] = useState(['EUR/USD', 'USD/JPY']);
    const [active, setActive] = useState('USD/JPY');

    const handleAdd = () => {
        const newSymbol = prompt('Enter symbol (e.g., GBP/USD)');
        if (newSymbol && !tabs.includes(newSymbol)) {
            setTabs([...tabs, newSymbol]);
            setActive(newSymbol);
        }
    };

    const handleClose = (symbol, e) => {
        e.stopPropagation();
        const updated = tabs.filter((item) => item !== symbol);
        setTabs(updated);
        if (active === symbol && updated.length > 0) {
            setActive(updated[0]);
        }
    };

    const renderFlags = (symbol) => {
        const codes = symbolFlags[symbol];
        if (!codes) return <span>🌐</span>;

        return (
            <span style={{ display: 'flex', gap: 2 }}>
                {codes.map((code) => (
                    <img
                        key={code}
                        src={`https://flagcdn.com/w20/${code}.png`}
                        alt={code}
                        style={{ width: 20, height: 14, objectFit: 'cover', borderRadius: 2 }}
                    />
                ))}
            </span>
        );
    };

    return (
        <div
            style={{
                display: 'flex',
                background: '#141D26',
                padding: '10px 20px',
                alignItems: 'center',
            }}
        >
            <Space size="middle">
                {tabs.map((symbol) => (
                    <div
                        key={symbol}
                        onClick={() => setActive(symbol)}
                        style={{
                            position: 'relative',
                            padding: '6px 12px 6px 8px',
                            borderBottom: active === symbol ? '3px solid white' : '3px solid transparent',
                            color: '#ccc',
                            background: active === symbol ? '#1F2A38' : 'transparent',
                            borderRadius: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            cursor: 'pointer',
                        }}
                    >
                        {renderFlags(symbol)}
                        <span style={{ fontWeight: active === symbol ? 'bold' : 'normal' }}>{symbol}</span>
                        <Tooltip title="Remove">
                            <CloseOutlined
                                style={{
                                    fontSize: 10,
                                    marginLeft: 6,
                                    color: '#aaa',
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => handleClose(symbol, e)}
                            />
                        </Tooltip>
                    </div>
                ))}

                <Button
                    icon={<PlusOutlined />}
                    onClick={handleAdd}
                    shape="circle"
                    style={{ background: '#2B3B4E', border: 'none', color: 'white' }}
                />
            </Space>
        </div>
    );
};

export default TradingTabs;
