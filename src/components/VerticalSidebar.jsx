import React, { useState } from 'react';
import { UnorderedListOutlined, CalendarOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const iconStyle = {
    fontSize: 20,
    color: '#ccc',
};

const VerticalSidebar = () => {
    const [active, setActive] = useState('menu');

    const navItems = [
        { key: 'menu', icon: <UnorderedListOutlined /> },
        { key: 'calendar', icon: <CalendarOutlined /> },
    ];

    return (
        <div
            style={{
                width: 50,
                backgroundColor: 'rgb(20, 29, 38)',
                padding: '12px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                height: '100vh',
            }}
        >
            {navItems.map((item) => (
                <div
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    style={{
                        width: 34,
                        height: 34,
                        borderRadius: 6,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: active === item.key ? '1px solid #6d8dad' : '1px solid transparent',
                        background: active === item.key ? '#1f2a38' : 'transparent',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                >
                    <span style={iconStyle}>{item.icon}</span>
                </div>
            ))}
        </div>
    );
};

export default VerticalSidebar;
