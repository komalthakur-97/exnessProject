import React, { useEffect, useState, useRef } from 'react';
import { Table, Input, Select, Tag, Space, Card } from 'antd';
import {
    ArrowUpOutlined,
    ArrowDownOutlined,
    MinusOutlined,
    MoreOutlined,
    CloseOutlined, HolderOutlined
} from '@ant-design/icons';

const { Option } = Select;


const dataSource = [
    {
        key: '1',
        symbol: 'BTC',
        icon: '🪙',
        signal: 'down',
        bid: '107,469.85',
        ask: '107,491.45',
        change: '+0.09%',
        pl: '-',
    },
    {
        key: '2',
        symbol: 'AAPL',
        icon: '🍎',
        signal: 'up',
        bid: '200.08',
        ask: '200.20',
        change: '-1.05%',
        pl: '-',
    },
    {
        key: '3',
        symbol: 'XAU/USD',
        icon: '🥇🇺🇸',
        signal: 'down',
        bid: '3,323.078',
        ask: '3,323.238',
        change: '-0.48%',
        pl: '-',
    },
    {
        key: '4',
        symbol: 'EUR/USD',
        icon: '🇪🇺🇺🇸',
        signal: 'up',
        bid: '1.17011',
        ask: '1.17020',
        change: '+0.15%',
        pl: '-',
    },
    {
        key: '5',
        symbol: 'GBP/USD',
        icon: '🇬🇧🇺🇸',
        signal: 'up',
        bid: '1.37322',
        ask: '1.37332',
        change: '+0.31%',
        pl: '-',
    },
    {
        key: '6',
        symbol: 'USD/JPY',
        icon: '🇺🇸🇯🇵',
        signal: 'down',
        bid: '144.406',
        ask: '144.416',
        change: '-0.35%',
        pl: '-',
    },
    {
        key: '7',
        symbol: 'USTEC',
        icon: '🇺🇸',
        signal: 'neutral',
        bid: '22,383.95',
        ask: '22,385.81',
        change: '+0.54%',
        pl: '-',
    },
    {
        key: '8',
        symbol: 'USOIL',
        icon: '🛢️',
        signal: 'up',
        bid: '65.719',
        ask: '65.736',
        change: '+1.80%',
        pl: '-',
    },
];


const InstrumentsTable = () => {
    const [data, setData] = useState([...dataSource]); // state to manage rows

    const [fxData, setFxData] = useState([]);
    const dragRowIndex = useRef(); // to keep track of dragged index
    const dragRowKey = useRef();

    const components = {
        body: {
            row: (props) => {
                const key = props['data-row-key'];
                return (
                    <tr
                        {...props}
                        className={key === dragRowKey.current ? 'dragging-row' : ''}
                        draggable
                        onDragStart={() => onDragStart(key)}
                        onDragOver={onDragOver}
                        onDrop={() => onDrop(key)}
                        style={{ cursor: 'grab' }}
                    />
                );
            },
        },
    };

    const onDragStart = (key) => {
        dragRowKey.current = key;
    };

    const onDrop = (targetKey) => {
        const dragKey = dragRowKey.current;
        if (dragKey === targetKey) return;

        const dragIndex = data.findIndex(item => item.key === dragKey);
        const dropIndex = data.findIndex(item => item.key === targetKey);

        const newData = [...data];
        const draggedRow = newData[dragIndex];

        newData.splice(dragIndex, 1);
        newData.splice(dropIndex, 0, draggedRow);

        setData(newData);
    };


    const getSignalTag = (signal) => {
        switch (signal) {
            case 'up':
                return <Tag color="green" icon={<ArrowUpOutlined />} />;
            case 'down':
                return <Tag color="red" icon={<ArrowDownOutlined />} />;
            default:
                return <Tag color="default" icon={<MinusOutlined />} />;
        }
    };

    const columns = [
        // {
        //     title: '',
        //     dataIndex: 'drag',
        //     key: 'drag',
        //     width: 30,
        //     render: () => (

        //     ),
        // },
        {
            title: 'Symbol',
            dataIndex: 'symbol',
            key: 'symbol',
            render: (_, record) => (
                <Space>
                    <HolderOutlined style={{ cursor: 'grab', color: '#888' }} />
                    <span style={{ fontSize: 18 }}>{record.icon}</span>
                    <span style={{ fontWeight: 500, color: '#F1F5F9' }}>{record.symbol}</span>
                </Space>
            ),
        },
        {
            title: 'Signal',
            dataIndex: 'signal',
            key: 'signal',
            render: (signal) => getSignalTag(signal),
            align: 'center',
        },
        {
            title: 'Bid',
            dataIndex: 'bid',
            key: 'bid',
            render: (bid) => (
                <div
                    style={{
                        background: '#29b474',
                        color: '#000',
                        padding: '2px 6px',
                        borderRadius: 4,
                        fontWeight: 500,
                        fontSize: 12,
                    }}
                >
                    {bid}
                </div>
            ),
            align: 'right',
        },
        {
            title: 'Ask',
            dataIndex: 'ask',
            key: 'ask',
            render: (ask) => (
                <div
                    style={{
                        background: '#e84c4c',
                        color: '#F1F5F9',
                        padding: '2px 6px',
                        borderRadius: 4,
                        fontWeight: 500,
                        fontSize: 12,
                    }}
                >
                    {ask}
                </div>
            ),
            // align: 'right',
        }, {
            title: '1D Change',
            dataIndex: 'change',
            key: 'change',
            render: (change) => {
                const isPositive = change?.startsWith('+');
                const color = isPositive ? 'green' : 'red';
                const icon = isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />;
                return (
                    <Space style={{ color }}>
                        {icon}
                        <span>{change}</span>
                        {/* You can add mini chart image/svg/icon here if you have it */}
                    </Space>
                );
            },
            align: 'right',
        },
        {
            title: 'P/L, USD',
            dataIndex: 'pl',
            key: 'pl',
            render: (pl) => <span style={{ color: '#F1F5F9' }}>{pl || '-'}</span>,
            align: 'center',
        },
        {
            title: '',
            dataIndex: 'favorite',
            key: 'favorite',
            render: () => <span style={{ color: 'gold', fontSize: 18 }}>⭐</span>,
            align: 'center',
        },

    ];

    const onDragOver = (e) => {
        e.preventDefault(); // allow drop
    };



    return (
        <Card
            title={<span style={{ color: '#aaa' }}>INSTRUMENTS</span>}
            bodyStyle={{ background: '#1E293B', padding: '0 12px 12px' }}
            style={{
                width: '100%',
                height: '100%',
                background: '#1A232D',
                border: '1px solid #2f3e4d',
                borderRadius: 0,
                color: '#F1F5F9',
            }}
            headStyle={{ background: '#1A232D', borderBottom: '1px solid #2f3e4d' }}
        >
            <Input placeholder="🔍 Search" style={{ marginBottom: 8 }} />
            <Select defaultValue="Favorites" style={{ width: '100%', marginBottom: 10 }}>
                <Option value="Favorites">Favorites</Option>
                <Option value="All">All Instruments</Option>
            </Select>

            <Table
                dataSource={data}
                columns={columns}
                rowKey="key"
                components={components}
                size="small"
                pagination={false}
                scroll={{ y: 300 }} // 👈 vertical scroll only
                style={{
                    background: '#1A232D',
                    color: '#0F172A',
                    fontSize: 13,
                    whiteSpace: 'nowrap',  // ⛔ remove this if present
                }}
            />

        </Card>
    );
};
export default InstrumentsTable;
